(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{422:function(t,s,e){"use strict";e.r(s);var a=e(18),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"downloads"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#downloads"}},[t._v("#")]),t._v(" Downloads")]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.gcp.gcs.Downloads"')]),t._v("\n")])])]),e("blockquote",[e("p",[t._v("Download multiple files from a GCS bucket.")])]),t._v(" "),e("h2",{attrs:{id:"examples"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples"}},[t._v("#")]),t._v(" Examples")]),t._v(" "),e("blockquote",[e("p",[t._v("Download a list of files and move it to an archive folders")])]),t._v(" "),e("div",{staticClass:"language-yaml extra-class"},[e("pre",{pre:!0,attrs:{class:"language-yaml"}},[e("code",[e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"downloads"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"org.kestra.task.gcp.gcs.Downloads"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("from")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//my"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bucket/kestra/files/\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("action")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" MOVE\n"),e("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("moveDirectory")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" gs"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//my"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("bucket/kestra/archive/\n")])])]),e("h2",{attrs:{id:"inputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),e("h3",{attrs:{id:"action"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#action"}},[t._v("#")]),t._v(" "),e("code",[t._v("action")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The action to do on find files")])]),t._v(" "),e("p",[t._v("Can be null, in this case no action is perform")]),t._v(" "),e("h3",{attrs:{id:"allversions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#allversions"}},[t._v("#")]),t._v(" "),e("code",[t._v("allVersions")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("boolean")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("If set to "),e("code",[t._v("true")]),t._v(", lists all versions of a blob. The default is "),e("code",[t._v("false")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"filter"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#filter"}},[t._v("#")]),t._v(" "),e("code",[t._v("filter")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("BOTH")])])]),t._v(" "),e("blockquote",[e("p",[t._v("The filter files or directory")])]),t._v(" "),e("h3",{attrs:{id:"from"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#from"}},[t._v("#")]),t._v(" "),e("code",[t._v("from")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ✔️")])]),t._v(" "),e("blockquote",[e("p",[t._v("The directory to list")])]),t._v(" "),e("h3",{attrs:{id:"listingtype"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#listingtype"}},[t._v("#")]),t._v(" "),e("code",[t._v("listingType")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ❓")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("DIRECTORY")])])]),t._v(" "),e("blockquote",[e("p",[t._v("The listing type you want (like directory or recursive)")])]),t._v(" "),e("h3",{attrs:{id:"movedirectory"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#movedirectory"}},[t._v("#")]),t._v(" "),e("code",[t._v("moveDirectory")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The destination directory in case off "),e("code",[t._v("MOVE")])])]),t._v(" "),e("h3",{attrs:{id:"projectid"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#projectid"}},[t._v("#")]),t._v(" "),e("code",[t._v("projectId")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The GCP project id")])]),t._v(" "),e("h3",{attrs:{id:"regexp"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#regexp"}},[t._v("#")]),t._v(" "),e("code",[t._v("regExp")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("A regexp to filter on full path")])]),t._v(" "),e("h3",{attrs:{id:"scopes"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scopes"}},[t._v("#")]),t._v(" "),e("code",[t._v("scopes")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")]),t._v(" "),e("li",[e("strong",[t._v("Default:")]),t._v(" "),e("code",[t._v("[https://www.googleapis.com/auth/cloud-platform]")])])]),t._v(" "),e("blockquote",[e("p",[t._v("The GCP scopes to used")])]),t._v(" "),e("h3",{attrs:{id:"serviceaccount"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#serviceaccount"}},[t._v("#")]),t._v(" "),e("code",[t._v("serviceAccount")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("string")])]),t._v(" "),e("li",[e("strong",[t._v("Dynamic:")]),t._v(" ✔️")]),t._v(" "),e("li",[e("strong",[t._v("Required:")]),t._v(" ❌")])]),t._v(" "),e("blockquote",[e("p",[t._v("The GCP service account key")])]),t._v(" "),e("h2",{attrs:{id:"outputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#outputs"}},[t._v("#")]),t._v(" Outputs")]),t._v(" "),e("h3",{attrs:{id:"blobs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#blobs"}},[t._v("#")]),t._v(" "),e("code",[t._v("blobs")])]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("Type:")]),t._v(" "),e("mark",[t._v("array")])]),t._v(" "),e("li",[e("strong",[t._v("SubType:")]),t._v(" "),e("mark",[t._v("object")])])]),t._v(" "),e("blockquote",[e("p",[t._v("The bucket of the downloaded file")])])])}),[],!1,null,null,null);s.default=r.exports}}]);