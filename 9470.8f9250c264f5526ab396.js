"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9470],{9470:function(e,a,n){n.r(a),n(7378);var t=n(2682),s=["components"];function p(){return p=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var n=arguments[a];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},p.apply(this,arguments)}function o(e){var a=e.components,n=function(e,a){if(null==e)return{};var n,t,s=function(e,a){if(null==e)return{};var n,t,s={},p=Object.keys(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||(s[n]=e[n]);return s}(e,a);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(t=0;t<p.length;t++)n=p[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}(e,s);return(0,t.kt)("wrapper",p({components:a},n),(0,t.kt)("p",null,"这篇指南仅仅展示了影响用户使用的主要改变。更多细节查看 ",(0,t.kt)("a",{href:"https://github.com/webpack/webpack/releases",parentName:"p"},"更新日志(the changelog)"),"。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"nodejs-v4",parentName:"h2"}),"Node.js v4",(0,t.kt)("a",{href:"#nodejs-v4","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"如果你正在使用 Node.js 的 V4 或 V4 以下版本，需要更新你的 Node.js 至 V6 或者更高版本"),(0,t.kt)("p",null,"更新 Node.js 版本的说明见 ",(0,t.kt)("a",{href:"https://stackoverflow.com/questions/10075990/upgrading-node-js-to-latest-version",parentName:"p"},"这里"),"。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"cli",parentName:"h2"}),"脚手架（CLI）",(0,t.kt)("a",{href:"#cli","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"脚手架 (CLI) 已经放至一个单独的 webpack-cli 中。在你使用 webpack 之前需要安装它，参见",(0,t.kt)("a",{href:"/guides/getting-started/#basic-setup",parentName:"p"},"基础步骤"),"."),(0,t.kt)("p",null,"安装指南见",(0,t.kt)("a",{href:"/guides/installation",parentName:"p"},"这里"),"。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"update-plugins",parentName:"h2"}),"更新插件",(0,t.kt)("a",{href:"#update-plugins","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"为了兼容 webpack4，许多第三方插件需要更新至最新版本。一些流行的插件链接见",(0,t.kt)("a",{href:"/awesome-webpack",parentName:"p"},"这里"),"。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"mode",parentName:"h2"}),"模式（mode）",(0,t.kt)("a",{href:"#mode","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"在你的配置中添加新的 ",(0,t.kt)("a",{href:"/configuration/mode/",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"模式 （mode）"))," 选项。设置它为 ",(0,t.kt)("inlineCode",{parentName:"p"},"'production'"),", ",(0,t.kt)("inlineCode",{parentName:"p"},"'development'")," or ",(0,t.kt)("inlineCode",{parentName:"p"},"'无 (none)'")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},"module.exports = {\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," // ...\n")),(0,t.kt)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"  mode: 'production',\n")),"}")),(0,t.kt)("p",null,"注：",(0,t.kt)("inlineCode",{parentName:"p"},"'development'")," 模式和 ",(0,t.kt)("inlineCode",{parentName:"p"},"'production'")," 模式的用途不同。你可以使用 ",(0,t.kt)("a",{href:"/guides/production/#setup",parentName:"p"},"操作指南")," 中的 ",(0,t.kt)("inlineCode",{parentName:"p"},"webpack-merge")," 来优化配置。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"deprecatedremoved-plugins",parentName:"h2"}),"不推荐或被移除的插件",(0,t.kt)("a",{href:"#deprecatedremoved-plugins","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"生产模式中已经默认集成了部分插件，这部分默认插件可以在配置中被移除："),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},"module.exports = {\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," // ...\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," plugins: [\n")),(0,t.kt)("span",{className:"token deleted-sign deleted",parentName:"code"},(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"    new NoEmitOnErrorsPlugin(),\n"),(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"    new ModuleConcatenationPlugin(),\n"),(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},'    new DefinePlugin({ "process.env.NODE_ENV": JSON.stringify("production") })\n'),(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"    new UglifyJsPlugin()\n")),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," ],\n")),"}")),(0,t.kt)("p",null,"在开发模式中，这些插件已默认安装"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},"module.exports = {\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," // ...\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," plugins: [\n")),(0,t.kt)("span",{className:"token deleted-sign deleted",parentName:"code"},(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"    new NamedModulesPlugin()\n")),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," ],\n")),"}")),(0,t.kt)("p",null,"这些插件不推荐并且现在已经删除"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},"module.exports = {\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," // ...\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," plugins: [\n")),(0,t.kt)("span",{className:"token deleted-sign deleted",parentName:"code"},(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"    new NoErrorsPlugin(),\n"),(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"    new NewWatchingPlugin()\n")),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," ],\n")),"}")),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"commonschunkplugin",parentName:"h2"}),"CommonsChunkPlugin",(0,t.kt)("a",{href:"#commonschunkplugin","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"CommonsChunkPlugin")," 已被移除。可以使用 ",(0,t.kt)("a",{href:"/configuration/optimization/#optimizationsplitchunks",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"optimization.splitChunks"))," 来代替。"),(0,t.kt)("p",null,"查阅 ",(0,t.kt)("a",{href:"/configuration/optimization/#optimizationsplitchunks",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"optimization.splitChunks"))," 文档了解更多相关细节。其默认配置可能已经满足你的需求。"),(0,t.kt)("p",null,"注：当计算生成 HTML 时，你可以使用 ",(0,t.kt)("inlineCode",{parentName:"p"},'optimization.splitChunks.chunks: "all"'),"， 该优化配置在较多项目中被使用。"),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"import-and-commonjs",parentName:"h2"}),"import() 和 CommonJS",(0,t.kt)("a",{href:"#import-and-commonjs","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"在 webpack 4 中，当使用 ",(0,t.kt)("inlineCode",{parentName:"p"},"import()")," 去加载非标准 ESM 时，其值已经被加载. 现在你需要通过 ",(0,t.kt)("inlineCode",{parentName:"p"},"default")," 属性来得到 ",(0,t.kt)("inlineCode",{parentName:"p"},"module.exports")," 中的取值。"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"non-esm.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},"module",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"exports ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token function-variable function",parentName:"code"},"sayHello"),(0,t.kt)("span",{className:"token operator",parentName:"code"},":")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    console",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"log"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'hello world'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},","),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"))),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"example.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-javascript",parentName:"pre"},(0,t.kt)("span",{className:"token keyword",parentName:"code"},"function")," ",(0,t.kt)("span",{className:"token function",parentName:"code"},"sayHello"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n  ",(0,t.kt)("span",{className:"token keyword",parentName:"code"},"import"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token string",parentName:"code"},"'./non-esm.js'"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"then"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token parameter",parentName:"code"},"module"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")")," ",(0,t.kt)("span",{className:"token operator",parentName:"code"},"=>")," ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"{"),"\n    module",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),"default",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"."),(0,t.kt)("span",{className:"token function",parentName:"code"},"sayHello"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"("),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n  ",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},")"),(0,t.kt)("span",{className:"token punctuation",parentName:"code"},";"),"\n",(0,t.kt)("span",{className:"token punctuation",parentName:"code"},"}"))),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"json-and-loaders",parentName:"h2"}),"json 和 loaders",(0,t.kt)("a",{href:"#json-and-loaders","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"当使用自定义 loader 去转化 ",(0,t.kt)("inlineCode",{parentName:"p"},".json")," 文件时，你需要更改模块中的 ",(0,t.kt)("inlineCode",{parentName:"p"},"type"),":"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},"module.exports = {\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," // ...\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," rules: [\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   {\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     test: /config\\.json$/,\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     loader: 'special-loader',\n")),(0,t.kt)("span",{className:"token inserted-sign inserted",parentName:"code"},(0,t.kt)("span",{className:"token prefix inserted",parentName:"span"},"+"),(0,t.kt)("span",{className:"token line",parentName:"span"},"     type: 'javascript/auto',\n")),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"     options: {...}\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   }\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," ]\n")),"};")),(0,t.kt)("p",null,"仍在使用的 ",(0,t.kt)("inlineCode",{parentName:"p"},"json-loader")," 可从项目中移除。"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"webpack.config.js")),(0,t.kt)("pre",null,(0,t.kt)("code",{className:"hljs language-diff",parentName:"pre"},"module.exports = {\n",(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," // ...\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," rules: [\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   {\n")),(0,t.kt)("span",{className:"token deleted-sign deleted",parentName:"code"},(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"     test: /\\.json$/,\n"),(0,t.kt)("span",{className:"token prefix deleted",parentName:"span"},"-"),(0,t.kt)("span",{className:"token line",parentName:"span"},"     loader: 'json-loader'\n")),(0,t.kt)("span",{className:"token unchanged",parentName:"code"},(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"},"   }\n"),(0,t.kt)("span",{className:"token prefix unchanged",parentName:"span"}," "),(0,t.kt)("span",{className:"token line",parentName:"span"}," ]\n")),"};")),(0,t.kt)("h2",null,(0,t.kt)("span",{id:"moduleloaders",parentName:"h2"}),"module.loaders",(0,t.kt)("a",{href:"#moduleloaders","aria-hidden":"true",tabIndex:"-1",parentName:"h2"},(0,t.kt)("span",{className:"header-link",parentName:"a"}))),(0,t.kt)("p",null,"自 webpack 2 后 ",(0,t.kt)("inlineCode",{parentName:"p"},"module.loaders")," 不推荐使用，目前其已被移除，并推荐使用 ",(0,t.kt)("a",{href:"/configuration/module/#rule",parentName:"p"},(0,t.kt)("inlineCode",{parentName:"a"},"module.rules")),"。"))}o.isMDXComponent=!0,a.default=o}}]);