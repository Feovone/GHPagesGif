(function(t){function e(e){for(var r,i,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)i=s[f],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/GHPagesGif/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"theme--dark"},[n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{attrs:{lg:"8",cols:"12","offset-lg":"2"}},[n("Navbar"),n("v-main",[n("Gifts")],1)],1)],1)],1)],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-app-bar",{attrs:{app:"",color:"black",dark:""}},[n("v-container",{staticClass:"pa-0",attrs:{fluid:""}},[n("v-row",{staticClass:"mt-1",attrs:{"no-gutters":""}},[n("v-col",{attrs:{lg:"1","offset-lg":"2",sm:"2",cols:"4"}},[n("a",{attrs:{href:"/"}},[n("v-toolbar-title",{staticClass:"display-1"},[t._v("GIPHY ")])],1)]),n("v-col",{attrs:{lg:"5",sm:"9",xs:"8",cols:"7"}},[n("v-text-field",{attrs:{"hide-details":"","prepend-icon":"mdi-magnify","single-line":"",placeholder:"Find something interesting..."},model:{value:t.query,callback:function(e){t.query=e},expression:"query"}})],1),n("v-col",{staticClass:"ml-4 hidden-lg-and-down",attrs:{lg:"2"}},[n("v-btn",{attrs:{href:"/upload"}},[n("span",{staticClass:"mr-2"},[t._v("Upload")])]),n("v-btn",{staticClass:"ml-2",attrs:{href:"/create"}},[n("span",{staticClass:"mr-2"},[t._v("Create")])])],1)],1)],1)],1),n("v-sheet",{staticClass:"overflow-y-auto",attrs:{id:"scrolling-techniques","max-height":"9000"}})],1)},s=[],c=n("1da1"),l=(n("96cf"),n("d3b7"),{name:"Navbar",data:function(){return{}},computed:{query:{get:function(){return this.$store.state.gif.query},set:function(t){this.$store.state.gif.query=t}}},methods:{makeRequest:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,fetch(e,{method:t});case 3:return r=n.sent,n.next=6,r.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))()}},watch:{query:function(){this.$store.dispatch("gif/SEARCH",{shift:0,newQuery:this.query})}}}),u=l,f=(n("f7a1"),n("2877")),d=n("6544"),g=n.n(d),p=n("40dc"),h=n("8336"),m=n("62ad"),v=n("a523"),y=n("0fd9"),b=n("8dd9"),w=n("8654"),k=n("2a7f"),_=Object(f["a"])(u,i,s,!1,null,"bc4359c0",null),x=_.exports;g()(_,{VAppBar:p["a"],VBtn:h["a"],VCol:m["a"],VContainer:v["a"],VRow:y["a"],VSheet:b["a"],VTextField:w["a"],VToolbarTitle:k["a"]});var C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[!1===t.notFound?n("v-row",{staticClass:"pa-0"},t._l(t.gifts,(function(e,r){return n("v-col",{key:r,staticClass:"d-flex child-flex pa-0",attrs:{lg:"2",cols:4}},[n("a",{on:{click:function(n){return t.shareViaWebShare(e[0],e[2])}}},[n("v-img",{key:e[0],staticClass:"grey lighten-2",attrs:{src:e[0],"lazy-src":e[1],"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)])})),1):n("v-row",{staticClass:"pa-0",attrs:{align:"center",justify:"center"}},t._l(t.gifts,(function(e,r){return n("v-col",{key:r,staticClass:"d-flex child-flex pa-0",attrs:{cols:6}},[n("a",{on:{click:function(n){return t.shareViaWebShare(e[0],e[2])}}},[n("v-img",{key:e[0],staticClass:"grey lighten-2",attrs:{src:e[0],"lazy-src":e[1],"aspect-ratio":"1"},scopedSlots:t._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)})],1)])})),1)],1)},F=[],j={name:"Gifts",data:function(){return{}},computed:{gifts:function(){return this.$store.state.gif.gifts},notFound:function(){return this.$store.state.gif.notFound},loading:function(){return this.$store.state.gif.loading}},created:function(){var t=this,e=this.makeRequest("GET","https://api.giphy.com/v1/gifs/trending?api_key=V9wCFxmz1l4PFQiQ2NaskBRjCkE9LIdL&limit=48&rating=g");e.then((function(e){t.$store.commit("gif/UPDATE_GIFTS",e.data)}));var n=function(){if(!1===t.loading){var e=document.documentElement.getBoundingClientRect().bottom;e<document.documentElement.clientHeight+100&&t.$store.dispatch("gif/SEARCH",{shift:48})}};document.addEventListener("scroll",n)},methods:{shareViaWebShare:function(t,e){navigator.share({title:e,url:t})},makeRequest:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch(e,{method:t});case 2:return r=n.sent,n.next=5,r.json();case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},randomInt:function(t){return Math.floor(Math.random()*Math.floor(t))+1}}},V=j,O=n("adda"),R=n("490a"),T=Object(f["a"])(V,C,F,!1,null,"bbc8a76c",null),q=T.exports;g()(T,{VCol:m["a"],VImg:O["a"],VProgressCircular:R["a"],VRow:y["a"]});var S={name:"App",components:{Navbar:x,Gifts:q},data:function(){return{}}},E=S,G=n("7496"),P=n("f6c4"),A=Object(f["a"])(E,a,o,!1,null,null,null),I=A.exports;g()(A,{VApp:G["a"],VCol:m["a"],VContainer:v["a"],VMain:P["a"],VRow:y["a"]});var N=n("2f62"),$=(n("99af"),{makeRequest:function(t,e){return Object(c["a"])(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(e),n.next=3,fetch(e,{method:t});case 3:return r=n.sent,n.next=6,r.json();case 6:return n.abrupt("return",n.sent);case 7:case"end":return n.stop()}}),n)})))()},makeUrl:function(t){return console.log(t),""===t.query?"https://api.giphy.com/v1/gifs/trending?api_key=V9wCFxmz1l4PFQiQ2NaskBRjCkE9LIdL&limit=48&rating=g":t.notFound?"https://api.giphy.com/v1/gifs/random?api_key=V9wCFxmz1l4PFQiQ2NaskBRjCkE9LIdL&tag=404&rating=r":"https://api.giphy.com/v1/gifs/search?api_key=V9wCFxmz1l4PFQiQ2NaskBRjCkE9LIdL&limit=48&offset="+t.offset+"&rating=g&lang=en&q="+t.query}}),Q={namespaced:!0,state:{query:"",gifts:[],offset:0,loading:!1,notFound:!1},actions:{SEARCH:function(t,e){var n=t.commit,r=t.state;r.loading=!0,void 0!==e.shift&&(r.offset+=e.shift);var a=$.makeUrl(r),o=$.makeRequest("GET",a);o.then((function(t){0===t.data.length?(r.notFound=!0,a=$.makeUrl(r),o=$.makeRequest("GET",a),o.then((function(t){n("NOT_FOUND_GIFT",t.data)}))):(r.notFound=!1,void 0!==e.newQuery?n("UPDATE_GIFTS",t.data):""!==r.query&&n("ADD_GIFTS",t.data))}))}},mutations:{UPDATE_GIFTS:function(t,e){window.scrollTo(pageXOffset,0);for(var n=[],r=0;r<e.length;r++)n.push([e[r].images.fixed_height.webp,e[r].images.fixed_width_small.webp,e[r].title]);t.gifts=n,t.loading=!1},ADD_GIFTS:function(t,e){for(var n=[],r=0;r<e.length;r++)n.push([e[r].images.fixed_height.webp,e[r].images.fixed_width_small.webp,e[r].title]);t.gifts=t.gifts.concat(n),t.loading=!1},NOT_FOUND_GIFT:function(t,e){t.gifts=[[e.images.fixed_height.webp,e.images.fixed_width_small.webp,e.title]],t.loading=!1}}};r["a"].use(N["a"]);var D=new N["a"].Store({modules:{gif:Q}}),L=n("f309");r["a"].use(L["a"]);var U=new L["a"]({}),B=n("9483");Object(B["a"])("".concat("/GHPagesGif/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].config.productionTip=!1,new r["a"]({store:D,vuetify:U,render:function(t){return t(I)}}).$mount("#app")},"87c6":function(t,e,n){},f7a1:function(t,e,n){"use strict";n("87c6")}});
//# sourceMappingURL=app.640f2fb9.js.map