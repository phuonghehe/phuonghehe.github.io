(()=>{var e={921:(e,t,a)=>{var r=window.metaLayer||window._metaLayer,n="shop/cart-icon/dist/client/",s=r?"".concat(r.env_assets,"/").concat(n):n;a.p=s},970:e=>{e.exports={creatorNamespace:"shop",componentId:"cart-icon",componentVersion:"",contractVersion:"v1",assetBasePath:"dist/client"}}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var s=t[r]={exports:{}};return e[r](s,s.exports,a),s.exports}a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.p="",(()=>{"use strict";a(921);const e=React;var t=a.n(e);const r=ReactDOM,n=initializer;var s=a.n(n);const c=PropTypes;var o=a.n(c),i=e=>{var{serverState:a}=e;return t().createElement("div",{className:"appContainer"},t().createElement(v,{deviceClass:a.app.deviceClass,instanceId:a.app.instanceId,env_appServer:a.metaLayer.env_appServer,piscesBaseUrl:a.app.piscesBaseUrl}))};i.propTypes={serverState:o().object};const p=actionLog;function l(e){return e&&decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*".concat(encodeURIComponent(e).replace(/[-.+*]/g,"\\$&"),"\\s*\\=\\s*([^;]*).*$)|^.*$")),"$1"))||null}const d=a.p+"images/066a3c85f1c275de42889e546accc7b6.svg";var v=a=>{var{instanceId:r,deviceClass:n,env_appServer:s}=a,[c,o]=(0,e.useState)(0);return(0,e.useEffect)((()=>{var e,t;(l("ut")||l("vt"))&&(e=s,t="".concat(e,"/basket/v1/order/metadata"),fetch(t,{method:"GET",headers:{"X-CLIENT-ID":"atlas","X-REQUEST-ID":"global-header-cart-count"}}).then((e=>{if(e.ok)return e.json();throw Error()})).then((e=>e.count)).catch((()=>l("CartItemCount")))).then((e=>{o(e)})),(0,p.listen)((e=>{var{type:t,payload:a}=e;"ADD_TO_CART_SUCCESS"!==t&&"UPDATE_CART_COUNT"!==t||o(a.cartCount)}),r)}),[]),t().createElement("div",{className:"bby-cart ".concat("s"===n?"sv":"lv")},t().createElement("a",{"data-lid":"hdr_carticon",href:"".concat(s,"/cart"),className:"cart-link","aria-label":"Cart, ".concat(c," item").concat(c>1?"s":""),title:"Cart"},t().createElement("img",{src:d,alt:"cart icon"}),t().createElement("span",{className:"cart-label"},"Cart"),c>0&&t().createElement("div",{className:"dot","aria-hidden":"true"},c)))};v.propTypes={deviceClass:o().string,instanceId:o().string.isRequired,env_appServer:o().string.isRequired};var m=a(970);const u=JSON.parse('{"name":"@gvpc/cart-icon","version":"1.5.15","license":"UNLICENSED","main":"dist/server/server.js","contributors":[{"name":"Pathfinder Atlas","email":"Pathfinder-Atlas@bestbuy.com"}],"scripts":{"analyzeBundle":"../../scripts/analyze-bundle.sh","build":"../../scripts/build.sh","build:stats":"NODE_ENV=production webpack --mode \'production\' --define process.env.NODE_ENV=\'production\' --profile --json > compilation-stats.json","clean":"rm -rf dist coverage","henry":"npx henry","lint":"eslint .","lint:fix":"eslint . --fix","test":"jest --coverage","prepare":"yarn build","start":"node --inspect-port=${INSPECTOR_PORT:-9229} --inspect dev-server"},"dependencies":{"@bestbuy/brix-web":"7.0.10","@gvp/lib-actions":"4.2.1","@gvp/lib-component-assets":"6.0.1"},"files":["dist"],"gitHead":"fb7770564b4ebe2f2b1ef12a517376816b886a34"}');var{version:b}=u,f={componentId:m.componentId,contractVersion:m.contractVersion,creatorNamespace:m.creatorNamespace,componentVersion:b};s().registerComponent(f,(function(e,a){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},s=document.querySelector(a);(0,r.hydrate)(t().createElement(i,{serverState:n}),s)}))})()})();
//# sourceMappingURL=client-bbc9597bd711282ac3f5baff7b6a1fef.mjs.map