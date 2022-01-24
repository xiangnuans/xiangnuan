(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{492:function(t,e,a){"use strict";a.r(e);var s=a(54),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"react组件开发指南"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#react组件开发指南"}},[t._v("#")]),t._v(" React组件开发指南")]),t._v(" "),a("h2",{attrs:{id:"轻松开发一个react组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轻松开发一个react组件"}},[t._v("#")]),t._v(" 轻松开发一个react组件")]),t._v(" "),a("p",[t._v("很多前端开发者在开发react组件的时候往往不知从何下手，如果你也有此困惑，那么读完本文肯定让你拨云见日立即手撸一个组件出来，这里将使用Damujiangr开发的yeoman脚手架轻松搭建一个react组件开发工程")]),t._v(" "),a("p",[t._v("建议在github或gitlab上创建工程，然后clone到本地，再执行以下操作，这样可以保证在生成package.json时自动填充repository、bugs、homepage等git仓库信息字段")]),t._v(" "),a("ul",[a("li",[t._v("首先是工具安装")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("[sudo] npm install -g yo                                 # yo工具安装\n[sudo] npm install -g generator-react-component-magic    # template安装\n\nyo react-component-magic                                 # 工程初始化\n\n")])])]),a("p",[t._v("node.js版本建议选择8.x，windows系统可能有webpack plugin的兼容问题")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├── doc                     // 使用文档\n├── examples                // 示例代码\n├── package.json\n├── rollup.config.js\n├── src                     // 源代码\n├── style                   // 源代码样式\n└── webpack.config.js\n")])])]),a("ul",[a("li",[t._v("src目录结构")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├── __tests__\t\t\t// 测试目录\n├── components\t\t\t// 组件目录\n│   ├── Block.js\t\t// 单一组件\n│   └── __tests__\t\t// 测试目录\n└── index.js\t\t\t// 主入口\n\n")])])]),a("p",[t._v("复制代码\n此结构支持单一组件的开发和导出，如图例中的Block.js，也支持多个组件同时开发和导出，在\bcomponent下创建文件夹或者新的文件即可，只要在index.js中组织export的方式即可")]),t._v(" "),a("p",[t._v("单一文件导出示例")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import Block from './components/Block';\n\nexport default Block;\n")])])]),a("p",[t._v("多个组件导出示例")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("export { default as Block } from './components/Block';\nexport { default as Other } from './components/Other';\nexport { default as More } from './components/More';\n")])])]),a("p",[t._v("代码规范约束使用的eslint，遵循airbnb代码规范")]),t._v(" "),a("ul",[a("li",[t._v("rollup.config.js说明")])]),t._v(" "),a("p",[t._v("作用是导出组件的外链版本，供在HTML中通过srcipt:src方式引入")]),t._v(" "),a("p",[t._v("在配置中可以通过修改output.name指定组件对外暴露的变量名")]),t._v(" "),a("ul",[a("li",[t._v("webpack.config.js")])]),t._v(" "),a("p",[t._v("作用是通过npm start运行本地开发时的一些配置")]),t._v(" "),a("p",[t._v("在配置中可以通过resolve.alias指定npm包名")]),t._v(" "),a("ul",[a("li",[t._v("执行npm run build会构建出组件代码，用于上传NPM，目录如下，其他style源代码也是生产代码")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("├── dist                    // 产物外链版本\n├── esm                     // 产物ES6版本\n├── lib                     // 产物ES5版本\n└── style                   // 源代码样式\n")])])]),a("p",[t._v("在package.json中已经配置好入口：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('"main": "lib/index.js",\t\t// 一般情况下的主入口\n"module": "esm/index.js"\t// 提案，用于引入ES Module的入口\n')])])]),a("p",[t._v("本地开发测试和测试脚本 测试对组件开发来说是非常必要的，本例中可以在example中可以直接通过import方式引入正在开发的组件，进行本地测试 在example/app.js引入组件")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("import 'react-component-template/style/component.css';// eslint-disable-line\nimport Block from 'react-component-template/src'; // eslint-disable-line\n")])])]),a("p",[t._v("通过npm start命令自动打开浏览器并打开热更新功能，可以方便的进行本地开发测试\n测试框架使用的是Jest,可以在每级目录的__test__目录下编写对接的测试文件，执行npm run test命令即可得到测试结果，代码覆盖率报告使用的codecov, 如果你的工程上传到github，并配置好travis CI，可以通过codecov上传测试报告")]),t._v(" "),a("p",[t._v("但是我在执行npm run start时报错了，网上查到了解决方法")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://stackoverflow.com/questions/51554366/jest-securityerror-localstorage-is-not-available-for-opaque-origins",target:"_blank",rel:"noopener noreferrer"}},[t._v("解决方案"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("上传NPM")])]),t._v(" "),a("blockquote",[a("p",[t._v("首先要有一个npm账号")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("npm login\nnpm version <>\nnpm publish\n")])])]),a("p",[t._v("到此为止，你就可以愉快地开发属于你自己的react组件了，并且可以发布到NPM上分享给其他人")])])}),[],!1,null,null,null);e.default=n.exports}}]);