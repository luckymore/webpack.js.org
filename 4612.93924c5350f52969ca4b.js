"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4612],{4612:function(e,a,n){n.r(a),n(7378);var t=n(2682);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},p.apply(this,arguments)}function o(e){let{components:a,...n}=e;return(0,t.kt)("wrapper",p({components:a},n),(0,t.kt)("p",null,"解析器是使用 ",(0,t.kt)("inlineCode",{parentName:"p"},"enhanced-resolve")," 库创建的。",(0,t.kt)("inlineCode",{parentName:"p"},"Resolver")," 类\n拓展了 ",(0,t.kt)("inlineCode",{parentName:"p"},"tapable")," 类，并使用 ",(0,t.kt)("inlineCode",{parentName:"p"},"tapable")," 来提供了一些钩子。\n",(0,t.kt)("inlineCode",{parentName:"p"},"enhanced-resolve")," 可以直接用于创建新的解析器，\n但是，任何 ",(0,t.kt)("a",{href:"/api/node/#compiler-instance",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"compiler")," 实例")," 都有一些解析器实例，可以\n被 ",(0,t.kt)("inlineCode",{parentName:"p"},"tap")," 进去。"),(0,t.kt)("p",null,"在继续阅读之前，请确保你已经读过\n",(0,t.kt)("a",{href:"https://github.com/webpack/enhanced-resolve",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"enhanced-resolve"))," 和 ",(0,t.kt)("a",{href:"/api/plugins/#tapable",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"tapable"))," 文档。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"types",parentName:"h2"}),"类型",(0,t.kt)("a",{href:"#types","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"在 ",(0,t.kt)("inlineCode",{parentName:"p"},"compiler")," 类中，提供了三种类型的内置解析器："),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"normal"),": 通过绝对或相对路径解析模块。"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"context"),": 在给定的上下文中解析模块。"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("inlineCode",{parentName:"li"},"loader"),": 解析 webpack ",(0,t.kt)("a",{href:"/loaders",parentName:"li"},"loader"),"。")),(0,t.kt)("p",null,"根据需要，任一个被使用在 ",(0,t.kt)("inlineCode",{parentName:"p"},"compiler")," 中的内置解析器，\n可以通过插件进行定制："),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-js",parentName:"pre"},"compiler",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"resolverFactory",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"resolver\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"for"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'[type]'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"tap"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'name'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"resolver"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    ",(0,t.kt)("span",{className:"token comment",parentName:"code"},"// you can tap into resolver.hooks now"),"\n    resolver",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"hooks",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"result",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"tap"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'MyPlugin'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},",")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"result"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n      ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"return")," result",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n    ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,"其中，",(0,t.kt)("inlineCode",{parentName:"p"},"[type]")," 是上述三个解析器之一。"),(0,t.kt)("p",null,"请参阅 ",(0,t.kt)("a",{href:"https://github.com/webpack/enhanced-resolve",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"enhanced-resolve")," documentation")," 以获得钩子的完整列表以及它们的介绍。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"configuration-options",parentName:"h2"}),"配置选项",(0,t.kt)("a",{href:"#configuration-options","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"上述解析器也可以\n利用 ",(0,t.kt)("a",{href:"/configuration/resolve/",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"resolve"))," or ",(0,t.kt)("a",{href:"/configuration/resolve/#resolveloader",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"resolveLoader"))," 选项，通过配置文件进行定制。这些选项允许\n用户可以通过多种选项来更改解析行为，包括\n通过解析 ",(0,t.kt)("inlineCode",{parentName:"p"},"plugins"),"。"),(0,t.kt)("p",null,"解析器插件，例如：",(0,t.kt)("a",{href:"https://github.com/shaketbaby/directory-named-webpack-plugin",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"DirectoryNamedPlugin")),"，可以直接引入\n在 ",(0,t.kt)("inlineCode",{parentName:"p"},"resolve.plugins"),"，而不是直接在 ",(0,t.kt)("a",{href:"/configuration/plugins/#plugins",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"plugins")," configuration option")," 中使用。"),(0,t.kt)("aside",{className:"tip"},(0,t.kt)("h6",{className:"tip__prefix",parentName:"aside"},"提示"),(0,t.kt)("p",{parentName:"aside"},"请注意，",(0,t.kt)("inlineCode",{parentName:"p"},"resolve")," 配置会影响 ",(0,t.kt)("inlineCode",{parentName:"p"},"normal")," 解析器和 ",(0,t.kt)("inlineCode",{parentName:"p"},"context")," 解析器，而“ ",(0,t.kt)("inlineCode",{parentName:"p"},"resolveLoader")," 用于修改 ",(0,t.kt)("inlineCode",{parentName:"p"},"loader")," 解析器。")))}o.isMDXComponent=!0,a.default=o}}]);