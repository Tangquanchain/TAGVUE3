(function(e){function n(n){for(var c,r,o=n[0],h=n[1],i=n[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&f.push(a[r][0]),a[r]=0;for(c in h)Object.prototype.hasOwnProperty.call(h,c)&&(e[c]=h[c]);l&&l(n);while(f.length)f.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==a[o]&&(c=!1)}c&&(u.splice(n--,1),e=h(h.s=t[0]))}return e}var c={},r={app:0},a={app:0},u=[];function o(e){return h.p+"js/"+({}[e]||e)+"."+{"chunk-05630afc":"a3fce1f7","chunk-11ad6c8b":"7ea7e56d","chunk-2e15419c":"9b880d22","chunk-30afc277":"79b15571","chunk-4429729f":"875a149b","chunk-1cbc57a4":"2aaeb1c9","chunk-a19f2fc6":"60e74e43","chunk-e54f8b00":"57886233","chunk-4d4f372a":"5f439425","chunk-53166d0a":"8f3d89f9","chunk-5d6b3998":"f047655a","chunk-63798550":"5704b306","chunk-6895a010":"b5b3510a","chunk-ac3e566e":"024b1468","chunk-bc1cd996":"88ab9d22","chunk-d1d02324":"c48c256b"}[e]+".js"}function h(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,h),t.l=!0,t.exports}h.e=function(e){var n=[],t={"chunk-05630afc":1,"chunk-11ad6c8b":1,"chunk-30afc277":1,"chunk-4429729f":1,"chunk-1cbc57a4":1,"chunk-a19f2fc6":1,"chunk-e54f8b00":1,"chunk-53166d0a":1,"chunk-6895a010":1,"chunk-ac3e566e":1,"chunk-d1d02324":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-05630afc":"8e9e761d","chunk-11ad6c8b":"8740f5d3","chunk-2e15419c":"31d6cfe0","chunk-30afc277":"e78e8d1c","chunk-4429729f":"2d314314","chunk-1cbc57a4":"8ea4fa66","chunk-a19f2fc6":"8fbe2b05","chunk-e54f8b00":"9a202c43","chunk-4d4f372a":"31d6cfe0","chunk-53166d0a":"87b515ef","chunk-5d6b3998":"31d6cfe0","chunk-63798550":"31d6cfe0","chunk-6895a010":"dcd30eb6","chunk-ac3e566e":"d074efcb","chunk-bc1cd996":"31d6cfe0","chunk-d1d02324":"7ee219fa"}[e]+".css",a=h.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var i=u[o],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===c||d===a))return n()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){i=f[o],d=i.getAttribute("data-href");if(d===c||d===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],l.parentNode.removeChild(l),t(u)},l.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=u);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,h.nc&&d.setAttribute("nonce",h.nc),d.src=o(e);var f=new Error;i=function(n){d.onerror=d.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;f.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",f.name="ChunkLoadError",f.type=c,f.request=r,t[1](f)}a[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(n)},h.m=e,h.c=c,h.d=function(e,n,t){h.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},h.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},h.t=function(e,n){if(1&n&&(e=h(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(h.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)h.d(t,c,function(n){return e[n]}.bind(null,c));return t},h.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return h.d(n,"a",n),n},h.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},h.p="/TAGVUE3/vuecli3test/",h.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var f=0;f<i.length;f++)n(i[f]);var l=d;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("4de4"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("a026"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],u={name:"App"},o=u,h=(t("5c0b"),t("2877")),i=Object(h["a"])(o,r,a,!1,null,null,null),d=i.exports;c["a"].prototype.$bus=new c["a"];t("d3b7");var f=t("8c4f");c["a"].use(f["a"]);var l=[{path:"/home",name:"home",component:function(){return Promise.all([t.e("chunk-4429729f"),t.e("chunk-a19f2fc6")]).then(t.bind(null,"cfcf"))}},{path:"*",redirect:"/login"},{name:"Login",path:"/login",component:function(){return t.e("chunk-ac3e566e").then(t.bind(null,"8070"))}},{name:"customer_dashboard",path:"/store",component:function(){return Promise.all([t.e("chunk-4429729f"),t.e("chunk-e54f8b00")]).then(t.bind(null,"4297"))},children:[{name:"AllProduct",path:"allproduct",component:function(){return t.e("chunk-30afc277").then(t.bind(null,"2e5a"))}},{name:"ShoppingCart",path:"shopping_cart/:itemId",component:function(){return t.e("chunk-6895a010").then(t.bind(null,"a4e6"))}}]},{name:"checkout",path:"/checkout",component:function(){return Promise.all([t.e("chunk-4429729f"),t.e("chunk-1cbc57a4")]).then(t.bind(null,"51ef"))},children:[{name:"cart",path:"cart",component:function(){return t.e("chunk-11ad6c8b").then(t.bind(null,"a2aa"))}},{name:"formdata",path:"formdata/:orderId",component:function(){return t.e("chunk-d1d02324").then(t.bind(null,"9db3"))}},{name:"complete",path:"complete",component:function(){return t.e("chunk-05630afc").then(t.bind(null,"cea9"))}}]},{name:"Dashboard",path:"/dashboard",component:function(){return t.e("chunk-53166d0a").then(t.bind(null,"f561"))},children:[{name:"Products",path:"products",component:function(){return t.e("chunk-bc1cd996").then(t.bind(null,"4f65"))},meta:{requiresAuth:!0}},{name:"Products_list",path:"products_list",component:function(){return t.e("chunk-5d6b3998").then(t.bind(null,"177a"))},meta:{requiresAuth:!0}},{name:"Coupon",path:"coupon",component:function(){return t.e("chunk-4d4f372a").then(t.bind(null,"66cb"))},meta:{requiresAuth:!0}}]},{name:"admin",path:"/",component:function(){return t.e("chunk-53166d0a").then(t.bind(null,"f561"))},children:[{name:"CustomOrder",path:"custom_order",component:function(){return t.e("chunk-2e15419c").then(t.bind(null,"53fb"))}},{name:"CustomCheckout",path:"custom_checkout/:orderId",component:function(){return t.e("chunk-63798550").then(t.bind(null,"4b1c"))}}]}],p=new f["a"]({routes:l}),s=p,b=t("bc3a"),m=t.n(b),k=t("a7fe"),v=t.n(k),g=t("9062"),y=t.n(g),w=(t("e40d"),t("4989"),t("a9e3"),t("b680"),t("ac1f"),t("5319"),function(e){var n=Number(e);return"$".concat(n.toFixed(0).replace(/./g,(function(e,n,t){var c=n&&"."!==e&&(t.length-n)%3===0?", ".concat(e).replace(/\s/g,""):e;return c})))}),_=t("7bb1"),P=t("427f"),A=t.n(P),O=t("a925");c["a"].use(O["a"]);var C=new O["a"]({locale:"zhTW"});c["a"].use(_["a"],{events:"input|blur",i18n:C,dictionary:{zhTW:A.a}}),c["a"].component("Loading",y.a),c["a"].use(v.a,m.a),c["a"].config.productionTip=!1,m.a.defaults.withCredentials=!0,c["a"].filter("currency",w),new c["a"]({el:"#app",components:{App:d},template:"<App/>",router:s}),s.beforeEach((function(e,n,t){if(console.log("to",e,"from",n,"next",t),e.meta.requiresAuth){var c="".concat("https://vue-course-api.hexschool.io","/api/user/check");m.a.post(c).then((function(e){console.log(e.data),e.data.success?t():t({path:"/login"})})),console.log("這裡需要驗證")}else t()}))},"5c0b":function(e,n,t){"use strict";var c=t("9c0c"),r=t.n(c);r.a},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.76f71f7c.js.map