(window.webpackJsonp=window.webpackJsonp||[]).push([[142],{530:function(t,s,e){"use strict";e.r(s);var l=e(54),o=Object(l.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"七牛云存储中没有外链域名-无法下载的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#七牛云存储中没有外链域名-无法下载的问题"}},[t._v("#")]),t._v(" 七牛云存储中没有外链域名，无法下载的问题")]),t._v(" "),e("p",[t._v("有三种方式来获取文件")]),t._v(" "),e("h2",{attrs:{id:"方案一-外网流量下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案一-外网流量下载"}},[t._v("#")]),t._v(" 方案一（外网流量下载）")]),t._v(" "),e("p",[t._v("您可以使用最新的图形化工具kodo-browser上传/下载试下，支持批量管理。")]),t._v(" "),e("p",[t._v("https://developer.qiniu.com/kodo/tools/5972/kodo-browser")]),t._v(" "),e("p",[t._v("注意：该工具目前使用源站域名进行上传/下载，流量费用为「外网流出流量，0GB - 100 TB 0.29 元/GB」")]),t._v(" "),e("h2",{attrs:{id:"方案二-cdn流量批量下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案二-cdn流量批量下载"}},[t._v("#")]),t._v(" 方案二（CDN流量批量下载）")]),t._v(" "),e("p",[t._v("您需要先新建一个同区域存储空间，会分配一个新的测试域名到新空间。")]),t._v(" "),e("p",[t._v("1）qshell account 此处填写ak 此处填写sk 此处填写自定义的用户名 （ak sk可以在控制台右上角的个人面板，密钥管理里找到）")]),t._v(" "),e("ol",[e("li",[t._v("qshell listbucket 原bucket名 -o list.txt （list出全部文件，https://github.com/qiniu/qshell/blob/master/docs/listbucket.md）")])]),t._v(" "),e("p",[t._v("3）"),e("code",[t._v("cat list.txt | awk '{print $1}'")]),t._v(" >list_final.txt （ 用awk获取list结果的第一列）")]),t._v(" "),e("p",[t._v("4）qshell batchcopy 原bucket名 新bucket名 -i list_final.txt （复制到新bucket的文件和原bucket文件名一致，https://github.com/qiniu/qshell/blob/master/docs/batchcopy.md）")]),t._v(" "),e("p",[t._v("5）qshell qdownload newfilelist.txt （newfilelist.txt为下载的配置文档，https://github.com/qiniu/qshell/blob/master/docs/qdownload.md）")]),t._v(" "),e("p",[t._v("qshell安装包及文档请参考https://developer.qiniu.com/kodo/tools/1302/qshell")]),t._v(" "),e("p",[t._v("windows环境下安装教程参考 https://developer.qiniu.com/kodo/kb/5545/windows-environment-installation-qshell-tutorial")]),t._v(" "),e("h2",{attrs:{id:"方案三-cdn流量单文件下载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#方案三-cdn流量单文件下载"}},[t._v("#")]),t._v(" 方案三（CDN流量单文件下载）")]),t._v(" "),e("p",[t._v("使用工具qrsctl")]),t._v(" "),e("p",[t._v("https://developer.qiniu.com/kodo/tools/1300/qrsctl")]),t._v(" "),e("p",[t._v("qrsctl get "),e("bucket",[e("file",[e("file")],1)],1)],1)])}),[],!1,null,null,null);s.default=o.exports}}]);