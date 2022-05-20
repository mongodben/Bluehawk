"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4286],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,l=function(e,n){if(null==e)return{};var t,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,i=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),c=p(t),d=l,k=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return t?a.createElement(k,o(o({ref:n},u),{},{components:t})):a.createElement(k,o({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var i=t.length,o=new Array(i);o[0]=c;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r.mdxType="string"==typeof e?e:l,o[1]=r;for(var p=2;p<i;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},9497:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return r},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var a=t(7462),l=t(3366),i=(t(7294),t(3905)),o=["components"],r={id:"tags",title:"Tags",sidebar_label:"Tags",sidebar_position:1,custom_edit_url:null},s=void 0,p={unversionedId:"reference/tags",id:"reference/tags",isDocsHomePage:!1,title:"Tags",description:"Bluehawk tags come in two forms: single-line and block. Single-line tags",source:"@site/docs/reference/tags.md",sourceDirName:"reference",slug:"/reference/tags",permalink:"/Bluehawk/reference/tags",editUrl:null,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"tags",title:"Tags",sidebar_label:"Tags",sidebar_position:1,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Continuous Integration",permalink:"/Bluehawk/continuous-integration/"},next:{title:"CLI",permalink:"/Bluehawk/reference/cli"}},u=[{value:"Attribute Lists",id:"attribute-lists",children:[],level:2},{value:"Snippet",id:"snippet",children:[],level:2},{value:"State",id:"state",children:[],level:2},{value:"State-Uncomment",id:"state-uncomment",children:[],level:2},{value:"Uncomment",id:"uncomment",children:[],level:2},{value:"Replace",id:"replace",children:[],level:2},{value:"Emphasize",id:"emphasize",children:[],level:2},{value:"Remove",id:"remove",children:[],level:2}],m={toc:u};function c(e){var n=e.components,t=(0,l.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Bluehawk ",(0,i.kt)("strong",{parentName:"p"},"tags")," come in two forms: ",(0,i.kt)("em",{parentName:"p"},"single-line")," and ",(0,i.kt)("em",{parentName:"p"},"block"),". Single-line tags\noperate upon the current line, while block tags operate upon the span of lines between\nthe start of the tag and the end of the tag. Since tags aren't valid syntax in\nmost languages, you should place them in comments -- Bluehawk will still process them.\nTo avoid name clashes with various languages and markup frameworks, all Bluehawk tags\nbegin and end with colons (",(0,i.kt)("inlineCode",{parentName:"p"},":"),")."),(0,i.kt)("p",null,"The following examples demonstrate the ",(0,i.kt)("a",{parentName:"p",href:"#remove"},"remove"),"\ntag in single-line and block forms:"),(0,i.kt)("p",null,"Single-line tags use ",(0,i.kt)("inlineCode",{parentName:"p"},":<tag>:")," to mark up a single line:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n  public static void main(String[] args){\n    int a = 2;\n    int b = 3;\n    int c = a * b;\n    assert(c == 6); // :remove:\n    System.out.println("Hello world!");\n  }\n}\n')),(0,i.kt)("p",null,"Block tags use ",(0,i.kt)("inlineCode",{parentName:"p"},":<tag>-start:")," and ",(0,i.kt)("inlineCode",{parentName:"p"},":<tag>-end:")," to mark the beginning and end\nof a spanned range of lines:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n  public static void main(String[] args){\n    int a = 2;\n    int b = 3;\n    int c = a * b;\n    // :remove-start:\n    assert(c == 6);\n    // :remove-end:\n    System.out.println("Hello world!");\n  }\n}\n')),(0,i.kt)("p",null,"Some tags, like ",(0,i.kt)("inlineCode",{parentName:"p"},"remove")," in the examples above, don't require any arguments at all.\nOther tags, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"snippet"),", require a unique (to that file) identifier. Yet other\ntags, such as ",(0,i.kt)("inlineCode",{parentName:"p"},"replace"),", require an ",(0,i.kt)("a",{parentName:"p",href:"#attribute-lists"},"attribute list")," of JSON objects. Pass arguments to\ntags by listing them after the tag itself:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n  public static void main(String[] args){\n    // :snippet-start: multiply-abc\n    int a = 2;\n    int b = 3;\n    int c = a * b;\n    // :remove-start:\n    assert(c == 6);\n    // :remove-end:\n    System.out.println("Hello world!");\n    // :snippet-end:\n  }\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 For a summary of all of the tags available in your local installation\nof Bluehawk, run ",(0,i.kt)("inlineCode",{parentName:"p"},"bluehawk list tags"),".")),(0,i.kt)("h2",{id:"attribute-lists"},"Attribute Lists"),(0,i.kt)("p",null,"Attribute lists are JSON objects that contain additional information about a tag.\nThey must use double quotes for fields, and the opening line of an attribute list\nmust appear on the same line as the tag itself."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// :some-tag-start: {\n//    "field": "value"\n// }\n// :some-tag-end:\n')),(0,i.kt)("h2",{id:"snippet"},"Snippet"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"snippet")," tag, also aliased as ",(0,i.kt)("inlineCode",{parentName:"p"},"code-block"),", marks a range of content in a file\nas a snippet. You can use the ",(0,i.kt)("a",{parentName:"p",href:"#snip"},"snip")," CLI command to generate snippet files from\nthese snippets."),(0,i.kt)("p",null,"Because ",(0,i.kt)("inlineCode",{parentName:"p"},"snippet")," operates on ranges of content, it is only available as\na block tag. You must pass ",(0,i.kt)("inlineCode",{parentName:"p"},"snippet")," an identifier."),(0,i.kt)("p",null,"Consider the following file:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Main.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n  public static void main(String[] args){\n    // :snippet-start: test-block\n    System.out.println("Hello world!");\n    // :snippet-end:\n  }\n}\n')),(0,i.kt)("p",null,"Running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bluehawk snip Main.java -o .\n")),(0,i.kt)("p",null,"Produces the following output:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Main.codeblock.test-block.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'System.out.println("Hello world!");\n')),(0,i.kt)("h2",{id:"state"},"State"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," tag marks a range of content in a file as part of a particular state.\nYou can use the ",(0,i.kt)("a",{parentName:"p",href:"#snip"},"snip")," or ",(0,i.kt)("a",{parentName:"p",href:"#copy"},"copy")," CLI commands with the ",(0,i.kt)("a",{parentName:"p",href:"#state"},"state"),"\nflag to generate output files that contain only content from a specific named state.\nWhen you use the ",(0,i.kt)("inlineCode",{parentName:"p"},"--state")," flag to specify a state, all state blocks other than the\nspecified state are removed from the output. All content not in a state block is\nunaffected and outputs normally."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"state"),' can be helpful for managing tutorial code\nwith multiple steps, such as a "start" state that only contains ',(0,i.kt)("inlineCode",{parentName:"p"},"// TODO"),' and a\n"final" state that contains completed implementation code.'),(0,i.kt)("p",null,"Because ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," operates on ranges of content, it is only available as\na block tag. You must pass ",(0,i.kt)("inlineCode",{parentName:"p"},"state")," at ",(0,i.kt)("em",{parentName:"p"},"least one")," identifier, which determines\nthe name of the state or states that the block belongs to. You can pass\nin a list of identifiers either through a space-separated list directly after\nthe tag itself, or through the ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," field of an ",(0,i.kt)("a",{parentName:"p",href:"#attribute-lists"},"attribute list"),"."),(0,i.kt)("p",null,"Consider the following file:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Main.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n  public static void main(String[] args){\n    // :snippet-start: example\n    int example = 1;\n    // :state-start: hello-world\n    System.out.println("Hello world!");\n    // :state-end:\n    // :state-start: hello-user\n    System.out.println("Hello user!");\n    // :state-end:\n    example++;\n    // :snippet-end:\n  }\n}\n')),(0,i.kt)("p",null,"Running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bluehawk snip Main.java -o . --state hello-user\n")),(0,i.kt)("p",null,"Produces the following output:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Main.codeblock.example.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'int example = 1;\nSystem.out.println("Hello user!");\nexample++;\n')),(0,i.kt)("p",null,"Alternatively, running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bluehawk snip Main.java -o . --state hello-world\n")),(0,i.kt)("p",null,"Produces the following output:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Main.codeblock.example.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'int example = 1;\nSystem.out.println("Hello world!");\nexample++;\n')),(0,i.kt)("h2",{id:"state-uncomment"},"State-Uncomment"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"state-uncomment")," tag combines the ",(0,i.kt)("a",{parentName:"p",href:"#state"},"state")," and ",(0,i.kt)("a",{parentName:"p",href:"#uncomment"},"uncomment"),"\ntags. In terms of syntax, ",(0,i.kt)("inlineCode",{parentName:"p"},"state-uncomment")," works exactly the same as ",(0,i.kt)("inlineCode",{parentName:"p"},"state"),",\nexcept one layer of commenting is removed from the entire state in produced output.\nUse ",(0,i.kt)("inlineCode",{parentName:"p"},"state-uncomment")," to prevent executable code in a state from actually executing\nin the source code you use to produce output."),(0,i.kt)("p",null,"Because ",(0,i.kt)("inlineCode",{parentName:"p"},"state-uncomment")," operates on ranges of content, it is only available as\na block tag."),(0,i.kt)("p",null,"Consider the following file:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Main.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n  public static void main(String[] args){\n    // :snippet-start: add-or-subtract\n    int example = 1;\n    // :state-start: add-one\n    example++;\n    // :state-end:\n    // :state-uncomment-start: subtract-one\n    //example--;\n    // :state--uncomment-end:\n    System.out.println("Example: " + example);\n    // :snippet-end:\n  }\n}\n')),(0,i.kt)("p",null,"Running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bluehawk snip Main.java -o . --state subtract-one\n")),(0,i.kt)("p",null,"Produces the following output:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Main.codeblock.add-or-subtract.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'    int example = 1;\n    example--;\n    System.out.println("Example: " + example);\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 Note that Bluehawk has trimmed one layer of comments from the ",(0,i.kt)("inlineCode",{parentName:"p"},"hello-user"),"\nstate in the produced code block.")),(0,i.kt)("p",null,"With ",(0,i.kt)("inlineCode",{parentName:"p"},"state-uncomment"),", you can create multiple valid end states but only run\none of those states when executing your source code."),(0,i.kt)("h2",{id:"uncomment"},"Uncomment"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"uncomment")," tag removes a single comment from the beginning of\neach line of the spanned range in all output."),(0,i.kt)("p",null,"Because ",(0,i.kt)("inlineCode",{parentName:"p"},"uncomment")," operates on ranges of content, it is only available as\na block tag."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 Comments are only specified in certain language types. For example, plaintext\ndoes not have a comment syntax, so this tag does nothing in plaintext.")),(0,i.kt)("p",null,"Consider the following file:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Main.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n  public static void main(String[] args){\n    int example = 1;\n    // :uncomment-start:\n    //example--;\n    // :uncomment-end:\n    example++;\n    System.out.println("Example: " + example);\n  }\n}\n')),(0,i.kt)("p",null,"Running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bluehawk copy Main.java -o .\n")),(0,i.kt)("p",null,"Produces the following output:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Main.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n  public static void main(String[] args){\n    int example = 1;\n    example--;\n    example++;\n    System.out.println("Example: " + example);\n  }\n}\n')),(0,i.kt)("h2",{id:"replace"},"Replace"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"replace"),' tag accepts a JSON dictionary called "terms" as input\nvia an attribute list, and replaces occurrences string keys in the map within\nthe spanned range with their map values in all output. You can use\n',(0,i.kt)("inlineCode",{parentName:"p"},"replace")," to hide implementation details like complicated class names\nor API endpoint URLs in generated output."),(0,i.kt)("p",null,"Because ",(0,i.kt)("inlineCode",{parentName:"p"},"replace"),' operates on ranges of content, it is only available\nas a block tag. You must pass an attribute list containing "terms",\na dictionary of strings to strings.'),(0,i.kt)("p",null,"Consider the following file:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Main.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// :replace-start: {\n//    "terms": {\n//       "MyMainExample": "Main",\n//       "www.example.com/rest/v1": "YOUR_REST_ENDPOINT_HERE"\n//    }\n// }\n\n/*\n * MyMainExample -- a class that contains only a hello world main method\n * that defines a rest endpoint.\n */\npublic class MyMainExample {\n  String rest_endpoint;\n\n  public static void main(String[] args){\n    System.out.println("Hello world!");\n    rest_endpoint = "www.example.com/rest/v1"\n  }\n}\n// :replace-end:\n')),(0,i.kt)("p",null,"Running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bluehawk copy Main.java -o .\n")),(0,i.kt)("p",null,"Produces the following output:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Main.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'/*\n * Main -- a class that contains only a hello world main method\n * that defines a rest endpoint.\n */\npublic class Main {\n  String rest_endpoint;\n\n  public static void main(String[] args){\n    System.out.println("Hello world!");\n    rest_endpoint = "YOUR_REST_ENDPOINT_HERE"\n  }\n}\n')),(0,i.kt)("h2",{id:"emphasize"},"Emphasize"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"emphasize")," tag highlights marked lines in formatted output.\n",(0,i.kt)("inlineCode",{parentName:"p"},"emphasize")," makes it easier to keep the correct lines highlighted\nwhen you update code samples, because it calculates the highlighted\nline numbers for you."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"emphasize")," as either a block tag or a line tag."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udca1 The emphasize tag only applies to ",(0,i.kt)("a",{parentName:"p",href:"./cli#format"},"formatted output"),".\nUse the ",(0,i.kt)("inlineCode",{parentName:"p"},"--format")," flag with Bluehawk CLI to get formatted output.")),(0,i.kt)("p",null,"Consider the following file:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Main.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n  public static void main(String[] args){\n    // :code-block-start: modulo\n    int dividend = 11;\n    int divisor = 3;\n    int modulus = dividend % divisor; // :emphasize:\n    System.out.println(dividend + " % " + divisor + " = " + modulus);\n    // :code-block-end:\n  }\n}\n')),(0,i.kt)("p",null,"Running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bluehawk snip Main.java -o . --format=rst\n")),(0,i.kt)("p",null,"Produces the following output:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Main.codeblock.modulo.java.code-block.rst"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rst"},'.. code-block:: java\n   :emphasize-lines: 3\n\n   int dividend = 11;\n   int divisor = 3;\n   int modulus = dividend % divisor;\n   System.out.println(dividend + " % " + divisor + " = " + modulus);\n')),(0,i.kt)("h2",{id:"remove"},"Remove"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"remove")," tag, also aliased as ",(0,i.kt)("inlineCode",{parentName:"p"},"hide"),", removes the spanned\nrange from Bluehawk output. ",(0,i.kt)("inlineCode",{parentName:"p"},"remove")," can be helpful for hiding\nassertions and state setup from user-facing code samples."),(0,i.kt)("p",null,"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"remove")," as either a block tag or a\nline tag."),(0,i.kt)("p",null,"Consider the following file:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Main.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class Main {\n\n  public static void main(String[] args){\n    // :code-block-start: division\n    int dividend = 11;\n    int divisor = 3;\n    int quotient = dividend / divisor;\n    assert(quotient == 3) // :remove:\n    System.out.println(dividend + " / " + divisor + " = " + quotient);\n    // :code-block-end:\n  }\n}\n')),(0,i.kt)("p",null,"Running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"bluehawk snip Main.java -o .\n")),(0,i.kt)("p",null,"Produces the following output:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Main.codeblock.division.java"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rst"},'int dividend = 11;\nint divisor = 3;\nint quotient = dividend / divisor;\nSystem.out.println(dividend + " / " + divisor + " = " + quotient);\n')))}c.isMDXComponent=!0}}]);