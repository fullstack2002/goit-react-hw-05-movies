"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[514],{672:function(e,t,n){n.d(t,{O:function(){return d}});n(791);var r,o,a=n(689),i=n(168),s=n(839),c=n(731),u=s.Z.ul(r||(r=(0,i.Z)(["\n  list-style: none;\n"]))),l=(0,s.Z)(c.OL)(o||(o=(0,i.Z)(["\n   padding: 10px;\n  text-decoration: none;\n  color: black;\n  &.active {\n    font-size: larger;\n    color: #cc0066;\n  }\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: #cc0066;\n  }\n"]))),f=n(184),d=function(e){var t=e.items,n=(0,a.TH)();return(0,f.jsx)(u,{children:null===t||void 0===t?void 0:t.map((function(e){var t=e.id,r=e.title,o=e.name;return(0,f.jsx)("li",{children:(0,f.jsx)(l,{to:"/movies/".concat(t),state:{from:n},children:r||o})},t)}))})}},637:function(e,t,n){n.d(t,{Dx:function(){return c},b1:function(){return u},lt:function(){return l}});var r,o,a,i=n(168),s=n(839),c=s.Z.h1(r||(r=(0,i.Z)(["\n  margin: 0;\n  font-size: 40px;\n  color: #862d59;\n"]))),u=s.Z.div(o||(o=(0,i.Z)(["\n  color: tomato;\n"]))),l=s.Z.p(a||(a=(0,i.Z)(["\n  margin: 30px;\n  font-size: 20px;\n"])))},514:function(e,t,n){n.r(t),n.d(t,{default:function(){return re}});var r=n(982),o=n(861),a=n(885),i=n(757),s=n.n(i),c=n(791),u=n(731);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function m(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=m(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}var v=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=m(e))&&(r&&(r+=" "),r+=t);return r},g=["theme","type"],y=["delay","staleId"];function h(e){return"number"===typeof e&&!isNaN(e)}function b(e){return"boolean"===typeof e}function T(e){return"string"===typeof e}function E(e){return"function"===typeof e}function O(e){return T(e)||E(e)?e:null}function _(e){return null!=e}function C(e){return(0,c.isValidElement)(e)||T(e)||E(e)||h(e)}var x={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},I={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"};function w(e){var t=e.enter,n=e.exit,o=e.appendPosition,a=void 0!==o&&o,i=e.collapse,s=void 0===i||i,u=e.collapseDuration,l=void 0===u?300:u;return function(e){var o=e.children,i=e.position,u=e.preventExitTransition,f=e.done,d=e.nodeRef,p=e.isIn,m=a?t+"--"+i:t,v=a?n+"--"+i:n,g=(0,c.useRef)(0);return(0,c.useLayoutEffect)((function(){var e=d.current,t=m.split(" "),n=function n(o){var a;o.target===d.current&&(e.dispatchEvent(new Event("d")),e.removeEventListener("animationend",n),e.removeEventListener("animationcancel",n),0===g.current&&"animationcancel"!==o.type&&(a=e.classList).remove.apply(a,(0,r.Z)(t)))};!function(){var o;(o=e.classList).add.apply(o,(0,r.Z)(t)),e.addEventListener("animationend",n),e.addEventListener("animationcancel",n)}()}),[]),(0,c.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var r=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=r+"px",o.transition="all "+n+"ms",requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,f,l):f()};p||(u?t():(g.current=1,e.className+=" "+v,e.addEventListener("animationend",t)))}),[p]),c.createElement(c.Fragment,null,o)}}function L(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var k={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(o){var a=setTimeout((function(){o.apply(void 0,(0,r.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(a)}))}},P=function(e){var t=e.theme,n=e.type,r=p(e,g);return c.createElement("svg",d({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-"+n+")"},r))};var R={info:function(e){return c.createElement(P,d({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return c.createElement(P,d({},e),c.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return c.createElement(P,d({},e),c.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return c.createElement(P,d({},e),c.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return c.createElement("div",{className:"Toastify__spinner"})}};function N(e){var t=e.theme,n=e.type,r=e.isLoading,o=e.icon,a=null,i={theme:t,type:n};return!1===o||(E(o)?a=o(i):(0,c.isValidElement)(o)?a=(0,c.cloneElement)(o,i):T(o)||h(o)?a=o:r?a=R.spinner():function(e){return e in R}(n)&&(a=R[n](i))),a}function S(e){var t=(0,c.useReducer)((function(e){return e+1}),0),n=(0,a.Z)(t,2)[1],o=(0,c.useState)([]),i=(0,a.Z)(o,2),s=i[0],u=i[1],l=(0,c.useRef)(null),f=(0,c.useRef)(new Map).current,d=function(e){return-1!==s.indexOf(e)},m=(0,c.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return f.get(e)}}).current;function v(e){var t=e.containerId;!m.props.limit||t&&m.containerId!==t||(m.count-=m.queue.length,m.queue=[])}function g(e){u((function(t){return _(e)?t.filter((function(t){return t!==e})):[]}))}function x(){var e=m.queue.shift();w(e.toastContent,e.toastProps,e.staleId)}function I(e,t){var r=t.delay,o=t.staleId,a=p(t,y);if(C(e)&&!function(e){return!l.current||m.props.enableMultiContainer&&e.containerId!==m.props.containerId||f.has(e.toastId)&&null==e.updateId}(a)){var i=a.toastId,s=a.updateId,u=a.data,d=m.props,v=function(){return g(i)},I=null==s;I&&m.count++;var P,R,S={toastId:i,updateId:s,data:u,containerId:a.containerId,isLoading:a.isLoading,theme:a.theme||d.theme,icon:null!=a.icon?a.icon:d.icon,isIn:!1,key:a.key||m.toastKey++,type:a.type,closeToast:v,closeButton:a.closeButton,rtl:d.rtl,position:a.position||d.position,transition:a.transition||d.transition,className:O(a.className||d.toastClassName),bodyClassName:O(a.bodyClassName||d.bodyClassName),style:a.style||d.toastStyle,bodyStyle:a.bodyStyle||d.bodyStyle,onClick:a.onClick||d.onClick,pauseOnHover:b(a.pauseOnHover)?a.pauseOnHover:d.pauseOnHover,pauseOnFocusLoss:b(a.pauseOnFocusLoss)?a.pauseOnFocusLoss:d.pauseOnFocusLoss,draggable:b(a.draggable)?a.draggable:d.draggable,draggablePercent:a.draggablePercent||d.draggablePercent,draggableDirection:a.draggableDirection||d.draggableDirection,closeOnClick:b(a.closeOnClick)?a.closeOnClick:d.closeOnClick,progressClassName:O(a.progressClassName||d.progressClassName),progressStyle:a.progressStyle||d.progressStyle,autoClose:!a.isLoading&&(P=a.autoClose,R=d.autoClose,!1===P||h(P)&&P>0?P:R),hideProgressBar:b(a.hideProgressBar)?a.hideProgressBar:d.hideProgressBar,progress:a.progress,role:a.role||d.role,deleteToast:function(){var e=L(f.get(i),"removed");f.delete(i),k.emit(4,e);var t=m.queue.length;if(m.count=_(i)?m.count-1:m.count-m.displayedToast,m.count<0&&(m.count=0),t>0){var r=_(i)?1:m.props.limit;if(1===t||1===r)m.displayedToast++,x();else{var o=r>t?t:r;m.displayedToast=o;for(var a=0;a<o;a++)x()}}else n()}};S.iconOut=N(S),E(a.onOpen)&&(S.onOpen=a.onOpen),E(a.onClose)&&(S.onClose=a.onClose),S.closeButton=d.closeButton,!1===a.closeButton||C(a.closeButton)?S.closeButton=a.closeButton:!0===a.closeButton&&(S.closeButton=!C(d.closeButton)||d.closeButton);var Z=e;(0,c.isValidElement)(e)&&!T(e.type)?Z=(0,c.cloneElement)(e,{closeToast:v,toastProps:S,data:u}):E(e)&&(Z=e({closeToast:v,toastProps:S,data:u})),d.limit&&d.limit>0&&m.count>d.limit&&I?m.queue.push({toastContent:Z,toastProps:S,staleId:o}):h(r)?setTimeout((function(){w(Z,S,o)}),r):w(Z,S,o)}}function w(e,t,n){var o=t.toastId;n&&f.delete(n);var a={content:e,props:t};f.set(o,a),u((function(e){return[].concat((0,r.Z)(e),[o]).filter((function(e){return e!==n}))})),k.emit(4,L(a,null==a.props.updateId?"added":"updated"))}return(0,c.useEffect)((function(){return m.containerId=e.containerId,k.cancelEmit(3).on(0,I).on(1,(function(e){return l.current&&g(e)})).on(5,v).emit(2,m),function(){f.clear(),k.emit(3,m)}}),[]),(0,c.useEffect)((function(){m.props=e,m.isToastActive=d,m.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,r=Array.from(f.values());return e.newestOnTop&&r.reverse(),r.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:l,isToastActive:d}}function Z(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function D(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function j(e){var t=(0,c.useState)(!1),n=(0,a.Z)(t,2),r=n[0],o=n[1],i=(0,c.useState)(!1),s=(0,a.Z)(i,2),u=s[0],l=s[1],f=(0,c.useRef)(null),d=(0,c.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,p=(0,c.useRef)(e),m=e.autoClose,v=e.pauseOnHover,g=e.closeToast,y=e.onClick,h=e.closeOnClick;function b(t){if(e.draggable){d.didMove=!1,document.addEventListener("mousemove",C),document.addEventListener("mouseup",x),document.addEventListener("touchmove",C),document.addEventListener("touchend",x);var n=f.current;d.canCloseOnClick=!0,d.canDrag=!0,d.boundingRect=n.getBoundingClientRect(),n.style.transition="",d.x=Z(t.nativeEvent),d.y=D(t.nativeEvent),"x"===e.draggableDirection?(d.start=d.x,d.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(d.start=d.y,d.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function T(){if(d.boundingRect){var t=d.boundingRect,n=t.top,r=t.bottom,o=t.left,a=t.right;e.pauseOnHover&&d.x>=o&&d.x<=a&&d.y>=n&&d.y<=r?_():O()}}function O(){o(!0)}function _(){o(!1)}function C(t){var n=f.current;d.canDrag&&n&&(d.didMove=!0,r&&_(),d.x=Z(t),d.y=D(t),"x"===e.draggableDirection?d.delta=d.x-d.start:d.delta=d.y-d.start,d.start!==d.x&&(d.canCloseOnClick=!1),n.style.transform="translate"+e.draggableDirection+"("+d.delta+"px)",n.style.opacity=""+(1-Math.abs(d.delta/d.removalDistance)))}function x(){document.removeEventListener("mousemove",C),document.removeEventListener("mouseup",x),document.removeEventListener("touchmove",C),document.removeEventListener("touchend",x);var t=f.current;if(d.canDrag&&d.didMove&&t){if(d.canDrag=!1,Math.abs(d.delta)>d.removalDistance)return l(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate"+e.draggableDirection+"(0)",t.style.opacity="1"}}(0,c.useEffect)((function(){p.current=e})),(0,c.useEffect)((function(){return f.current&&f.current.addEventListener("d",O,{once:!0}),E(e.onOpen)&&e.onOpen((0,c.isValidElement)(e.children)&&e.children.props),function(){var e=p.current;E(e.onClose)&&e.onClose((0,c.isValidElement)(e.children)&&e.children.props)}}),[]),(0,c.useEffect)((function(){return e.pauseOnFocusLoss&&function(){document.hasFocus()||_();window.addEventListener("focus",O),window.addEventListener("blur",_)}(),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",O),window.removeEventListener("blur",_))}}),[e.pauseOnFocusLoss]);var I={onMouseDown:b,onTouchStart:b,onMouseUp:T,onTouchEnd:T};return m&&v&&(I.onMouseEnter=_,I.onMouseLeave=O),h&&(I.onClick=function(e){y&&y(e),d.canCloseOnClick&&g()}),{playToast:O,pauseToast:_,isRunning:r,preventExitTransition:u,toastRef:f,eventHandlers:I}}function B(e){var t=e.closeToast,n=e.theme,r=e.ariaLabel,o=void 0===r?"close":r;return c.createElement("button",{className:"Toastify__close-button Toastify__close-button--"+n,type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},c.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},c.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function M(e){var t=e.delay,n=e.isRunning,r=e.closeToast,o=e.type,a=e.hide,i=e.className,s=e.style,u=e.controlledProgress,f=e.progress,p=e.rtl,m=e.isIn,g=e.theme,y=d(d({},s),{},{animationDuration:t+"ms",animationPlayState:n?"running":"paused",opacity:a?0:1});u&&(y.transform="scaleX("+f+")");var h=v("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--"+g,"Toastify__progress-bar--"+o,l({},"Toastify__progress-bar--rtl",p)),b=E(i)?i({rtl:p,type:o,defaultClassName:h}):v(h,i),T=l({},u&&f>=1?"onTransitionEnd":"onAnimationEnd",u&&f<1?null:function(){m&&r()});return c.createElement("div",d({role:"progressbar","aria-hidden":a?"true":"false","aria-label":"notification timer",className:b,style:y},T))}M.defaultProps={type:I.DEFAULT,hide:!1};var A=function(e){var t=j(e),n=t.isRunning,r=t.preventExitTransition,o=t.toastRef,a=t.eventHandlers,i=e.closeButton,s=e.children,u=e.autoClose,f=e.onClick,p=e.type,m=e.hideProgressBar,g=e.closeToast,y=e.transition,h=e.position,b=e.className,T=e.style,O=e.bodyClassName,_=e.bodyStyle,C=e.progressClassName,x=e.progressStyle,I=e.updateId,w=e.role,L=e.progress,k=e.rtl,P=e.toastId,R=e.deleteToast,N=e.isIn,S=e.isLoading,Z=e.iconOut,D=e.theme,A=v("Toastify__toast","Toastify__toast-theme--"+D,"Toastify__toast--"+p,l({},"Toastify__toast--rtl",k)),F=E(b)?b({rtl:k,position:h,type:p,defaultClassName:A}):v(A,b),z=!!L,H={closeToast:g,type:p,theme:D},q=null;return!1===i||(q=E(i)?i(H):c.isValidElement(i)?c.cloneElement(i,H):B(H)),c.createElement(y,{isIn:N,done:R,position:h,preventExitTransition:r,nodeRef:o},c.createElement("div",d(d({id:P,onClick:f,className:F},a),{},{style:T,ref:o}),c.createElement("div",d(d({},N&&{role:w}),{},{className:E(O)?O({type:p}):v("Toastify__toast-body",O),style:_}),null!=Z&&c.createElement("div",{className:v("Toastify__toast-icon",l({},"Toastify--animate-icon Toastify__zoom-enter",!S))},Z),c.createElement("div",null,s)),q,(u||z)&&c.createElement(M,d(d({},I&&!z?{key:"pb-"+I}:{}),{},{rtl:k,theme:D,delay:u,isRunning:n,isIn:N,closeToast:g,hide:m,type:p,style:x,className:C,controlledProgress:z,progress:L}))))},F=w({enter:"Toastify--animate Toastify__bounce-enter",exit:"Toastify--animate Toastify__bounce-exit",appendPosition:!0}),z=(w({enter:"Toastify--animate Toastify__slide-enter",exit:"Toastify--animate Toastify__slide-exit",appendPosition:!0}),w({enter:"Toastify--animate Toastify__zoom-enter",exit:"Toastify--animate Toastify__zoom-exit"}),w({enter:"Toastify--animate Toastify__flip-enter",exit:"Toastify--animate Toastify__flip-exit"}),(0,c.forwardRef)((function(e,t){var n=S(e),r=n.getToastToRender,o=n.containerRef,a=n.isToastActive,i=e.className,s=e.style,u=e.rtl,f=e.containerId;function p(e){var t=v("Toastify__toast-container","Toastify__toast-container--"+e,l({},"Toastify__toast-container--rtl",u));return E(i)?i({position:e,rtl:u,defaultClassName:t}):v(t,O(i))}return(0,c.useEffect)((function(){t&&(t.current=o.current)}),[]),c.createElement("div",{ref:o,className:"Toastify",id:f},r((function(e,t){var n=t.length?d({},s):d(d({},s),{},{pointerEvents:"none"});return c.createElement("div",{className:p(e),style:n,key:"container-"+e},t.map((function(e,n){var r=e.content,o=e.props;return c.createElement(A,d(d({},o),{},{isIn:a(o.toastId),style:d(d({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-"+o.key}),r)})))})))})));z.displayName="ToastContainer",z.defaultProps={position:x.TOP_RIGHT,transition:F,rtl:!1,autoClose:5e3,hideProgressBar:!1,closeButton:B,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,newestOnTop:!1,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var H,q=new Map,U=[];function Q(){return Math.random().toString(36).substring(2,9)}function V(e){return e&&(T(e.toastId)||h(e.toastId))?e.toastId:Q()}function G(e,t){return q.size>0?k.emit(0,e,t):U.push({content:e,options:t}),t.toastId}function W(e,t){return d(d({},t),{},{type:t&&t.type||e,toastId:V(t)})}function Y(e){return function(t,n){return G(t,W(e,n))}}function X(e,t){return G(e,W(I.DEFAULT,t))}X.loading=function(e,t){return G(e,W(I.DEFAULT,d({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},X.promise=function(e,t,n){var r,o=t.pending,a=t.error,i=t.success;o&&(r=T(o)?X.loading(o,n):X.loading(o.render,d(d({},n),o)));var s={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},c=function(e,t,o){if(null!=t){var a=d(d(d({type:e},s),n),{},{data:o}),i=T(t)?{render:t}:t;return r?X.update(r,d(d({},a),i)):X(i.render,d(d({},a),i)),o}X.dismiss(r)},u=E(e)?e():e;return u.then((function(e){return c("success",i,e)})).catch((function(e){return c("error",a,e)})),u},X.success=Y(I.SUCCESS),X.info=Y(I.INFO),X.error=Y(I.ERROR),X.warning=Y(I.WARNING),X.warn=X.warning,X.dark=function(e,t){return G(e,W(I.DEFAULT,d({theme:"dark"},t)))},X.dismiss=function(e){q.size>0?k.emit(1,e):U=U.filter((function(t){return _(e)&&t.options.toastId!==e}))},X.clearWaitingQueue=function(e){return void 0===e&&(e={}),k.emit(5,e)},X.isActive=function(e){var t=!1;return q.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},X.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,r=q.get(n||H);return r?r.getToast(e):null}(e,t);if(n){var r=n.props,o=n.content,a=d(d(d({},r),t),{},{toastId:t.toastId||e,updateId:Q()});a.toastId!==e&&(a.staleId=e);var i=a.render||o;delete a.render,G(i,a)}}),0)},X.done=function(e){X.update(e,{progress:1})},X.onChange=function(e){return k.on(4,e),function(){k.off(4,e)}},X.POSITION=x,X.TYPE=I,k.on(2,(function(e){H=e.containerId||e,q.set(H,e),U.forEach((function(e){k.emit(0,e.content,e.options)})),U=[]})).on(3,(function(e){q.delete(e.containerId||e),0===q.size&&k.off(0).off(1).off(5)}));var K=n(409),J=n(672),$=n(784),ee=n(184),te=function(e){var t=e.value,n=e.onSubmit,r=(0,c.useState)(t),o=(0,a.Z)(r,2),i=o[0],s=o[1];return(0,ee.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""===i.trim()&&X("Enter your search query :)"),n(i.trim())},children:[(0,ee.jsx)("input",{onChange:function(e){s(e.target.value)},type:"text",name:"searchInput",value:i,autoComplete:"off",autoFocus:!0,placeholder:"Search movies"}),(0,ee.jsx)("button",{type:"submit",children:"Search"})]})},ne=n(637),re=function(){var e,t=(0,c.useState)([]),n=(0,a.Z)(t,2),i=n[0],l=n[1],f=(0,u.lr)(),d=(0,a.Z)(f,2),p=d[0],m=d[1],v=(0,c.useState)(!1),g=(0,a.Z)(v,2),y=g[0],h=g[1],b=(0,c.useState)(null),T=(0,a.Z)(b,2),E=T[0],O=T[1],_=null!==(e=p.get("query"))&&void 0!==e?e:"";(0,c.useEffect)((function(){if(""!==_){var e=function(){var e=(0,o.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return h(!0),e.prev=1,e.next=4,(0,K.y_)(_);case 4:if(0!==(t=e.sent).length){e.next=8;break}return l([]),e.abrupt("return",X("Sorry, we hadn't found movies for \"".concat(_,'", please, enter another query :)')));case 8:l((0,r.Z)(t)),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),O(e.t0);case 14:return e.prev=14,h(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();e()}}),[_]);var C=i.length>0;return(0,ee.jsxs)(ne.b1,{children:[(0,ee.jsx)(te,{onSubmit:function(e){m(""!==e?{query:e}:{})},value:_}),y&&(0,ee.jsx)($.a,{}),E&&(0,ee.jsx)(ne.lt,{children:"Oops! Something went wrong :( Please, reload page and try again"}),C&&(0,ee.jsx)(J.O,{items:i})]})}},409:function(e,t,n){n.d(t,{Hx:function(){return y},Y5:function(){return p},uV:function(){return v},wr:function(){return u},y_:function(){return f}});var r=n(861),o=n(757),a=n.n(o),i=n(44),s="c2adf4092a83a2e23791f3f570392dbd",c="https://api.themoviedb.org/3/";function u(){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function e(){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"trending/all/day?api_key=").concat(s));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"search/movie?api_key=").concat(s,"&query=").concat(t));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"movie/").concat(t,"?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function v(e){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"movie/").concat(t,"/credits?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.cast);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function e(t){var n;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.Z.get("".concat(c,"movie/").concat(t,"/reviews?api_key=").concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=514.146e7ea8.chunk.js.map