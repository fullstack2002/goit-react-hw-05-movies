"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[680],{672:function(n,t,e){e.d(t,{O:function(){return l}});e(791);var r,a,c=e(689),u=e(168),i=e(839),o=e(731),s=i.Z.ul(r||(r=(0,u.Z)(["\n  list-style: none;\n"]))),p=(0,i.Z)(o.OL)(a||(a=(0,u.Z)(["\n   padding: 10px;\n  text-decoration: none;\n  color: black;\n  &.active {\n    font-size: larger;\n    color: #cc0066;\n  }\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: #cc0066;\n  }\n"]))),f=e(184),l=function(n){var t=n.items,e=(0,c.TH)();return(0,f.jsx)(s,{children:null===t||void 0===t?void 0:t.map((function(n){var t=n.id,r=n.title,a=n.name;return(0,f.jsx)("li",{children:(0,f.jsx)(p,{to:"/movies/".concat(t),state:{from:e},children:r||a})},t)}))})}},680:function(n,t,e){e.r(t);var r=e(982),a=e(861),c=e(885),u=e(757),i=e.n(u),o=e(791),s=e(672),p=e(637),f=e(409),l=e(184);t.default=function(){var n=(0,o.useState)([]),t=(0,c.Z)(n,2),e=t[0],u=t[1],d=(0,o.useState)(null),v=(0,c.Z)(d,2),h=v[0],x=v[1];(0,o.useEffect)((function(){var n=function(){var n=(0,a.Z)(i().mark((function n(){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,f.wr)();case 3:t=n.sent,u((0,r.Z)(t)),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),x(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]);var m=0!==e.length;return(0,l.jsxs)(p.b1,{children:[!h&&(0,l.jsx)(p.Dx,{children:"Trending today"}),h&&(0,l.jsx)(p.lt,{children:"Sorry, the page is not available at the moment"}),m&&(0,l.jsx)(s.O,{items:e})]})}},637:function(n,t,e){e.d(t,{Dx:function(){return o},b1:function(){return s},lt:function(){return p}});var r,a,c,u=e(168),i=e(839),o=i.Z.h1(r||(r=(0,u.Z)(["\n  margin: 0;\n  font-size: 40px;\n  padding: 10px;\n  color: #3131ac;\n"]))),s=i.Z.div(a||(a=(0,u.Z)(["\n  padding: 20px;\n"]))),p=i.Z.p(c||(c=(0,u.Z)(["\n  margin: 30px;\n  font-size: 20px;\n"])))},409:function(n,t,e){e.d(t,{Hx:function(){return m},Y5:function(){return d},uV:function(){return h},wr:function(){return s},y_:function(){return f}});var r=e(861),a=e(757),c=e.n(a),u=e(44),i="c2adf4092a83a2e23791f3f570392dbd",o="https://api.themoviedb.org/3/";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"trending/all/day?api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/credits?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return Z.apply(this,arguments)}function Z(){return(Z=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("".concat(o,"movie/").concat(t,"/reviews?api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=680.bf59b72a.chunk.js.map