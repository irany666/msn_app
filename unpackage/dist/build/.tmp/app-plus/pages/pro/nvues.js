(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/pro/nvues"],{"228b":function(t,n,e){"use strict";e.r(n);var a=e("4b56"),s=e("b4c0");for(var i in s)"default"!==i&&function(t){e.d(n,t,function(){return s[t]})}(i);var o=e("2877"),u=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);u.options.__file="nvues.vue",n["default"]=u.exports},"28fe":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={data:function(){return{}},onLoad:function(){},onBackPress:function(){},onNavigationBarButtonTap:function(){},methods:{showMask:function(){plus.contacts.getAddressBook(plus.contacts.ADDRESSBOOK_PHONE,function(t){t.find(["displayName","phoneNumbers"],function(t){for(var n=[],e=0;e<t.length;e++){for(var a="",s=0;s<t[e].phoneNumbers.length;s++)a+=t[e].phoneNumbers[s]["value"]+",";a=a.substring(0,a.length-1),n.push({displayName:t[e]["displayName"],phoneNumbers:a})}console.log(JSON.stringify(n))})})},clickLogin:function(){}}};n.default=a},"4b56":function(t,n,e){"use strict";var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("view",{staticClass:"s-page-wrapper"},[e("view",{staticClass:"is-center is-width-60 has-bg-red is-white is-lh-2 has-mgt-20  has-pd-20",attrs:{eventid:"4fdb7c9a-0"},on:{tap:t.showMask}},[t._v("点击弹出内容")]),e("view",{staticClass:"is-center is-width-60 has-bg-red is-white is-lh-2 has-mgt-20  has-pd-20",attrs:{eventid:"4fdb7c9a-1"},on:{tap:t.clickLogin}},[t._v("点击登录测试")])])},s=[];e.d(n,"a",function(){return a}),e.d(n,"b",function(){return s})},"56ae":function(t,n,e){"use strict";e("fb7d");var a=i(e("b0ce")),s=i(e("228b"));function i(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},b4c0:function(t,n,e){"use strict";e.r(n);var a=e("28fe"),s=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);n["default"]=s.a}},[["56ae","common/runtime","common/vendor"]]]);