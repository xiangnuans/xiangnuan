(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{496:function(e,s,n){"use strict";n.r(s);var t=n(54),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,n=e._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"componentwillreceiveprops的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#componentwillreceiveprops的使用"}},[e._v("#")]),e._v(" componentWillReceiveProps的使用")]),e._v(" "),n("h2",{attrs:{id:"什么时componentwillreceiveprops"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#什么时componentwillreceiveprops"}},[e._v("#")]),e._v(" 什么时componentWillReceiveProps？")]),e._v(" "),n("p",[e._v("componentWillReceiveProps是\bReact生命周期中的一个环节，有关React的生命周期，同学们可以在这里详细了解。\ncomponentWillReceiveProps在初始化render的时候不会执行，它会在Component接受到新的状态(Props)时被触发，一般用于父组件状态更新时子组件的重新渲染。这个东西十分好用，但是一旦用错也会造成十分严重的后果。\n在componentWillReceiveProps这个回调函数中，我们可以获取到就是props，通过this.props来获取，然后新的props则是通过函数的参数传入，在这里我们可以比较两个props从而对本组件的state作出安全的变更然后重新渲染我们的组件或者是触发\b子组件内的某些方法。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//这种方式十分适合父子组件\b的互动，通常是父组件需要通过某些状态控制子组件渲染亦或销毁...\n\ncomponentWillReceiveProps(nextProps) {//componentWillReceiveProps方法中第一个参数代表即将传入的新的Props\n    if (this.props.sharecard_show !== nextProps.sharecard_show){\n        //在这里我们仍可以通过this.props来获取旧的外部状态\n        //通过新旧状态的对比，来决定是否进行其他方法\n        if (nextProps.sharecard_show){\n            this.handleGetCard();\n        }\n    }\n}\n")])])]),n("p",[e._v("上面是componentWillReceiveProps常用的方式，但是如果使用不当可能会导致以下后果，一般体现为组件陷入渲染死循环，他会一直接受新的外部状态导致自身一直在重渲染。")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("componentWillReceiveProps(nextProps) {\n    if (this.props.sharecard_show !== nextProps.sharecard_show){\n        if (nextProps.sharecard_show){\n            this.handleGetCard();\n        }\n    }\n}\n\nhandleGetCard() {\n    this.props.test()\n}\n\n//父组件内\n\ntest() {\n    this.setState({\n        sharecard_show: !this.state.sharecard_show\n    })\n}\n")])])]),n("p",[e._v("一旦项目中出现这样的代码，有很大几率就会陷入死循环，这两个组件会一直在传递状态并且重新渲染，然后页面估计就卡挂了。这是其中一个需要注意的地方，另外我们需要谨记，在componentWillReceiveProps中想作任何变更最好都将两个状态进行比较，假如状态\b有异才执行下一步。不然容易造成组件的多次渲染，并且这些渲染都是没有意义的。")])])}),[],!1,null,null,null);s.default=r.exports}}]);