(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/ucenter/index"],{"3f27":function(t,e,n){"use strict";n("fb7d");var i=a(n("b0ce")),s=a(n("4aca"));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},"4aca":function(t,e,n){"use strict";n.r(e);var i=n("841b"),s=n("cb14");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);n("bfe9");var o=n("2877"),r=Object(o["a"])(s["default"],i["a"],i["b"],!1,null,null,null);r.options.__file="index.vue",e["default"]=r.exports},"5b0e":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{isH5Plus:!0,userinfo:{},orderTypeLise:[{name:"待付款",icon:"l1.png",badge:1},{name:"待发货",icon:"l2.png",badge:2},{name:"待收货",icon:"l3.png",badge:6},{name:"待评价",icon:"l4.png",badge:9},{name:"退换货",icon:"l5.png",badge:0}],severList:[[{name:"我的收藏",icon:"point.png"}],[]]}},onLoad:function(){this.init()},methods:{init:function(){var e=this;this.apihttp.ajax({url:"/security/info",method:"POST",success:function(t){var n=t.data;200==n.code&&(e.userinfo=n.data.user)}}),this.userinfo=t.getStorageSync("user").user,null==this.userinfo&&(this.userinfo={userName:"登录/注册",avatarUrl:"../../static/img/ucenter/face.png"})},toOrderType:function(e){t.showToast({icon:"none",title:"敬请期待..."})},toPage:function(e,n){t.showToast({icon:"none",title:"敬请期待..."})},toLogin:function(){var e=t.getStorageSync("user").user;null==e&&t.reLaunch({url:"/pages/ucenter/login"})},toSetting:function(){t.navigateTo({url:"/pages/settings/settings"})}}};e.default=n}).call(this,n("649d")["default"])},"841b":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:"header",class:{status:t.isH5Plus}},[n("view",{staticClass:"userinfo"},[n("view",{staticClass:"face"},[n("image",{attrs:{src:t.userinfo.avatarUrl}})]),n("view",{staticClass:"info"},[n("view",{staticClass:"username",attrs:{eventid:"37a35107-0"},on:{click:function(e){t.toLogin()}}},[t._v(t._s(t.userinfo.userName))]),null!=t.userinfo.coin?n("view",{staticClass:"integral"},[t._v("牛逼值:"+t._s(t.userinfo.coin))]):t._e()])]),n("view",{staticClass:"setting",attrs:{eventid:"37a35107-1"},on:{click:function(e){t.toSetting()}}},[n("image",{attrs:{src:"../../static/img/ucenter/setting.png"}})])]),t._l(t.severList,function(e,i){return n("view",{key:i,staticClass:"list"},t._l(e,function(s,a){return n("view",{key:s.name,staticClass:"li",class:{noborder:a==e.length-1},attrs:{"hover-class":"hover",eventid:"37a35107-2-"+i+"-"+a},on:{tap:function(e){t.toPage(i,a)}}},[n("view",{staticClass:"icon"},[n("image",{attrs:{src:"../../static/img/ucenter/sever/"+s.icon}})]),n("view",{staticClass:"text"},[t._v(t._s(s.name))]),n("image",{staticClass:"to",attrs:{src:"../../static/img/ucenter/to.png"}})])}))})],2)},s=[];n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})},b903:function(t,e,n){},bfe9:function(t,e,n){"use strict";var i=n("b903"),s=n.n(i);s.a},cb14:function(t,e,n){"use strict";n.r(e);var i=n("5b0e"),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e["default"]=s.a}},[["3f27","common/runtime","common/vendor"]]]);