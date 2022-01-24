(window.webpackJsonp=window.webpackJsonp||[]).push([[158],{545:function(t,s,a){"use strict";a.r(s);var e=a(54),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack5更新日志"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack5更新日志"}},[t._v("#")]),t._v(" Webpack5更新日志")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://mp.weixin.qq.com/s?__biz=MzIzOTkwMjM0OQ==&mid=2247484134&idx=1&sn=03ec1f6df7e024ba2fd1b381547594b6&chksm=e9224904de55c01212e0c4624ccc23b2ab57e2a49a418df0dadf63991b30f736ae071a80f25b#rd",target:"_blank",rel:"noopener noreferrer"}},[t._v("转载"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("webpack 团队于北京时间 10 月 12 日凌晨发布了 v5.0.0-beta.0 版本，本文译自 webpack/changelog-v5。此部分主要面向非插件开发的 webpack 使用者。")]),t._v(" "),a("h2",{attrs:{id:"简要说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简要说明"}},[t._v("#")]),t._v(" 简要说明")]),t._v(" "),a("p",[t._v("此版本重点关注以下内容：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("我们尝试通过持久化存储优化构建性能。")])]),t._v(" "),a("li",[a("p",[t._v("我们尝试采用更好的算法与 defalut 来改善长效缓存。")])]),t._v(" "),a("li",[a("p",[t._v("我们尝试通过更好的 Tree Shaking 和代码生成来改善 bundle 的大小。")])]),t._v(" "),a("li",[a("p",[t._v("我们尝试清除内部结构中奇怪的代码，同时在不影响 v4 功能基础上实现了新特性。")])]),t._v(" "),a("li",[a("p",[t._v("我们目前尝试通过引入破坏性更改来为新特性做准备，以便于我们能尽可能长期地使用 v5。")])])]),t._v(" "),a("h2",{attrs:{id:"主要更改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主要更改"}},[t._v("#")]),t._v(" 主要更改")]),t._v(" "),a("h3",{attrs:{id:"移除废弃的代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#移除废弃的代码"}},[t._v("#")]),t._v(" 移除废弃的代码")]),t._v(" "),a("p",[t._v("v4 中所有废弃的代码均已删除。")]),t._v(" "),a("p",[t._v("迁移：以确保你的 webapck 4 不打印弃用警告。")]),t._v(" "),a("p",[t._v("以下是已删除但在 v4 中没有弃用警告的内容：")]),t._v(" "),a("p",[t._v("现在必须为 IgnorePlugin 和 BannerPlugin 传递一个 options 对象。")]),t._v(" "),a("h3",{attrs:{id:"自动一处node-polyfills"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动一处node-polyfills"}},[t._v("#")]),t._v(" 自动一处Node polyfills")]),t._v(" "),a("p",[t._v("早期，webpack的目的是允许在浏览器中运行大多数node模块，但是模块整体格局发生了变化，现在许多模块的主要用途是以编写前端为目的")]),t._v(" "),a("p",[t._v("webpack <= 4,附带了许多node核心模块的polyfil，一旦模块中使用了任何核心模块，这些模块就会被自动启用")]),t._v(" "),a("p",[t._v("虽然这使得为node便携模块变得简单，但它会将超大的polyfill添加到package中。在许多情况下，这些polyfill并非必要")]),t._v(" "),a("p",[t._v("webpack 5会停止自动polyfill这些核心模块，并专注于前端兼容的模块")]),t._v(" "),a("p",[a("strong",[t._v("迁移：")])]),t._v(" "),a("ul",[a("li",[t._v("尽可能擦韩国女士使用与前端兼容的模块。")]),t._v(" "),a("li",[t._v("可以为node核心模块手动添加polyfil。错误信息将提示如何进行此操作")]),t._v(" "),a("li",[t._v("package作者：在package.json中使用browser字段，以是的package与前端代码兼容。为browser提供可选的"),a("code",[t._v("implementations/dependencies。")])])]),t._v(" "),a("h3",{attrs:{id:"采用新算法生成chunk-id-以及-module-id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#采用新算法生成chunk-id-以及-module-id"}},[t._v("#")]),t._v(" 采用新算法生成chunk ID 以及 module ID")]),t._v(" "),a("p",[t._v("添加了用于长效缓存的新算法。在生产模式下，默认启用这些功能。")]),t._v(" "),a("p",[a("code",[t._v('chunkIds: "deterministic", moduleIds: "deterministic"')])]),t._v(" "),a("p",[t._v("此算法采用确定性的方式将短数字 ID（3 或 4 个字符）分配给 modules 和 chunks。这是基于 bundle 大小和长效缓存间的折中方案。")]),t._v(" "),a("p",[a("strong",[t._v("迁移：")])]),t._v(" "),a("p",[t._v('最好使用 chunkIds 和 moduleIds 的默认值。你还可以选择使用旧的默认值，chunkIds: "size", modules: "size"，这将生成较小的 bundle，但这会使得它们频繁地进行缓存。')]),t._v(" "),a("h3",{attrs:{id:"以新算法混淆export名称"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以新算法混淆export名称"}},[t._v("#")]),t._v(" 以新算法混淆export名称")]),t._v(" "),a("p",[t._v("添加了新算法来处理export的名称。默认情况下启用\n如果可能，它将以确定性方式破坏export的名称")]),t._v(" "),a("p",[t._v("迁移：不需要进行任何操作")]),t._v(" "),a("h3",{attrs:{id:"为chunk-ids命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为chunk-ids命名"}},[t._v("#")]),t._v(" 为chunk IDs命名")]),t._v(" "),a("p",[t._v("在开发模式下默认启用，以新的算法为 chunk id 命名，给 chunk（以及文件名）提供易于理解的名称。module ID 由其相对于 context 的路径决定。chunk ID 由 chunk 的内容决定。")]),t._v(" "),a("p",[t._v('因此，你不再需要使用 import(/* webpackChunkName: "name" */ "module") 进行调试。但是，如果你要控制生产环境的文件名，那仍可使用')]),t._v(" "),a("p",[t._v('可以在生产中使用 chunkIds: "named"，但要确保在使用时不会意外地泄露有关模块名称的敏感信息。')]),t._v(" "),a("p",[t._v('**迁移：**如果你不喜欢在开发中更改文件名，则可以传递 chunkIds: "natural" 以使用旧的数字模式。')]),t._v(" "),a("h3",{attrs:{id:"json模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json模块"}},[t._v("#")]),t._v(" JSON模块")]),t._v(" "),a("p",[t._v("JSON 模块现在符合规范，并会在使用非默认导出时发出警告。")]),t._v(" "),a("p",[t._v("迁移：使用默认导出。")]),t._v(" "),a("h3",{attrs:{id:"嵌套tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套tree-shaking"}},[t._v("#")]),t._v(" 嵌套tree-shaking")]),t._v(" "),a("p",[t._v("webpack 现在可以追踪对 exports 嵌套属性的访问。重新导出 namespace 对象，这可以改善 Tree Shaking 操作（未使用 export elimination 和 export mangling）。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// inner.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" b "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// module.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" inner "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./inner"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" inner "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// user.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" module "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("inner"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("在此示例中，可以在生成模式下移除 export b。")]),t._v(" "),a("h3",{attrs:{id:"内部模块-inner-module-tree-shaking"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内部模块-inner-module-tree-shaking"}},[t._v("#")]),t._v(" 内部模块（inner-module） tree-shaking")]),t._v(" "),a("p",[t._v("webpack 4 没有分析模块 export 与 import 之间的依赖关系。webpack 5 有一个新的选项 optimization.innerGraph，该选项在生产模式下默认启用，它对模块中的符号进行分析以找出从 export 到 import 的依赖关系。")]),t._v(" "),a("p",[t._v("如下述模块所示：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" something "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./something"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usingSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" something"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("usingSomething")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("内部图算法将确定仅在使用 export 的 test 时使用 something。这样可以将更多 export 标记为未使用，并从 bundle 中删除更多的代码。")]),t._v(" "),a("p",[t._v('如果设置了 "sideEffects": false，则可以省略更多模块。在此示例中，当未使用 export 的 test 时，将忽略 ./something。')]),t._v(" "),a("p",[t._v("如需获取有关未使用的 export 的信息，需使用 optimization.unusedExports。如需删除无副作用的模块，需使用 optimization.sideEffects。")]),t._v(" "),a("p",[t._v("此方式可以分析以下符号：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("函数声明（function declarations）")])]),t._v(" "),a("li",[a("p",[t._v("class 声明（class declarations）")])]),t._v(" "),a("li",[a("p",[t._v("带有 export default 或带有变量声明（variable declarations）的")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("函数表达式（function expressions）")])]),t._v(" "),a("li",[a("p",[t._v("class 语句（class expressions）")])]),t._v(" "),a("li",[a("p",[t._v("/"),a("em",[t._v("#"),a("strong",[t._v("PURE")])]),t._v("/ 表达式")])]),t._v(" "),a("li",[a("p",[t._v("局部变量（local variables）")])]),t._v(" "),a("li",[a("p",[t._v("imported bindings")])])])])]),t._v(" "),a("h3",{attrs:{id:"编译器空闲并关闭-idle-and-close"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译器空闲并关闭-idle-and-close"}},[t._v("#")]),t._v(" 编译器空闲并关闭（idle and close）")]),t._v(" "),a("p",[t._v("现在需要再使用编译器（compilers）后将其关闭。编译器具有 enter 和 leave 空闲状态，并具有这些状态的 hook。插件可以使用这些 hook 执行不重要的工作。（即，持久化缓存将延迟存储到磁盘）。在编译器关闭时，所有剩余工作应尽快完成。回调执行时，表明关闭已完成。")]),t._v(" "),a("p",[t._v("插件及其各自的作者应该会期望某些用户可能会忘记关闭编译器。因此，所有工作最终也应该在空闲时完成。当工作完成时，应防止进程退出。")]),t._v(" "),a("p",[t._v("当传递 callback 时，webpack() 实例会自动调用 close。")]),t._v(" "),a("p",[t._v("迁移：使用 node.js API 时，请确保在完成后调用 Complier.close。")]),t._v(" "),a("h3",{attrs:{id:"改进代码生成"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改进代码生成"}},[t._v("#")]),t._v(" 改进代码生成")]),t._v(" "),a("p",[t._v("此版本添加了新的选项 output.ecmaVersion。它允许为 webpack 生成的运行时代码指定最大 EcmaScript 版本。")]),t._v(" "),a("p",[t._v("webpack 4 仅能于生成 ES5 的代码。webpack 5 现支持 ES5 或 ES2015 的代码。")]),t._v(" "),a("p",[t._v("默认配置将生成 ES2015 的代码。如果你需要支持旧版浏览器（例如，IE11），则可以将其降为 output.ecmaVersion: 5。")]),t._v(" "),a("p",[t._v("默认配置将生成 ES2015 的代码。如果你需要支持旧版浏览器（例如，IE11），则可以将其降为 output.ecmaVersion: 5。")]),t._v(" "),a("p",[t._v("生产模式中的默认压缩（default minimizing）也使用 ecmaVersion 选项生成较小的代码。（自 alpha.31 起）")]),t._v(" "),a("h3",{attrs:{id:"chunk-分割以及-module-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chunk-分割以及-module-size"}},[t._v("#")]),t._v(" chunk 分割以及 module size")]),t._v(" "),a("p",[t._v("与之前展示单个数值相比，模块现在以更好的方式展示其 size。除此之外，现在也拥有了不同类型的 size。")]),t._v(" "),a("p",[t._v("目前，SplitChunksPlugin 已知道如何处理这些不同的 size，并将它们应用于 minSize 和 maxSize。默认情况下，仅处理 javascript 的 size，但你可以传递多个参数来管理它们：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("minSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tjavascript"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tstyle"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("迁移：检查构建中使用了哪些类型的 size，并在 splitChunks.minSize 和可选的 splitChunks.maxSize 中进行配置。")]),t._v(" "),a("h3",{attrs:{id:"持久化缓存"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#持久化缓存"}},[t._v("#")]),t._v(" 持久化缓存")]),t._v(" "),a("p",[t._v("目前包含文件系统缓存。它是可选的，可以通过以下配置启用：")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("cache"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1. 设置缓存类型为 filesystem")]),t._v("\n  type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"filesystem"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  buildDependencies"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2. 将你的配置添加为 buildDependency 以在更改配置时，使得缓存失效。")]),t._v("\n    config"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("__filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3. 如果你还有其他需要构建的内容，可以在此处添加它们")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请注意，loader 和所有模块中配置中引用的内容会自动添加")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("strong",[t._v("重要内容：")])]),t._v(" "),a("p",[t._v("默认情况下，webpack 会假定其所处的 node_modules 目录仅由包管理器修改。针对 node_modules 目录，将跳过哈希和时间戳处理。出于性能方面考虑，仅使用 package 的名称和版本。symlinks（例如，npm/yarn link）很友好。除非你使用 cache.managedPaths: [] 选项取消此优化，否则请不要直接在 node_modules 中编辑文件。")]),t._v(" "),a("p",[t._v("默认情况下，缓存将分别存储在 node_modules/.cache/webpack 中（当使用 node_modules 时）和 .pnp/.cache/webpack（当使用 Yarn PnP 时，自 alpha.21 起）。你可能永远不必手动删除它。")]),t._v(" "),a("p",[t._v("当使用 Yarn PnP webpack 时，如果 yarn 的缓存不可变（通常不会发生变化）。你可以通过 cache.immutablePaths: [] 退出此优化。")]),t._v(" "),a("h3",{attrs:{id:"用于-single-file-target-的-chunk-分割"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用于-single-file-target-的-chunk-分割"}},[t._v("#")]),t._v(" 用于 single-file-target 的 chunk 分割")]),t._v(" "),a("p",[t._v("目前，仅允许启动单个文件 target（如 node，WebWorker，electron main）支持在运行时自动加载引导程序所需的相关代码片段。")]),t._v(" "),a("p",[t._v('这允许对带有 chunks: "all" 的 target 使用 splitChunks。')]),t._v(" "),a("p",[t._v('值得注意的是，由于 chunk 加载是异步的，因此这也会使初始估算也为异步操作。当使用 output.library 时，这可能会出现问题，因为导出的值的类型目前为 Promise。从 alpha.14 开始，这将不适用于 target: "node"，因为 chunk 加载在此 target 下为同步。')]),t._v(" "),a("h3",{attrs:{id:"更新解析器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新解析器"}},[t._v("#")]),t._v(" 更新解析器")]),t._v(" "),a("p",[t._v("enhanced-resolve 已更新至 v5。具体改进如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("当使用 Yarn PnP 时，解析器将直接处理无需其他插件")])]),t._v(" "),a("li",[a("p",[t._v("此 resolve 可追踪更多的依赖项，例如文件缺失")])]),t._v(" "),a("li",[a("p",[t._v("别名（aliasing）可能包含多种选择")])]),t._v(" "),a("li",[a("p",[t._v("可以设置别名（aliasing）为 false")])]),t._v(" "),a("li",[a("p",[t._v("性能提升")])])]),t._v(" "),a("h3",{attrs:{id:"不包含-js-的-chunk"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#不包含-js-的-chunk"}},[t._v("#")]),t._v(" 不包含 JS 的 chunk")]),t._v(" "),a("p",[t._v("不包含 JS 代码的 chunk 将不再生成 JS 文件。")]),t._v(" "),a("h3",{attrs:{id:"实验阶段特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实验阶段特性"}},[t._v("#")]),t._v(" 实验阶段特性")]),t._v(" "),a("p",[t._v("并非所有特性从开始就文档。在 webpack 4 中，我们添加了实验性功能，并在 changelog 中指出它们是实验性的，但是从配置中并不能很清楚的了解这些功能是实验性的。")]),t._v(" "),a("p",[t._v("并非所有特性从开始就文档。在 webpack 4 中，我们添加了实验性功能，并在 changelog 中指出它们是实验性的，但是从配置中并不能很清楚的了解这些功能是实验性的。")]),t._v(" "),a("p",[t._v("并非所有特性从开始就文档。在 webpack 4 中，我们添加了实验性功能，并在 changelog 中指出它们是实验性的，但是从配置中并不能很清楚的了解这些功能是实验性的。")]),t._v(" "),a("p",[t._v("以下实验性功能将随 webpack 5 一同发布：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("像 webpack 4 一样对 .mjs 提供支持（experiments.mjs）")])]),t._v(" "),a("li",[a("p",[t._v("像 webpack 4 一样对旧版 WebAssembly 提供支持（experiments.syncWebAssembly）")])]),t._v(" "),a("li",[a("p",[t._v("根据更新规范[2] 对新版 WebAssembly 提供支持（experiments.asyncWebAssembly）")]),t._v(" "),a("ul",[a("li",[t._v("这使得 WebAssembly 模块成为异步模块")])])]),t._v(" "),a("li",[a("p",[t._v("Top Level Await[3] Stage 3 阶段提案（experiments.topLevelAwait）")]),t._v(" "),a("ul",[a("li",[t._v("在顶层使用 await 使模块成为异步模块")])])]),t._v(" "),a("li",[a("p",[t._v("使用 import 引入异步模块（experiments.importAsync）")])]),t._v(" "),a("li",[a("p",[t._v("使用 import await 引入异步模块（experiments.importAwait）")])]),t._v(" "),a("li",[a("p",[t._v("asset 模块类似类似于 file-loader（experiments.asset）（自 alpha.19 起）")])]),t._v(" "),a("li",[a("p",[t._v("导出 bundle 作为模块（experiments.outputModule）（自 alpha.31 起）")]),t._v(" "),a("ul",[a("li",[t._v("这将从 bundle 中移除 IIFE 的包装器，强制执行严格模式，通过 "),a("script",{attrs:{type:"module"}})])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);