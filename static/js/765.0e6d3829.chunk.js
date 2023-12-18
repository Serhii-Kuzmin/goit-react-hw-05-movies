"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[765],{1454:function(n,t,e){e.d(t,{a:function(){return u}});var r,i=e(2598),a=e(168),o=e(5867).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-top: 150px;\n"]))),c=e(184),u=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(i.Z1,{height:"150",width:"150",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},6368:function(n,t,e){var r=e(7689),i=e(1087),a=e(1544),o=e(184);t.Z=function(n){var t=n.films,e=(0,r.TH)();return(0,o.jsx)(a.c0,{children:t.map((function(n){var t=n.id,r=n.title,c=n.overview,u=n.poster_path;return(0,o.jsx)(a.iH,{children:(0,o.jsxs)(i.rU,{to:"/movies/".concat(t),state:{from:e},children:[(0,o.jsx)("img",{src:u?"http://image.tmdb.org/t/p/w154".concat(u):"https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg",alt:r,width:"154",height:"231"}),(0,o.jsxs)(a.$j,{children:[(0,o.jsx)("h3",{children:r}),(0,o.jsx)("p",{children:c})]})]})},t)}))})}},1544:function(n,t,e){e.d(t,{$j:function(){return s},c0:function(){return u},iH:function(){return p}});var r,i,a,o=e(168),c=e(5867),u=c.ZP.ul(r||(r=(0,o.Z)(["\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 100px;\n"]))),p=c.ZP.li(i||(i=(0,o.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 5px;\n  width: 154px;\n  max-height: 400px;\n  cursor: pointer;\n  overflow: hidden;\n"]))),s=c.ZP.div(a||(a=(0,o.Z)(["\n  min-height: 169px;\n  display: flex;\n  gap: 5px;\n  flex-direction: column;\n"])))},2765:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,i,a,o,c=e(9439),u=e(1454),p=e(6368),s=e(168),f=e(5867),l=f.ZP.header(r||(r=(0,s.Z)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #b7cabc;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]))),d=f.ZP.form(i||(i=(0,s.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 5px;\n  overflow: hidden;\n"]))),x=f.ZP.button(a||(a=(0,s.Z)(["\n  display: inline-block;\n  padding: 10px 20px;\n  font-size: 16px;\n  text-align: center;\n  text-decoration: none;\n  background-color: #4caf50;\n  color: #ffffff;\n  border: none;\n  border-radius: 5px;\n  cursor: pointer;\n  transition: background-color 0.3s, box-shadow 0.3s;\n  &:hover {\n    background-color: #45a049;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  }\n"]))),h=f.ZP.input(o||(o=(0,s.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 10px;\n  padding-right: 10px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),g=e(184),m=function(n){var t=n.onSubmitSearchBar,e=n.value;return(0,g.jsx)(l,{children:(0,g.jsxs)(d,{onSubmit:t,children:[(0,g.jsx)(x,{children:(0,g.jsx)("span",{children:"Search"})}),(0,g.jsx)(h,{type:"text",name:"search",autoComplete:"off",autoFocus:!0,defaultValue:e,placeholder:"Search movies"})]})})},b=e(1686),v=e(2791),w=e(1087),y=e(4390),Z=e(5558),j=function(){var n,t=(0,v.useState)(!1),e=(0,c.Z)(t,2),r=e[0],i=e[1],a=(0,v.useState)([]),o=(0,c.Z)(a,2),s=o[0],f=o[1],l=(0,w.lr)(),d=(0,c.Z)(l,2),x=d[0],h=d[1],j=null!==(n=x.get("query"))&&void 0!==n?n:"";(0,v.useEffect)((function(){""!==j&&(s.length>0||(i(!0),(0,y.bI)("/search/movie",j).then((function(n){f(n.results)})).catch(y.NI).finally((function(){return i(!1)}))))}),[s,j]);return(0,g.jsxs)("div",{children:[(0,g.jsx)(m,{onSubmitSearchBar:function(n){n.preventDefault();var t=n.currentTarget.search.value.trim().toLowerCase().split(" ").join("+");if(""===t)return b.Notify.info("Enter your request, please!",y.Pu),h({}),void f([]);t!==j?(h({query:t}),f([])):b.Notify.info("Enter new request, please!",y.Pu)},value:j}),(0,g.jsxs)(Z.dE,{children:[r&&(0,g.jsx)(u.a,{}),(0,g.jsx)(p.Z,{films:s})]})]})}},4390:function(n,t,e){e.d(t,{Hx:function(){return v},NI:function(){return y},Pu:function(){return s},Y5:function(){return h},bI:function(){return d},uV:function(){return m},vw:function(){return f}});var r=e(5861),i=e(7757),a=e.n(i),o=e(5294),c=e(1686),u="https://api.themoviedb.org/3",p="3f29e277b19fc95c68f9d05af1b05d52",s={position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"};function f(n){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function n(t){var e,r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e="".concat(u).concat(t,"?api_key=").concat(p),n.next=3,o.Z.get(e);case 3:return r=n.sent,n.abrupt("return",r.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function d(n,t){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(t,"?api_key=").concat(p,"&query=").concat(e),n.next=3,o.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n,t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(t,"/").concat(e,"?api_key=").concat(p),n.next=3,o.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n,t){return b.apply(this,arguments)}function b(){return(b=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(t,"/").concat(e,"/credits?api_key=").concat(p),n.next=3,o.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n,t){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function n(t,e){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(u).concat(t,"/").concat(e,"/reviews?api_key=").concat(p),n.next=3,o.Z.get(r);case 3:return i=n.sent,n.abrupt("return",i.data);case 5:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function y(){c.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",s)}}}]);
//# sourceMappingURL=765.0e6d3829.chunk.js.map