---
order: 4
---
# Develop your Trigger


Here is the instruction to develop a **Trigger**.

Here is a simple Trigger example that will trigger an execution randomly:

```java
@SuperBuilder
@ToString
@EqualsAndHashCode
@Getter
@NoArgsConstructor
public class Trigger extends AbstractTrigger implements PollingTriggerInterface, TriggerOutput<Trigger.Random> {
    @Builder.Default
    private final Duration interval = Duration.ofSeconds(60);

    protected Double min = 0.5;

    @Override
    public Optional<Execution> evaluate(RunContext runContext, TriggerContext context) throws Exception {
        Logger logger = runContext.logger();
        double random = Math.random();

        if (random < this.min) {
            return Optional.empty();
        }

        Execution execution = Execution.builder()
            .id(IdUtils.create())
            .namespace(context.getNamespace())
            .flowId(context.getFlowId())
            .flowRevision(context.getFlowRevision())
            .state(new State())
            .trigger(ExecutionTrigger.of(
                this,
                Trigger.Random.builder().random(random).build()
            ))
            .build();

        return Optional.of(execution);
    }

    @Builder
    @Getter
    public class Random implements org.kestra.core.models.tasks.Output {
        private Double random;
    }
}
```

You just need to extend `PollingTriggerInterface` and implement the `Optional<Execution> evaluate(RunContext runContext, TriggerContext context)` method.

You can have any properties you want like for any task (validation, documentation, ...) is working the same way.

The `test` will receive these arguments :
- `RunContext runContext`: a RunContext in order to render your properties.
- `TriggerContext context`: to have the context of this call (flow, execution, trigger, date, ...)

In this method, you add any logic you want, connect to a database, connect to remote file systems. 
You don't have to take care of resource, Kestra will run this method in this own thread.

This method must simply return an `Optional<Execution>` with : 
- `Optional.empty()`: if the condition is not validated 
- `Optional.of(execution)`: with the execution created if the condition is validated.  

You have to provide a `TriggerOutput<T>` for any output needed (result of query, result of file system listing, ...) that will be available for the flow tasks withing the <code v-pre>{{ trigger.* }}</code> variables. 

::: warning
Take care that the trigger must free the resource for the next evaluation, for each interval, this method will be called, and if the condition are meet, an execution will be created.

To avoid this, move the file, remove the record from the database, but take an action to avoid an infinite triggering.
:::
