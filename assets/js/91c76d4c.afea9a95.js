"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[960],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||c[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2045:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return u},default:function(){return f},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"cli",title:"CLI",sidebar_label:"CLI",sidebar_position:2,custom_edit_url:null},u=void 0,p={unversionedId:"reference/cli",id:"reference/cli",title:"CLI",description:"Commands",source:"@site/docs/reference/cli.md",sourceDirName:"reference",slug:"/reference/cli",permalink:"/Bluehawk/reference/cli",draft:!1,editUrl:null,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"cli",title:"CLI",sidebar_label:"CLI",sidebar_position:2,custom_edit_url:null},sidebar:"mainSidebar",previous:{title:"Tags",permalink:"/Bluehawk/reference/tags"},next:{title:"Plugins",permalink:"/Bluehawk/develop/plugins"}},s={},c=[{value:"Commands",id:"commands",level:2},{value:"Snip",id:"snip",level:3},{value:"Copy",id:"copy",level:3},{value:"Check",id:"check",level:3},{value:"Flags",id:"flags",level:2},{value:"Ignore",id:"ignore",level:3},{value:"State",id:"state",level:3},{value:"Format",id:"format",level:3}],d={toc:c};function f(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"commands"},"Commands"),(0,i.kt)("p",null,"Use commands to generate different kinds of output with Bluehawk, including\ncode blocks, full files of code, and even error checks."),(0,i.kt)("h3",{id:"snip"},"Snip"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bluehawk snip --output <output-directory> <input-directory-or-file>\n")),(0,i.kt)("p",null,'Output "snippet files" that contain only the content of ',(0,i.kt)("inlineCode",{parentName:"p"},"snippet")," or\n",(0,i.kt)("inlineCode",{parentName:"p"},"snippet")," Bluehawk tags, named in the format\n",(0,i.kt)("inlineCode",{parentName:"p"},"<source-file-name>.snippet.<snippet-name>.<source-file-extension>"),".\nBy default, this command generates snippets\nthat omit all ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," tag contents. However,\nyou can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--state")," flag to generate snippet files that include\ncontent from a single state that you specify."),(0,i.kt)("h3",{id:"copy"},"Copy"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bluehawk copy --output <output-directory> <input-directory-or-file>\n")),(0,i.kt)("p",null,"Output full bluehawk-processed input files, in their original directory\nstructure, to output directory. Binary files are copied without\nBluehawk processing. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ignore")," flag to add gitignore-style\nignore patterns that omit matched files from output.\nBy default, this command generates output files that omit all ",(0,i.kt)("inlineCode",{parentName:"p"},"state"),".\nHowever, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--state")," flag to generate output files that\ninclude content from a single state that you specify."),(0,i.kt)("h3",{id:"check"},"Check"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bluehawk check <input-directory-or-file>\n")),(0,i.kt)("p",null,"Generates non-zero output if processing any input files generates a Bluehawk\nerror, zero output otherwise. Does not generate any files: instead, ",(0,i.kt)("inlineCode",{parentName:"p"},"check"),"\noutputs directly to the command line."),(0,i.kt)("h2",{id:"flags"},"Flags"),(0,i.kt)("p",null,"You can use flags to tweak the output of Bluehawk."),(0,i.kt)("h3",{id:"ignore"},"Ignore"),(0,i.kt)("p",null,"Pass a pattern to the ",(0,i.kt)("inlineCode",{parentName:"p"},"--ignore")," flag to omit any file that matches that\npattern from Bluehawk's input files. Bluehawk will not process or generate\noutput for any ignored file. You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"ignore")," flag multiple times\nin a single Bluehawk execution to ignore multiple patterns. ",(0,i.kt)("inlineCode",{parentName:"p"},".gitignore")," files\nin the input directory tree are automatically used as ignore patterns."),(0,i.kt)("h3",{id:"state"},"State"),(0,i.kt)("p",null,"Pass a state's id to the ",(0,i.kt)("inlineCode",{parentName:"p"},"--state")," flag to include only the contents of that\nstate, and no other states, in the generated output."),(0,i.kt)("h3",{id:"format"},"Format"),(0,i.kt)("p",null,"Pass the name of a markup syntax to the ",(0,i.kt)("inlineCode",{parentName:"p"},"--format")," flag when generating snippets\nto generate a formatted version of that snippet in the specified markup syntax.\nThis command currently supports\n",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/ReStructuredText"},"reStructuredText")," syntax using\n",(0,i.kt)("inlineCode",{parentName:"p"},"rst")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/snippets#highlighting-with-comments"},"docusaurus"),"\nsyntax with ",(0,i.kt)("inlineCode",{parentName:"p"},"docusaurus"),"."))}f.isMDXComponent=!0}}]);