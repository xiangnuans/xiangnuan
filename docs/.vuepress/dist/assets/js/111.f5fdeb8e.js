(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{499:function(a,t,s){"use strict";s.r(t);var e=s(54),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"href-属性使用-js-代码段在-react-下-warning-问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#href-属性使用-js-代码段在-react-下-warning-问题"}},[a._v("#")]),a._v(" href 属性使用 js 代码段在 React 下 warning 问题")]),a._v(" "),s("p",[a._v("我们在使用 a 标签的使用，若不想用 a 表爱你的 href 跳转，而要使用自己绑定的 click 或其他时间时，往往会通过插入 js 代码段的方式设置 href 为"),s("code",[a._v("javascript:;")]),a._v("或"),s("code",[a._v("javascript:void(0);")]),a._v("等达到 href 无跳转的结果。但是这么设置在 React 中会提示"),s("code",[a._v('warning：A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed "javascript:;"')]),a._v("，这样的话，我们该如何处理。")]),a._v(" "),s("h2",{attrs:{id:"处理方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#处理方法"}},[a._v("#")]),a._v(" 处理方法")]),a._v(" "),s("p",[a._v("在 "),s("code",[a._v("href")]),a._v(" 中插入代码段的方式是不可行的，转而可以使用以下方式：")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[a._v('<a href="#" onClick={ (e) => { e.preventDefault() } }>'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])]),s("h2",{attrs:{id:"javascript-scroll-0-0-跳转到顶部"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#javascript-scroll-0-0-跳转到顶部"}},[a._v("#")]),a._v(" javascript:scroll(0, 0)跳转到顶部")]),a._v(" "),s("p",[a._v("处理方法：")]),a._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[a._v('  <a href="#" onClick = {() => window.scrollTo("0", "0");}>'),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("</")]),a._v("a")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(">")])]),a._v("\n")])])])])}),[],!1,null,null,null);t.default=r.exports}}]);