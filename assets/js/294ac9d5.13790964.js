"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[856],{4953:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return a},metadata:function(){return o},toc:function(){return c},default:function(){return p}});var s=t(7462),i=t(3366),u=(t(7294),t(3905)),l=["components"],r={id:"plugins",title:"Plugins",sidebar_label:"Plugins",sidebar_position:4,custom_edit_url:null},a=void 0,o={unversionedId:"plugins",id:"plugins",isDocsHomePage:!1,title:"Plugins",description:"You can add commands and listeners by creating a JS file or node project that",source:"@site/docs/plugins.md",sourceDirName:".",slug:"/plugins",permalink:"/Bluehawk/plugins",editUrl:null,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"plugins",title:"Plugins",sidebar_label:"Plugins",sidebar_position:4,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Use Cases",permalink:"/Bluehawk/use-cases"}},c=[],d={toc:c};function p(e){var n=e.components,t=(0,i.Z)(e,l);return(0,u.kt)("wrapper",(0,s.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"You can add commands and listeners by creating a JS file or node project that\nimplements the register() function:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},'// myPlugin.js\nexports.register = (bluehawk) => {\n  // Register a new command, :my-command:\n  bluehawk.registerCommand("my-command", {\n    rules: [],\n    process: (request) => {\n      // Execute command\n    },\n  });\n\n  // Register a document listener\n  bluehawk.subscribe((finishedDocument) => {\n    // Do something with finishedDocument\n  });\n};\n')),(0,u.kt)("p",null,"Usage:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-shell"},"bluehawk --plugin ./myPlugin source.txt\n")),(0,u.kt)("p",null,"You can pass the --plugin flag multiple times to load different plugins or create a plugin that is composed of other plugins."))}p.isMDXComponent=!0}}]);