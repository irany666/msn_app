(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/search/index"],{"11b0":function(e,t,o){"use strict";var i=o("585e"),s=o.n(i);s.a},"2be1":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(o("8d84"));function s(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{defaultKeyword:"",keyword:"",oldKeywordList:[],hotKeywordList:[],keywordList:[],forbid:"",isShowKeywordList:!1}},onLoad:function(){this.init()},components:{mSearch:i.default},methods:{init:function(){this.loadDefaultKeyword(),this.loadOldKeyword(),this.loadHotKeyword()},blur:function(){e.hideKeyboard()},loadDefaultKeyword:function(){this.defaultKeyword="默认关键字"},loadOldKeyword:function(){var t=this;e.getStorage({key:"OldKeys",success:function(e){var o=JSON.parse(e.data);t.oldKeywordList=o}})},loadHotKeyword:function(){this.hotKeywordList=["键盘","鼠标","显示器","电脑主机","蓝牙音箱","笔记本电脑","鼠标垫","USB","USB3.0"]},inputChange:function(t){var o=this,i=t.detail?t.detail.value:t;if(!i)return this.keywordList=[],void(this.isShowKeywordList=!1);this.isShowKeywordList=!0,e.request({url:"https://suggest.taobao.com/sug?code=utf-8&q="+i,success:function(e){o.keywordList=o.drawCorrelativeKeyword(e.data.result,i)}})},drawCorrelativeKeyword:function(e,t){for(var o=e.length,i=[],s=0;s<o;s++){var r=e[s],a=r[0].replace(t,"<span style='color: #9f9f9f;'>"+t+"</span>");a="<div>"+a+"</div>";var n={keyword:r[0],htmlStr:a};i.push(n)}return i},setkeyword:function(e){this.keyword=e.keyword},oldDelete:function(){var t=this;e.showModal({content:"确定清除历史搜索记录？",success:function(o){o.confirm?(console.log("用户点击确定"),t.oldKeywordList=[],e.removeStorage({key:"OldKeys"})):o.cancel&&console.log("用户点击取消")}})},hotToggle:function(){this.forbid=this.forbid?"":"_forbid"},doSearch:function(t){t=t||(this.keyword?this.keyword:this.defaultKeyword),this.keyword=t,this.saveKeyword(t),e.showToast({title:t,icon:"none",duration:2e3}),plus.runtime.openURL(encodeURI("taobao://s.taobao.com/search?q="+t))},saveKeyword:function(t){var o=this;e.getStorage({key:"OldKeys",success:function(i){console.log(i.data);var s=JSON.parse(i.data),r=s.indexOf(t);-1==r?s.unshift(t):(s.splice(r,1),s.unshift(t)),s.length>10&&s.pop(),e.setStorage({key:"OldKeys",data:JSON.stringify(s)}),o.oldKeywordList=s},fail:function(i){var s=[t];e.setStorage({key:"OldKeys",data:JSON.stringify(s)}),o.oldKeywordList=s}})}}};t.default=r}).call(this,o("649d")["default"])},"585e":function(e,t,o){},"795e":function(e,t,o){"use strict";o.r(t);var i=o("2be1"),s=o.n(i);for(var r in i)"default"!==r&&function(e){o.d(t,e,function(){return i[e]})}(r);t["default"]=s.a},"7e65":function(e,t,o){"use strict";o.r(t);var i=o("8567"),s=o("795e");for(var r in s)"default"!==r&&function(e){o.d(t,e,function(){return s[e]})}(r);o("11b0");var a=o("2877"),n=Object(a["a"])(s["default"],i["a"],i["b"],!1,null,null,null);n.options.__file="index.vue",t["default"]=n.exports},8567:function(e,t,o){"use strict";var i=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:"content"},[o("view",{staticClass:"uni-flex uni-row"},[o("view",{staticClass:"flex-item"},[e._v("123")]),o("view",{staticClass:"flex-item search-box"},[o("mSearch",{attrs:{mode:2,button:"inside",placeholder:e.defaultKeyword,eventid:"c92f261e-0",mpcomid:"c92f261e-0"},on:{search:function(t){e.doSearch(!1)},input:e.inputChange,confirm:function(t){e.doSearch(!1)}},model:{value:e.keyword,callback:function(t){e.keyword=t},expression:"keyword"}})],1)]),o("view",{staticClass:"search-keyword",attrs:{eventid:"c92f261e-7"},on:{touchstart:e.blur}},[o("scroll-view",{directives:[{name:"show",rawName:"v-show",value:e.isShowKeywordList,expression:"isShowKeywordList"}],staticClass:"keyword-list-box",attrs:{"scroll-y":""}},e._l(e.keywordList,function(t,i){return o("view",{key:t.keyword,staticClass:"keyword-entry",attrs:{"hover-class":"keyword-entry-tap"}},[o("view",{staticClass:"keyword-text",attrs:{eventid:"c92f261e-1-"+i},on:{tap:function(o){e.doSearch(t.keyword)}}},[o("rich-text",{attrs:{nodes:t.htmlStr,mpcomid:"c92f261e-1-"+i}})],1),o("view",{staticClass:"keyword-img",attrs:{eventid:"c92f261e-2-"+i},on:{tap:function(o){e.setkeyword(t)}}},[o("image",{attrs:{src:"../../static/img/search/back.png"}})])])})),o("scroll-view",{directives:[{name:"show",rawName:"v-show",value:!e.isShowKeywordList,expression:"!isShowKeywordList"}],staticClass:"keyword-box",attrs:{"scroll-y":""}},[e.oldKeywordList.length>0?o("view",{staticClass:"keyword-block"},[o("view",{staticClass:"keyword-list-header"},[o("view",[e._v("历史搜索")]),o("view",[o("image",{attrs:{src:"../../static/img/search/delete.png",eventid:"c92f261e-3"},on:{tap:e.oldDelete}})])]),o("view",{staticClass:"keyword"},e._l(e.oldKeywordList,function(t,i){return o("view",{key:t,attrs:{eventid:"c92f261e-4-"+i},on:{tap:function(o){e.doSearch(t)}}},[e._v(e._s(t))])}))]):e._e(),o("view",{staticClass:"keyword-block"},[o("view",{staticClass:"keyword-list-header"},[o("view",[e._v("热门搜索")]),o("view",[o("image",{attrs:{src:"../../static/img/search/attention"+e.forbid+".png",eventid:"c92f261e-5"},on:{tap:e.hotToggle}})])]),""==e.forbid?o("view",{staticClass:"keyword"},e._l(e.hotKeywordList,function(t,i){return o("view",{key:t,attrs:{eventid:"c92f261e-6-"+i},on:{tap:function(o){e.doSearch(t)}}},[e._v(e._s(t))])})):o("view",{staticClass:"hide-hot-tis"},[o("view",[e._v("当前搜热门搜索已隐藏")])])])])],1)])},s=[];o.d(t,"a",function(){return i}),o.d(t,"b",function(){return s})},"9c0c":function(e,t,o){"use strict";o("fb7d");var i=r(o("b0ce")),s=r(o("7e65"));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(s.default))}},[["9c0c","common/runtime","common/vendor"]]]);