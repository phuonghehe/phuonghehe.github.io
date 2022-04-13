(()=>{var e={921:(e,t,n)=>{var r=window.metaLayer||window._metaLayer,a="shop/footer/dist/client/",i=r?"".concat(r.env_assets,"/").concat(a):a;n.p=i},970:e=>{e.exports={creatorNamespace:"shop",componentId:"footer",componentVersion:"",contractVersion:"v1",assetBasePath:"dist/client"}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="",(()=>{"use strict";n(921);const e=React;var t=n.n(e);const r=ReactDOM,a=initializer;var i=n.n(a);const l=PropTypes;var o=n.n(l);const s=brix;function c(e){var{deviceClass:n}=e,r=["link","utility","sr-only","sr-only-focusable","s"===n&&"feedback-link"].filter(Boolean).join(" ");return t().createElement(s.BrixButton,{className:r,buttonStyle:"link",onClick:e=>{var t=e||window.event||{returnValue:!1};if(t&&t.preventDefault&&t.preventDefault(),window.analyticsQ){var{analyticsQ:n}=window;n.dispatch({type:"TMS_EVENT",name:"OpinionLab - Assistive Tech",event:"launch"})}}},"Accessibility Survey")}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function v(e,t){if(t&&("object"===u(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}c.propTypes={deviceClass:o().string};const y=EmbeddedComponentRenderer;function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(o,e);var n,r,a,i,l=(a=o,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(a);if(i){var n=f(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return v(this,e)});function o(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,o),(n=l.call(this,e,t)).state={isClient:e.renderClientOnly||"object"===("undefined"==typeof window?"undefined":u(window)),html:e.testing_html||"",fetchedComponentHtml:!1},n}return n=o,r=[{key:"filterIllegalQueryParams",value:function(e){var t=e.query;t&&Object.keys(t).forEach((function(e){e.startsWith("_")&&(console.error("LibEmbeddedComponent: Illegal query param ".concat(e,". Query params cannot be prefixed with '_'")),delete t[e])}))}},{key:"fetchHtml",value:function(e){var t=this,n=this.context.log,r=this.props,a=r.onInitError,i=r.onInitSuccess;return this.filterIllegalQueryParams(e),(0,y.fetchComponent)(b(b({},e),{},{omitEmptyComponentDiv:!1})).then((function(n){t.setState(b(b({},n),{},{fetchedComponentHtml:!0})),n.renderCallback||i(N(n,e))})).catch((function(t){n&&n.error("LibEmbeddedComponent: Failed to fetch embedded component ".concat((0,y.buildComponentPath)(e)),t),a(t)}))}},{key:"executeRenderCallback",value:function(){var e=this.props,t=e.onInitError,n=e.onInitSuccess;if(this.state.renderCallback){try{this.state.renderCallback(this.ref)}catch(e){return void t(e)}finally{this.setState({renderCallback:null})}n(N(this.state,this.props))}}},{key:"getWrapperElement",value:function(){return this.props.wrapperElementTag?this.props.wrapperElementTag:"div"}},{key:"componentDidMount",value:function(){var e=this.props,t=e.creatorNamespace,n=e.componentId,r=e.contractVersion,a=e.onInitSuccess,i=e.parentInstanceId,l="".concat(this.getWrapperElement(),"[id^=").concat(t,"-").concat(n,"]"),o="".concat(this.getWrapperElement(),"[data-").concat(t,"-").concat(n,"-").concat(r,"]"),s=this.ref.querySelector(l),c=this.ref.querySelector(o),d="csi\\:component[cn^=".concat(t,"]"),u=this.ref.querySelector(d);if(s||u){var p={creatorNamespace:t,componentId:n,contractVersion:r};y.afterServerRender?(0,y.afterServerRender)(p,i,this.ref):console.warn("This page is using an outdated version of @gvp/lib-embedded-component-renderer that doesn't support afterServerRender");var m=s?s.outerHTML:"";a(N(b(b({},this.state),{},{html:m}),this.props))}else c?a(N({html:c.outerHTML},this.props)):this.fetchHtml(this.props)}},{key:"componentWillUnmount",value:function(){this.props.applyDeInitializer&&this.ref.firstElementChild.id&&window&&window.initializer&&window.initializer.deInitializeInstance(this.ref.firstElementChild.id)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=(0,y.buildComponentPath)(e),n=(0,y.buildComponentPath)(this.props);"undefined"!=typeof window&&t!==n&&(this.state.renderCallback&&this.setState({renderCallback:null}),this.fetchHtml(e))}},{key:"componentDidUpdate",value:function(){this.executeRenderCallback()}},{key:"shouldComponentUpdate",value:function(e,t){var n=t.html!==this.state.html,r=t.fetchedComponentHtml&&!this.state.fetchedComponentHtml;return t.fetchedComponentHtml&&n||r}},{key:"render",value:function(){var e=this,n=this.state.html;this.state.isClient||(n=(0,y.getComponentIncludeString)(this.props));var r={__html:n},a=this.getWrapperElement();return t().createElement(a,{ref:function(t){return e.ref=t},suppressHydrationWarning:!0,dangerouslySetInnerHTML:r})}}],r&&p(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),o}(t().Component);function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return{didServerRender:!e.html.includes("data-".concat(t.creatorNamespace,"-").concat(t.componentId,"-").concat(t.contractVersion))}}g.defaultProps={layoutClassList:"",onError:"continue",onInitError:function(){},onInitSuccess:function(){},query:{}};var E={creatorNamespace:o().string.isRequired,componentId:o().string.isRequired,contractVersion:o().string.isRequired,renderClientOnly:o().bool,layoutClassList:o().string,parentInstanceId:o().string.isRequired,query:o().object,onInitError:o().func,onInitSuccess:o().func,onError:o().oneOf(["failParent","continue"]),wrapperElementTag:o().string,testing_html:o().string,applyDeInitializer:o().bool};g.propTypes=E,g.contextTypes={log:o().object};var k=(0,e.createContext)();function w(e,t,n,r,a,i,l){try{var o=e[i](l),s=o.value}catch(e){return void n(e)}o.done?t(s):Promise.resolve(s).then(r,a)}function I(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function l(e){w(i,r,a,l,o,"next",e)}function o(e){w(i,r,a,l,o,"throw",e)}l(void 0)}))}}function C(){return C=I((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return fetch("/profile/rest/a/emailsub/enroll",{method:"POST",body:JSON.stringify({emailAddress:e}),headers:{Accept:"application/json","Content-Type":"application/json"}}).then((e=>e.json()))})),C.apply(this,arguments)}var S="Please enter a valid email address.",O="EMAIL_SUCCESS",T="EMAIL_ERROR",j=e=>{var{mainNavigation:n,marketingNavigation:r,iconNavigation:a,legalNavigation:i,disclaimer:l,deviceClass:o,displayLiveChat:s,disableFooterSTIPS:d}=e;return t().createElement(k.Provider,{value:{deviceClass:o,displayLiveChat:s}},t().createElement("footer",{className:"appContainer ".concat(o,"v"),id:"footer",role:"contentinfo"},t().createElement(V,{iconNavigation:a}),t().createElement("div",{className:"main-marketing-wrapper"},t().createElement(W,{mainNavigation:n}),t().createElement(c,null),t().createElement(Q,{marketingNavigation:r})),t().createElement(H,{legalNavigation:i,disclaimer:l}),t().createElement("div",{id:"footer-feedback-link"}),!d&&t().createElement(g,{parentInstanceId:"footer",creatorNamespace:"shop",componentId:"stips",contractVersion:"v1",query:{deviceClass:o,placement:"footer"},onError:"continue"}),t().createElement(g,{parentInstanceId:"footer",creatorNamespace:"shop",componentId:"location-persistence",contractVersion:"v1",query:{instanceId:"location-persistence-footer"},onError:"continue"})))};j.propTypes={deviceClass:o().string,displayLiveChat:o().bool,disableFooterSTIPS:o().bool,mainNavigation:o().array,marketingNavigation:o().array,iconNavigation:o().array,legalNavigation:o().array,disclaimer:o().string};var x=e=>{var n,{displayName:r,description:a,iconImage:i,link:l}=e;return t().createElement(t().Fragment,null,t().createElement("div",{className:"best-buy-app","aria-label":"Learn more about Best Buy App"},(null==i||null===(n=i.path)||void 0===n?void 0:n.length)>0&&t().createElement("div",{className:"best-buy-app-icon"},t().createElement(s.BrixIcon,{icon:null==i?void 0:i.path,fill:null==i?void 0:i.fillColor})),t().createElement("div",{className:"best-buy-app-text"},r&&t().createElement("span",{className:"best-buy-app-title v-fw-medium"},r),(null==l?void 0:l.url)&&t().createElement("a",{href:null==l?void 0:l.url,target:null!=l&&l.openLinkInNewTab?"_blank":"_self",rel:"noreferrer",className:"v-fw-medium","data-track":(null==l?void 0:l.lid)||"","aria-label":"Learn more about Best Buy App"},a," ",t().createElement("span",{"aria-hidden":"true"},"›")))),t().createElement("hr",{role:"presentation","aria-hidden":"true"}))};x.propTypes={displayName:o().string,description:o().string,iconImage:o().shape({path:o().string,fillColor:o().string}),link:o().shape({url:o().string,lid:o().string,openLinkInNewTab:o().bool})};var P=e=>{var{displayName:n,link:r={}}=e,{url:a,lid:i,openLinkInNewTab:l=!1}=r;return a&&0!==a.length?t().createElement("a",{href:a,"data-track":i,target:l?"_blank":"_self",rel:"noreferrer"},n):null};P.propTypes={displayName:o().string,link:o().shape({url:o().string,lid:o().string,openLinkInNewTab:o().bool})};var L=()=>{var{deviceClass:n}=(0,e.useContext)(k),r="s"===n?"Desktop Site":"Mobile Site";return t().createElement(s.BrixButton,{buttonStyle:"link",onClick:()=>{document.cookie="bby_rdp=".concat("s"===n?"l":"s","; domain=.bestbuy.com; path=/;"),location.reload()}},r)};function R(e,t,n,r,a,i,l){try{var o=e[i](l),s=o.value}catch(e){return void n(e)}o.done?t(s):Promise.resolve(s).then(r,a)}var B={subscribeSuccess:!1,hasError:!1,errorMessage:""},M=(e,t)=>{var n;switch(t.type){case O:return Object.assign({},e,{hasError:!1,errorMessage:"",subscribeSuccess:!0});case T:return Object.assign({},e,{hasError:!0,errorMessage:null==t||null===(n=t.payload)||void 0===n?void 0:n.errorMessage});default:return e}},D=n=>{var{bold:r=!1,displayName:a="",description:i=""}=n,l=(0,e.useRef)(),o=(0,e.useRef)(),[c,d]=(0,e.useReducer)(M,B);(0,e.useEffect)((()=>{var e;c.subscribeSuccess&&null!=o&&o.current&&(null==o||null===(e=o.current)||void 0===e||e.focus())}),[o,c.subscribeSuccess]);var u=function(){var e,t=(e=function*(e){var t,n;e.preventDefault();var r,a=null==l||null===(t=l.current)||void 0===t?void 0:t.value;if(0===a.length||!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return new RegExp(/^(?=^[\w!#$%&'*+/=?^`{|}~-]+(\.[\w!#$%&'*+/=?^`{|}~-]+)*@[\w[!#$%&'*+/=?^`{|}~-]+\.[\w!#$%&'*+/=?^`{|}~-]+(\.[\w\]!#$%&'*+/=?^`{|}~-]+)*$).{1,100}$/).test(e)}(a))return d({type:T,payload:{errorMessage:S}}),void(null==l||null===(r=l.current)||void 0===r||r.focus());var i,o=yield function(){return C.apply(this,arguments)}(a);"completed"!==(null==o||null===(n=o.state)||void 0===n?void 0:n.toLowerCase())?500===o.statusCode&&(d({type:T,payload:{errorMessage:o.statusMessage||S}}),null==l||null===(i=l.current)||void 0===i||i.focus()):d({type:O})},function(){var t=this,n=arguments;return new Promise((function(r,a){var i=e.apply(t,n);function l(e){R(i,r,a,l,o,"next",e)}function o(e){R(i,r,a,l,o,"throw",e)}l(void 0)}))});return function(e){return t.apply(this,arguments)}}();return t().createElement(t().Fragment,null,t().createElement("form",{noValidate:!0,className:"email-signup",onSubmit:u},t().createElement("h3",{className:"email-signup-label heading-6 ".concat(r?"v-fw-bold":"")},a),c.subscribeSuccess?t().createElement("p",{className:"email-signup-success v-text-success-green v-m-vertical-ss",tabIndex:"-1",ref:o},t().createElement(s.BrixIcon,{icon:"Checkmark_Confirm_Line_Sm",width:"1em",fill:s.successGreen}),t().createElement("span",{className:"v-m-left-xxs"},"Thanks!")):t().createElement("div",{className:"email-signup-inputs"},t().createElement(s.BrixFormInput,{id:"footer-email-signup",ref:l,size:"small",placeholder:"Enter email address",inputWrapperProps:{className:"v-m-vertical-ss"},className:"email-signup-input",displayName:"Email Address",required:!0,formLabelProps:{className:"sr-only",labelProps:{"data-testid":"form-label"}},validationProps:{error:c.hasError,message:c.errorMessage}}),t().createElement(s.BrixButton,{size:"small",buttonStyle:"secondary",type:"submit",className:"email-signup-button"},i||"Sign Up"))),t().createElement("hr",{role:"presentation","aria-hidden":"true"}))};function A(e){var{displayName:n,description:r}=e;return t().createElement("div",{className:"feedback-link-container"},t().createElement("span",{className:"v-m-right-xxs"},n),t().createElement(s.BrixButton,{className:"feedback-btn",buttonStyle:"link",onClick:e=>{var t=e||window.event||{returnValue:!1};t&&t.preventDefault&&t.preventDefault(),window.oo_feedback&&window.oo_feedback.show(t)}},r))}function V(e){var{iconNavigation:n=[]}=e;return t().createElement("ul",{className:"icon-navigation"},n.map(((e,n)=>t().createElement("li",{key:"icon-navigation-link-".concat(n),className:e._meta.omitFromMedium?"hidden-icon-link":""},t().createElement(q,{iconObject:e})))))}D.propTypes={bold:o().bool,displayName:o().string,description:o().string},A.propTypes={displayName:o().string,description:o().string},V.propTypes={iconNavigation:o().array};var q=e=>{var n,{iconObject:r}=e,{iconImage:a,link:i,displayName:l}=r;return t().createElement("div",{className:"icon-navigation-link-wrapper"},t().createElement("a",{className:"icon-navigation-link",href:i.url,"data-lid":i.lid},(null==a||null===(n=a.path)||void 0===n?void 0:n.length)>0&&t().createElement("div",{className:"icon-navigation-link-icon"},t().createElement(s.BrixIcon,{icon:null==a?void 0:a.path,fill:null==a?void 0:a.fillColor})),t().createElement("strong",null,l)))};function H(n){var{legalNavigation:r=[]}=n,{deviceClass:a}=(0,e.useContext)(k),i=e=>t=>t.styleId===e,l=r.find(i("feedback")),o=r.find(i("bby-ca")),s=r.find(i("legal-links")),c=r.find(i("disclaimer"));return t().createElement("div",{className:"legal-navigation"},t().createElement("div",{className:"feedback-device-redirect"},t().createElement(A,{displayName:null==l?void 0:l.displayName,description:null==l?void 0:l.description}),"s"===a&&t().createElement("hr",{role:"presentation","aria-hidden":"true"}),t().createElement("div",{className:"device-canada-container"},t().createElement(L,null),t().createElement(P,{displayName:null==o?void 0:o.displayName,link:null==o?void 0:o.link}))),"l"===a&&t().createElement(t().Fragment,null,t().createElement("hr",{role:"presentation","aria-hidden":"true"}),t().createElement(U,{childNodes:null==s?void 0:s.childNodes})),"s"===a&&t().createElement(Z,{childNodes:null==s?void 0:s.childNodes,displayName:null==s?void 0:s.displayName}),t().createElement("span",{className:"l"===a?"v-p-top-m":"v-p-top-s"},null==c?void 0:c.displayName))}q.propTypes={iconObject:o().object.isRequired},H.propTypes={legalNavigation:o().array};const z=_;var F=e=>e?e.match(/[A-Z]{2,}(?=[A-Z][a-z]+|\b)|[A-Z]?[a-z]+|[A-Z]|[0-9]+/g).join("-").toLowerCase():"",U=e=>{var{childNodes:n}=e;return t().createElement("div",{className:"legal-navigation-section"},Object.values(n).map((function(){var e,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,z.isEmpty)(n)?null:null!=n&&null!==(e=n.link)&&void 0!==e&&e.url?t().createElement("a",{key:F(n.displayName),href:n.link.url,"data-track":n.link.lid,target:n.link.openLinkInNewTab?"_blank":"_self",rel:"noreferrer"},n.displayName):null})))};U.propTypes={childNodes:o().objectOf(o().shape({link:o().shape({openInNewTab:o().bool,url:o().string,lid:o().string}),displayName:o().string})),displayName:o().string};var W=n=>{var{mainNavigation:r=[]}=n,{deviceClass:a}=(0,e.useContext)(k);return t().createElement("div",{className:"main-navigation"},r.map(((e,n)=>"s"===a?t().createElement(Z,{key:F(e.displayName),displayName:e.displayName,childNodes:e.childNodes}):t().createElement($,{key:F(e.displayName),id:"section-".concat(n+1),displayName:e.displayName,childNodes:e.childNodes}))))};W.propTypes={mainNavigation:o().array};var $=e=>{var{displayName:n="",childNodes:r={},id:a=""}=e;return t().createElement("div",{id:a},t().createElement("h3",{className:"navigation-section-heading"},n),t().createElement("ul",{className:"navigation-section-list"},Object.values(r).map(((e,n)=>t().createElement("li",{key:F(e.displayName)},t().createElement("a",{href:e.link.url,"data-lid":e.link.lid},e.displayName))))))};$.propTypes={displayName:o().string,id:o().string,childNodes:o().object};var Q=n=>{var r,a,i,l,o,s,{marketingNavigation:c=[]}=n,d=(0,e.useMemo)((()=>c.find((e=>"sign-in"===e.styleId))),[c]),u=(0,e.useMemo)((()=>c.find((e=>"email"===e.styleId))),[c]),p=(0,e.useMemo)((()=>c.find((e=>"bby-app"===e.styleId))),[c]),m=(0,e.useMemo)((()=>{var e=c.find((e=>"social"===e.styleId));return null!=e&&e.childNodes?Object.values(null==e?void 0:e.childNodes):[]}),[c]),v=(0,e.useMemo)((()=>c.find((e=>"forums"===e.styleId))),[c]);return t().createElement("div",{className:"marketing-navigation"},d&&t().createElement(t().Fragment,null,t().createElement("a",{className:"sign-in",href:null==d||null===(r=d.link)||void 0===r?void 0:r.url,"data-track":(null==d||null===(a=d.link)||void 0===a?void 0:a.lid)||"",target:null!=d&&null!==(i=d.link)&&void 0!==i&&i.openLinkInNewTab?"_blank":"_self",rel:"noreferrer"},null==d?void 0:d.displayName),t().createElement("hr",{role:"presentation","aria-hidden":"true"})),u&&t().createElement(D,{bold:null==u?void 0:u.bold,displayName:null==u?void 0:u.displayName,description:null==u?void 0:u.description}),p&&t().createElement(x,{displayName:null==p?void 0:p.displayName,description:null==p?void 0:p.description,iconImage:null==p?void 0:p.iconImage,link:null==p?void 0:p.link}),m&&t().createElement(J,{socialIconLinks:m}),v&&t().createElement("a",{className:"more-link",href:null==v||null===(l=v.link)||void 0===l?void 0:l.url,"data-track":null==v||null===(o=v.link)||void 0===o?void 0:o.lid,target:null!=v&&null!==(s=v.link)&&void 0!==s&&s.openLinkInNewTab?"_blank":"_self",rel:"noreferrer"},null==v?void 0:v.displayName))};Q.propTypes={marketingNavigation:o().array};var Z=n=>{var{displayName:r="",childNodes:a={}}=n,[i,l]=(0,e.useState)(!1);return t().createElement(s.BrixShowHide,{className:"dropdown-section ".concat(i?"open":""),id:F(r)},t().createElement(s.BrixSectionTitle,null,t().createElement("h3",{className:"dropdown-section-heading"},t().createElement(s.BrixShowHideTrigger,{contentId:F(r),onClick:()=>l(!i),isOpen:i},t().createElement("span",null,r),t().createElement("span",null,t().createElement("span",null,t().createElement(s.BrixIcon,{fill:"#0046be",width:16,height:16,icon:i?"Caret_Up_Line_Sm":"Caret_Down_Line_Sm"})))))),i?t().createElement("ul",{id:F(r),labelId:F(r)},Object.values(a).map(((e,n)=>t().createElement("li",{key:F(e.displayName)},t().createElement("a",{href:e.link.url,"data-lid":e.link.lid},e.displayName))))):null)};Z.propTypes={displayName:o().string,childNodes:o().object};var J=n=>{var{socialIconLinks:r=[]}=n,{deviceClass:a}=(0,e.useContext)(k),i="s"===a||!1;return r.length>0?t().createElement(t().Fragment,null,t().createElement("div",{className:"social-icons"},r.map((e=>{var n,r,a,l,o,c,d,u;return t().createElement("a",{key:null==e?void 0:e.displayName,className:"social-icon",href:i&&null!=e&&null!==(n=e.link)&&void 0!==n&&n.altUrl?null==e||null===(r=e.link)||void 0===r?void 0:r.altUrl:null==e||null===(a=e.link)||void 0===a?void 0:a.url,"data-track":null==e||null===(l=e.link)||void 0===l?void 0:l.lid,"aria-label":null==e||null===(o=e.iconImage)||void 0===o?void 0:o.altText,target:null!=e&&null!==(c=e.link)&&void 0!==c&&c.openLinkInNewTab?"_blank":"_self",rel:"noreferrer"},t().createElement(s.BrixIcon,{icon:null==e||null===(d=e.iconImage)||void 0===d?void 0:d.path,fill:null==e||null===(u=e.iconImage)||void 0===u?void 0:u.fillColor}))}))),t().createElement("hr",{role:"presentation","aria-hidden":"true"})):null};J.propTypes={socialIconLinks:o().arrayOf(o().shape({displayName:o().string,link:o().shape({url:o().string,lid:o().string,openLinkInNewTab:o().bool}),iconImage:o().shape({altText:o().string,path:o().string,fillColor:o().string})}))};var G=n(970);const K=JSON.parse('{"name":"@gvpc/footer","version":"1.7.13","license":"UNLICENSED","main":"dist/server/server.js","contributors":[{"name":"Pathfinder Atlas","email":"Pathfinder-Atlas@bestbuy.com"}],"scripts":{"analyzeBundle":"../../scripts/analyze-bundle.sh","build":"../../scripts/build.sh","build:stats":"NODE_ENV=production webpack --mode \'production\' --define process.env.NODE_ENV=\'production\' --profile --json > compilation-stats.json","clean":"rm -rf dist coverage","henry":"npx henry","lint":"eslint .","lint:fix":"eslint . --fix","test":"jest --coverage","prepare":"yarn build","start":"node --inspect-port=${INSPECTOR_PORT:-9229} --inspect dev-server"},"dependencies":{"@bestbuy/brix-web":"7.0.10","@gvp/lib-component-assets":"6.0.1","@gvp/lib-embedded-component":"3.1.2"},"files":["dist"],"gitHead":"7d320dfecfcddf0eecfb2c6b3415d829f1519621"}');window.performance.mark("Footer:client-js:App-Initialized");var{version:X}=K,Y={componentId:G.componentId,contractVersion:G.contractVersion,creatorNamespace:G.creatorNamespace,componentVersion:X};i().registerComponent(Y,((e,n,a)=>{(0,r.hydrate)(t().createElement(j,a),document.querySelector(n))}))})()})();
//# sourceMappingURL=client-cffd6cd017301424d5df6739df749f32.mjs.map