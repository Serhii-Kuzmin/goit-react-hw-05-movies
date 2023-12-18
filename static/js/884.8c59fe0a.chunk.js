"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[884],{1454:function(e,n,t){t.d(n,{a:function(){return s}});var r,c=t(2598),a=t(168),i=t(5867).ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  margin-top: 150px;\n"]))),o=t(184),s=function(){return(0,o.jsx)(i,{children:(0,o.jsx)(c.Z1,{height:"150",width:"150",color:"#4fa94d",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"three-circles-rotating",outerCircleColor:"",innerCircleColor:"",middleCircleColor:""})})}},2884:function(e,n,t){t.r(n);var r=t(9439),c=t(1454),a=t(2791),i=t(7689),o=t(1087),s=t(4390),u=t(5558),l=t(184);n.default=function(){var e,n,t=(0,i.UO)().movieId,p=(0,a.useState)(!0),f=(0,r.Z)(p,2),h=f[0],d=f[1],x=(0,a.useState)(null),v=(0,r.Z)(x,2),w=v[0],j=v[1],m=(0,i.TH)(),g=(0,a.useRef)(null!==(e=null===(n=m.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/movies");if((0,a.useEffect)((function(){t&&(0,s.Y5)("/movie",t).then((function(e){j(e)})).catch(s.NI).finally((function(){return d(!1)}))}),[t]),w){var y=w.poster_path,b=w.title,k=w.original_title,Z=w.release_date,_=w.genres,C=w.vote_average,S=w.overview;return(0,l.jsxs)(u.dE,{children:[(0,l.jsx)(u.Fg,{to:g.current,children:"GO BACK"}),(0,l.jsx)("h2",{children:"Movie Details:"}),h&&(0,l.jsx)(c.a,{}),w&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(u.O2,{children:[(0,l.jsx)("img",{src:y?"http://image.tmdb.org/t/p/w342".concat(y):"https://www.braasco.com//ASSETS/IMAGES/ITEMS/ZOOM/no_image.jpeg",alt:b,width:"200"}),(0,l.jsxs)(u.UE,{children:[(0,l.jsx)("h3",{children:k}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Release date:"})," ",Z]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Genres:"})," ",_.map((function(e){var n=e.name;return"".concat(n.toLowerCase()," | ")}))]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Ranking:"})," ",C]}),(0,l.jsxs)("p",{children:[(0,l.jsx)("b",{children:"Overview:"})," ",S]})]})]}),(0,l.jsx)("h3",{children:"Additional information:"}),(0,l.jsxs)(u.Z,{children:[(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"reviews",children:"Reviews"})})]}),(0,l.jsx)(a.Suspense,{fallback:(0,l.jsx)("div",{children:"Loading..."}),children:(0,l.jsx)(i.j3,{})})]})]})}}},4390:function(e,n,t){t.d(n,{Hx:function(){return m},NI:function(){return y},Pu:function(){return l},Y5:function(){return x},bI:function(){return h},uV:function(){return w},vw:function(){return p}});var r=t(5861),c=t(7757),a=t.n(c),i=t(5294),o=t(1686),s="https://api.themoviedb.org/3",u="3f29e277b19fc95c68f9d05af1b05d52",l={position:"center-center",timeout:3e3,width:"400px",fontSize:"24px"};function p(e){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function e(n){var t,r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="".concat(s).concat(n,"?api_key=").concat(u),e.next=3,i.Z.get(t);case 3:return r=e.sent,e.abrupt("return",r.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e,n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function e(n,t){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s).concat(n,"?api_key=").concat(u,"&query=").concat(t),e.next=3,i.Z.get(r);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e,n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function e(n,t){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s).concat(n,"/").concat(t,"?api_key=").concat(u),e.next=3,i.Z.get(r);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e,n){return j.apply(this,arguments)}function j(){return(j=(0,r.Z)(a().mark((function e(n,t){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s).concat(n,"/").concat(t,"/credits?api_key=").concat(u),e.next=3,i.Z.get(r);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,n){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function e(n,t){var r,c;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(s).concat(n,"/").concat(t,"/reviews?api_key=").concat(u),e.next=3,i.Z.get(r);case 3:return c=e.sent,e.abrupt("return",c.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(){o.Notify.failure("Oops! Something went wrong! Try reloading the page or make another choice!",l)}}}]);
//# sourceMappingURL=884.8c59fe0a.chunk.js.map