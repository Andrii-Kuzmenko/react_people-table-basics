(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(11),a=c(5),r=(c(21),c(22),c(2)),s=c(6),i=c.n(s),j=(c(23),c(8)),l=c(12),o=c(9),b=c(4),h=c(0),d=c.n(h);function u(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}c(24);var O=c(1),x=function(){return Object(O.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(O.jsx)("div",{className:"Loader__content"})})},m=d.a.memo((function(e){var t=e.person,c=t.name,n=t.slug,r=t.sex;return Object(O.jsx)(a.b,{className:i()({"has-text-danger":"f"===r}),to:"../".concat(n),children:c})})),p=d.a.memo((function(e){var t,c=e.person,n=e.slug,a=c.sex,r=c.born,s=c.died,j=c.mother,l=c.father,o=c.motherName,b=c.fatherName;return Object(O.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":(t=c,t.slug===n)}),children:[Object(O.jsx)("td",{children:Object(O.jsx)(m,{person:c})}),Object(O.jsx)("td",{children:a}),Object(O.jsx)("td",{children:r}),Object(O.jsx)("td",{children:s}),Object(O.jsx)("td",{children:j?Object(O.jsx)(m,{person:j}):o||"-"}),Object(O.jsx)("td",{children:l?Object(O.jsx)(m,{person:l}):b||"-"})]})})),f=d.a.memo((function(){var e=Object(h.useState)(!1),t=Object(b.a)(e,2),c=t[0],n=t[1],a=Object(h.useState)(!1),s=Object(b.a)(a,2),i=s[0],d=s[1],m=Object(h.useState)([]),f=Object(b.a)(m,2),v=f[0],g=f[1],N=Object(r.h)().slug,y=void 0===N?"":N,w=function(e,t){return t.find((function(t){return t.name===e}))},k=function(e){return e.map((function(t){return Object(o.a)(Object(o.a)({},t),{},{mother:w(t.motherName,e),father:w(t.fatherName,e)})}))},P=function(){var e=Object(l.a)(Object(j.a)().mark((function e(){var t;return Object(j.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),e.prev=1,e.next=4,u();case 4:t=e.sent,g(k(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),d(!0);case 11:return e.prev=11,n(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();return Object(h.useEffect)((function(){P()}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("h1",{className:"title",children:"People Page"}),Object(O.jsx)("div",{className:"block",children:Object(O.jsxs)("div",{className:"box table-container",children:[c&&Object(O.jsx)(x,{}),i&&Object(O.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!v.length&&!c&&!i&&Object(O.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),!!v.length&&!c&&Object(O.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(O.jsx)("thead",{children:Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"Name"}),Object(O.jsx)("th",{children:"Sex"}),Object(O.jsx)("th",{children:"Born"}),Object(O.jsx)("th",{children:"Died"}),Object(O.jsx)("th",{children:"Mother"}),Object(O.jsx)("th",{children:"Father"})]})}),Object(O.jsx)("tbody",{children:v.map((function(e){return Object(O.jsx)(p,{person:e,slug:y},e.slug)}))})]})]})})]})})),v=function(){return Object(O.jsxs)("div",{"data-cy":"app",children:[Object(O.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"navbar-brand",children:[Object(O.jsx)(a.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"/",children:"Home"}),Object(O.jsx)(a.c,{className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},to:"/people",children:"People"})]})})}),Object(O.jsx)("main",{className:"section",children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)(r.d,{children:[Object(O.jsx)(r.b,{path:"/",element:Object(O.jsx)("h1",{className:"title",children:"Home Page"})}),Object(O.jsx)(r.b,{path:"/home",element:Object(O.jsx)(r.a,{to:"/",replace:!0})}),Object(O.jsxs)(r.b,{path:"/people",children:[Object(O.jsx)(r.b,{index:!0,element:Object(O.jsx)(f,{})}),Object(O.jsx)(r.b,{path:":slug",element:Object(O.jsx)(f,{})})]}),Object(O.jsx)(r.b,{path:"*",element:Object(O.jsx)("h1",{className:"title",children:"Page not found"})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(O.jsx)(a.a,{children:Object(O.jsx)(v,{})}))}},[[26,1,2]]]);
//# sourceMappingURL=main.71e152a9.chunk.js.map