(function(e){function t(t){for(var r,o,s=t[0],a=t[1],l=t[2],u=0,d=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(r=!1)}r&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},i={app:0},c=[];function s(e){return a.p+"js/"+({}[e]||e)+"."+{"chunk-0ec6422a":"f9bc2233","chunk-31e37d50":"927aeb0e","chunk-39c66b50":"823226e0","chunk-5a04c758":"f186c275","chunk-73261f62":"437a88fe"}[e]+".js"}function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var t=[],n={"chunk-0ec6422a":1,"chunk-31e37d50":1,"chunk-39c66b50":1,"chunk-5a04c758":1,"chunk-73261f62":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-0ec6422a":"1f43465e","chunk-31e37d50":"4e4453f6","chunk-39c66b50":"c2f29fe7","chunk-5a04c758":"1d52d3a2","chunk-73261f62":"8aa3120b"}[e]+".css",i=a.p+r,c=document.getElementsByTagName("link"),s=0;s<c.length;s++){var l=c[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===i))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){l=d[s],u=l.getAttribute("data-href");if(u===r||u===i)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||i,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],f.parentNode.removeChild(f),n(c)},f.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){o[e]=0})));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=i[e]=[t,n]}));t.push(r[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=s(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}i[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/handy-scroll/",a.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"1e09":function(e,t,n){},"4e2d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],c={name:"App",components:{}},s=c,a=(n("034f"),n("2877")),l=Object(a["a"])(s,o,i,!1,null,null,null),u=l.exports,d=n("8c4f"),f=n("5c96"),h=n.n(f),p=(n("d3b7"),new d["a"]({routes:[{path:"/",component:function(){return n.e("chunk-5a04c758").then(n.bind(null,"6e78"))}},{path:"/normal-single-page",component:function(){return n.e("chunk-39c66b50").then(n.bind(null,"42cd"))}},{path:"/single-page-with-layout",component:function(){return n.e("chunk-0ec6422a").then(n.bind(null,"9a29"))}},{path:"/single-page-with-multi-scroll",component:function(){return n.e("chunk-31e37d50").then(n.bind(null,"51c2"))}},{path:"/single-page-with-complicated-case",component:function(){return n.e("chunk-73261f62").then(n.bind(null,"83e7"))}}]})),y=(n("0fae"),n("1e09"),n("4160"),n("fb6a"),n("45fc"),n("a434"),n("b64b"),n("159b"),Array.prototype.slice),v=document,g={doc:v,html:v.documentElement,body:v.body,$:function(e){return"string"===typeof e?g.body.querySelector(e):e},$$:function(e){return Array.isArray(e)?e:e.nodeType===Node.ELEMENT_NODE?[e]:"string"===typeof e?y.call(g.body.querySelectorAll(e)):y.call(e)}},m=function(){function e(e,t){this.eventHandlers=[],this.container=e,this.scrollBody=t,this.visible=!0,this.initWidget(),this.update(),this.addEventHandlers(),this.skipSyncContainer=this.skipSyncWidget=!1,this.hooks={}}return e.prototype.initWidget=function(){this.widget=g.doc.createElement("div");var e=this.widget;e.classList.add("handy-scroll");var t=g.doc.createElement("div");t.style.width=this.container.scrollWidth+"px",e.appendChild(t),this.container.appendChild(e)},e.prototype.addEventHandlers=function(){var e,t=this,n=t.eventHandlers=[{el:null!==(e=t.scrollBody)&&void 0!==e?e:window,handlers:{scroll:function(){t.checkVisibility()},resize:function(){t.update()}}},{el:t.widget,handlers:{scroll:function(){t.visible&&!t.skipSyncContainer&&t.syncContainer(),t.skipSyncContainer=!1}}},{el:t.container,handlers:{scroll:function(){t.skipSyncWidget||t.syncWidget(),t.skipSyncWidget=!1},focusin:function(){setTimeout((function(){return t.syncWidget()}),0)}}}];n.forEach((function(e){var t=e.el,n=e.handlers;Object.keys(n).forEach((function(e){return t.addEventListener(e,n[e],!1)}))}))},e.prototype.checkVisibility=function(){var e=this,t=e.widget,n=e.container,r=e.scrollBody,o=t.scrollWidth<=t.offsetWidth;if(!o){var i=n.getBoundingClientRect(),c=r?r.getBoundingClientRect().bottom:window.innerHeight||g.html.clientHeight;o=i.bottom<=c||i.top>c}this.visible===o&&(this.visible=!o,t.classList.toggle("handy-scroll-hidden"))},e.prototype.syncContainer=function(){var e=this.widget.scrollLeft;this.container.scrollLeft!==e&&(this.skipSyncWidget=!0,this.container.scrollLeft=e)},e.prototype.syncWidget=function(){var e=this.container.scrollLeft;this.widget.scrollLeft!==e&&(this.skipSyncContainer=!0,this.widget.scrollLeft=e)},e.prototype.update=function(){var e=this,t=e.widget,n=e.container,r=e.scrollBody,o=n.clientWidth,i=n.scrollWidth;if(t.style.width=o+"px",r){var c=window.innerHeight-r.getBoundingClientRect().bottom;t.style.bottom=c+"px"}t.firstElementChild&&(t.firstElementChild.style.width=i+"px"),i>o&&(t.style.height=t.offsetHeight-t.clientHeight+1+"px"),this.syncWidget(),this.checkVisibility()},e.prototype.destroy=function(){var e,t;this.hooks.beforeDestroy&&this.hooks.beforeDestroy(this),this.eventHandlers.forEach((function(e){var t=e.el,n=e.handlers;Object.keys(n).forEach((function(e){return t.removeEventListener(e,n[e],!1)}))})),null===(t=null===(e=this.widget)||void 0===e?void 0:e.parentNode)||void 0===t||t.removeChild(this.widget);var n=this;n.eventHandlers=n.widget=n.container=n.scrollBody=null,this.hooks.afterDestroy&&this.hooks.afterDestroy()},e}(),b=[],w={mount:function(e,t){var n,r=g.$(e);if(r&&!w.mounted(r)){var o=new m(r,null!==(n=g.$(t))&&void 0!==n?n:void 0);return b.push(o),o}},mounted:function(e){var t=g.$(e);return b.some((function(e){return e.container===t}))},update:function(e){g.$$(e).forEach((function(e){b.some((function(t){return t.container===e&&(t.update(),!0)}))}))},destroy:function(e){g.$$(e).forEach((function(e){b.some((function(t,n){return t.container===e&&(b.splice(n,1)[0].destroy(),!0)}))}))}},k=w,E={bind:function(e,t){},inserted:function(e,t){var n=t.arg;console.log(n);var r=e.querySelector("div.el-table__body-wrapper");setTimeout((function(){var e=k.mount(r,"#".concat(n)),t=function(){console.log("resize"),e.update()};window.addEventListener("resize",t),e.hooks.afterDestroy=function(){window.removeEventListener("resize",t)}}),0)},unbind:function(e,t){var n=e.querySelector("div.el-table__body-wrapper");k.destroy(n)}};r["default"].directive("el-table-hs",E);n("4e2d");window.handyScroll=k,r["default"].config.productionTip=!1,r["default"].use(d["a"]),r["default"].use(h.a),new r["default"]({router:p,render:function(e){return e(u)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.44ccc871.js.map