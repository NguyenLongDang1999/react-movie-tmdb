(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{40:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c(1),s=c.n(n),r=c(33),i=c.n(r),l=(c(40),c(2)),o=c.n(l),j=c(14),d=c(6),u=c(5),b=c(7),m=c.n(b),h=(c(59),"https://api.themoviedb.org/3/"),O="2bcc10a90f7e9e82823432df39ff399d",p="https://image.tmdb.org/t/p/",x="w1280",v=function(){var e=Object(n.useState)({loading:!1,listSlider:null}),t=Object(u.a)(e,2),c=t[0],s=t[1];return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(h,"movie/popular/?api_key=").concat(O,"&language=en-US&page=1"));case 3:t=e.sent,s(Object(j.a)(Object(j.a)({},c),{},{listSlider:c.listSlider||t.data.results[0]})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)(a.Fragment,{children:c.listSlider?Object(a.jsx)("section",{className:"slider",children:Object(a.jsx)("div",{className:"slider__background",style:{backgroundImage:"url(".concat(p).concat(x).concat(c.listSlider.backdrop_path,")")},children:Object(a.jsxs)("div",{className:"slider__background-body",children:[Object(a.jsx)("h1",{children:c.listSlider.title}),Object(a.jsx)("p",{children:c.listSlider.overview})]})})}):null})},f=c(19),g=(c(60),c(12)),N=function(e){var t=e.onClick;return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"row",children:Object(a.jsx)("div",{className:"col-12",children:Object(a.jsx)("div",{className:"popular__loadmore",children:Object(a.jsx)("p",{onClick:t,children:"Load More"})})})})})},_=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{class:"spinner-border text-primary",role:"status",children:Object(a.jsx)("span",{class:"sr-only",children:"Loading..."})})})},k=c(17),S=(c(61),function(e){var t=e.onSearch,c=Object(n.useState)({search:""}),s=Object(u.a)(c,2),r=s[0],i=s[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:"search",children:Object(a.jsxs)("div",{className:"search__form",children:[Object(a.jsx)("input",{type:"text",className:"form-control",name:"search",defaultValue:r.search,onChange:function(e){var c=e.target,a=c.name,n=c.value;i(Object(k.a)({},a,n)),clearTimeout(setTimeout((function(){t.callback(r.search)}),500))}}),Object(a.jsx)("div",{className:"search__form-icon",children:Object(a.jsx)("i",{className:"fa fa-search","aria-hidden":"true"})})]})})})}),w=function(){var e=Object(n.useState)({listMovie:[],currentPage:1,totalPages:1,searchTerm:""}),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(n.useState)({loading:!1}),i=Object(u.a)(r,2),l=i[0],b=i[1];Object(n.useEffect)((function(){b({loading:!0}),function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m.a.get("".concat(h,"movie/popular/?api_key=").concat(O,"&language=en-US&page=1"));case 3:t=e.sent,s(Object(j.a)(Object(j.a)({},c),{},{listMovie:t.data.results})),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}()()}),[]);var v=function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b({loading:!0}),e.next=3,m.a.get("".concat(h,"movie/popular/?api_key=").concat(O,"&language=en-US&page=").concat(c.currentPage+1));case 3:t=e.sent,s({listMovie:[].concat(Object(f.a)(c.listMovie),Object(f.a)(t.data.results)),currentPage:t.data.page,totalPages:t.data.total_pages}),b({loading:!1});case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(d.a)(o.a.mark((function e(t){var a,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.searchTerm,b({loading:!0}),e.next=4,m.a.get("".concat(h,"search/movie?api_key=").concat(O,"&language=en-US&query=").concat(a,"&page=1&include_adult=false"));case 4:n=e.sent,s({listMovie:Object(f.a)(c.listMovie||n.data.results)});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(S,{callback:k}),Object(a.jsxs)("section",{className:"popular",children:[Object(a.jsx)("h2",{className:"popular__title",children:"Popular Movie"}),Object(a.jsxs)("div",{className:"popular__grid",children:[Object(a.jsx)("div",{className:"row",children:c.listMovie.map((function(e,t){return Object(a.jsxs)("div",{className:"col-lg-3 col-md-4 col-sm-6 mb-4",children:[Object(a.jsx)("div",{className:"popular__grid-thumb",children:Object(a.jsx)(g.b,{to:"".concat(e.id),children:Object(a.jsx)("img",{src:"".concat(p).concat(x).concat(e.poster_path),className:"img-fluid",alt:e.title})})}),Object(a.jsx)("div",{className:"popular__grid-title",children:Object(a.jsx)(g.b,{to:"".concat(e.id),className:"popular__grid-title-link",children:e.title})}),Object(a.jsx)("div",{className:"popular__grid-date",children:Object(a.jsxs)("p",{className:"m-0",children:[Object(a.jsx)("span",{children:"release date"}),":",e.release_date]})})]},t)}))}),l.loading?Object(a.jsx)(_,{}):null,c.currentPage<=c.totalPages&&!l.loading?Object(a.jsx)(N,{onClick:v}):null]})]})]})},y=function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v,{}),Object(a.jsx)(w,{})]})},F=c(3),M=(c(67),function(){var e=Object(n.useState)({item:[]}),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(F.f)().id;return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m()("".concat(h,"movie/").concat(r,"?api_key=").concat(O,"&language=en-US"));case 3:t=e.sent,s({item:t.data.genres}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{className:"d-flex m-0 list-unstyled",children:c.item.map((function(e,t){return Object(a.jsx)("li",{children:e.name},t)}))})})}),P=function(){var e=Object(n.useState)({item:[]}),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(F.f)().id;return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m()("".concat(h,"movie/").concat(r,"/credits?api_key=").concat(O,"&language=en-US"));case 3:t=e.sent,s({item:t.data.cast}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"row mt-4",children:c.item.map((function(e,t){return Object(a.jsxs)("div",{className:"col-md-3 col-6 mb-4",children:[Object(a.jsx)("img",{src:"".concat(p).concat(x).concat(e.profile_path),className:"img-fluid",alt:e.name}),Object(a.jsx)("div",{className:"name",children:e.name})]},t)}))})})},U=(c(68),function(){var e=Object(n.useState)({item:[]}),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(F.f)().id;return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m()("".concat(h,"movie/").concat(r,"?api_key=").concat(O,"&language=en-US"));case 3:t=e.sent,s({item:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("div",{className:"movie__detail-info",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsxs)("p",{children:["Runtime: ",function(e){var t=Math.floor(e/60),c=e%60;return"".concat(t,"h ").concat(c,"m")}(c.item.runtime)]})}),Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsxs)("p",{children:["Budget: ",c.item.budget]})}),Object(a.jsx)("div",{className:"col-md-4",children:Object(a.jsxs)("p",{children:["Revenue: ",c.item.revenue]})})]})})})}),C=function(){var e=Object(n.useState)({item:[]}),t=Object(u.a)(e,2),c=t[0],s=t[1],r=Object(F.f)().id;return Object(n.useEffect)((function(){(function(){var e=Object(d.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m()("".concat(h,"movie/").concat(r,"?api_key=").concat(O,"&language=en-US"));case 3:t=e.sent,s({item:t.data}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[r]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("section",{className:"movie",children:Object(a.jsxs)("div",{className:"movie__detail",children:[Object(a.jsxs)("ul",{className:"movie__detail-breadcrumb m-0 d-flex",children:[Object(a.jsx)("li",{children:Object(a.jsx)(g.b,{to:"/",children:"Home"})}),Object(a.jsx)("li",{children:"/"}),Object(a.jsx)("li",{children:c.item.title})]}),Object(a.jsx)("div",{className:"movie__detail-background",style:{backgroundImage:"url(".concat(p).concat(x).concat(c.item.backdrop_path,")")},children:Object(a.jsx)("div",{className:"movie__detail-background-item",children:Object(a.jsxs)("div",{className:"row",children:[Object(a.jsx)("div",{className:"col-md-3 d-md-block d-none",children:Object(a.jsx)("img",{src:"".concat(p).concat(x).concat(c.item.poster_path),className:"img-fluid",alt:c.item.title})}),Object(a.jsx)("div",{className:"col-md-9",children:Object(a.jsxs)("div",{className:"movie__detail-background-text",children:[Object(a.jsx)("h1",{className:"title",children:c.item.title}),Object(a.jsx)("div",{className:"description",children:Object(a.jsx)("p",{children:c.item.overview})}),Object(a.jsxs)("div",{className:"genres",children:[Object(a.jsx)("h3",{className:"text-uppercase mb-3",children:"Genres"}),Object(a.jsx)(M,{})]}),Object(a.jsxs)("div",{className:"status",children:[Object(a.jsx)("h3",{className:"text-uppercase mb-3",children:"Status"}),Object(a.jsx)("p",{children:c.item.status})]}),Object(a.jsxs)("div",{className:"vote",children:[Object(a.jsx)("h3",{className:"text-uppercase mb-3",children:"Vote Average"}),Object(a.jsx)("p",{children:c.item.vote_average})]})]})})]})})}),Object(a.jsx)(U,{}),Object(a.jsxs)("div",{className:"movie__detail-actor",children:[Object(a.jsx)("h5",{className:"title",children:"actors"}),Object(a.jsx)(P,{})]})]})})})},E=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(C,{})})},T=c.p+"static/media/logo.bf7f470b.svg",L=(c(69),function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("header",{className:"header",children:Object(a.jsx)("div",{className:"header__logo",children:Object(a.jsx)("img",{src:T,alt:"Logo"})})})})});c(70);var I=function(){return Object(a.jsxs)("div",{className:"main",children:[Object(a.jsx)(L,{}),Object(a.jsxs)(F.c,{children:[Object(a.jsx)(F.a,{exact:!0,path:"/",component:y}),Object(a.jsx)(F.a,{path:"/:id",component:E})]})]})},B=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,72)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};i.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(g.a,{children:Object(a.jsx)(I,{})})}),document.getElementById("root")),B()}},[[71,1,2]]]);
//# sourceMappingURL=main.b952efbc.chunk.js.map