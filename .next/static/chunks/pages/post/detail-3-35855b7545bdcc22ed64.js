_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[85],{"/y5a":function(e,t,s){"use strict";var n=s("nKUr"),c=(s("q1tI"),s("40aI")),r=s("D98S"),a=s("JdYI");t.a=function(){return Object(n.jsx)("footer",{className:"ps-footer",children:Object(n.jsxs)("div",{className:"container",children:[Object(n.jsx)(c.a,{}),Object(n.jsx)(r.a,{}),Object(n.jsx)(a.a,{})]})})}},"1qBU":function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/post/detail-3",function(){return s("wpul")}])},"24c+":function(e,t,s){"use strict";var n=s("nKUr"),c=(s("q1tI"),s("YFqc")),r=s.n(c);t.a=function(e){var t=e.breacrumb,s=e.layout;return Object(n.jsx)("div",{className:"ps-breadcrumb",children:Object(n.jsx)("div",{className:"fullwidth"===s?"ps-container":"container",children:Object(n.jsx)("ul",{className:"breadcrumb",children:t&&t.map((function(e){return e.url?Object(n.jsx)("li",{children:Object(n.jsx)(r.a,{href:e.url,children:Object(n.jsx)("a",{children:e.text})})},e.text):Object(n.jsx)("li",{children:e.text},e.text)}))})})})}},"3QIL":function(e,t,s){"use strict";var n=s("nKUr"),c=(s("q1tI"),s("YFqc")),r=s.n(c);t.a=function(){var e=["Business","Entertaiment","Fashion","Life style","Technology","Others"].map((function(e){return Object(n.jsx)("li",{children:Object(n.jsx)(r.a,{href:"/blog",children:Object(n.jsx)("a",{children:e})})},e)}));return Object(n.jsxs)("aside",{className:"widget widget--blog widget--categories",children:[Object(n.jsx)("h3",{className:"widget__title",children:"Categories"}),Object(n.jsx)("div",{className:"widget__content",children:Object(n.jsx)("ul",{children:e})})]})}},Mngm:function(e,t,s){"use strict";var n=s("nKUr"),c=(s("q1tI"),s("YFqc")),r=s.n(c);t.a=function(){return Object(n.jsxs)("aside",{className:"widget widget--blog widget--recent-comments",children:[Object(n.jsx)("h3",{className:"widget__title",children:"Recent Comments"}),Object(n.jsxs)("div",{className:"widget__content",children:[Object(n.jsxs)("p",{children:[Object(n.jsx)(r.a,{href:"/blog",children:Object(n.jsx)("a",{className:"author",children:"drfurion "})}),"on"," ",Object(n.jsx)(r.a,{href:"/blog",children:Object(n.jsx)("a",{children:" Dashboard"})})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(r.a,{href:"/blog",children:Object(n.jsx)("a",{className:"author",children:"logan "})}),"on"," ",Object(n.jsx)(r.a,{href:"/blog",children:Object(n.jsx)("a",{children:" Rayban Rounded Sunglass Brown Color"})})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(r.a,{href:"/blog",children:Object(n.jsx)("a",{className:"author",children:"logan "})}),"on"," ",Object(n.jsx)(r.a,{href:"/blog",children:Object(n.jsx)("a",{children:" Sound Intone I65 Earphone White Version"})})]}),Object(n.jsxs)("p",{children:[Object(n.jsx)(r.a,{href:"/blog",children:Object(n.jsx)("a",{className:"author",children:"logan"})}),"on",Object(n.jsx)(r.a,{href:"/blog",children:Object(n.jsx)("a",{children:" Sleeve Linen Blend Caro Pane Shirt"})})]})]})]})}},fGvY:function(e,t,s){"use strict";var n=s("vJKn"),c=s.n(n),r=s("rg98"),a=s("H+61"),i=s("UlJF"),o=s("pU5j"),l=function(){function e(t){Object(a.a)(this,e),this.callback=t}return Object(i.a)(e,[{key:"getPosts",value:function(){var e=Object(r.a)(c.a.mark((function e(t){var s,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="posts?".concat(Object(o.e)(t)),e.next=3,o.d.get("".concat(o.a,"/").concat(s)).then((function(e){return e.data.length>0?e.data:null})).catch((function(e){return{error:JSON.stringify(e)}}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPostBySlug",value:function(){var e=Object(r.a)(c.a.mark((function e(t){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.get("".concat(o.a,"/posts?slug=").concat(t)).then((function(e){return e.data.length>0?e.data[0]:null})).catch((function(e){return{error:JSON.stringify(e)}}));case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPostsByCollectionSlug",value:function(){var e=Object(r.a)(c.a.mark((function e(t){var s,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s="collections?".concat(Object(o.e)(t)),e.next=3,o.d.get("".concat(o.a,"/").concat(s)).then((function(e){return e.data&&e.data[0].posts.length>0?e.data[0].posts:null})).catch((function(e){return console.log(JSON.stringify(e)),null}));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPostItemsByKeyword",value:function(){var e=Object(r.a)(c.a.mark((function e(t){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.get("".concat(o.a,"/posts?title_contains=").concat(t)).then((function(e){return e.data})).catch((function(e){return{error:JSON.stringify(e)}}));case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getPostItemsByCategory",value:function(){var e=Object(r.a)(c.a.mark((function e(t){var s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.d.get("".concat(o.a,"/posts?title_contains=").concat(t)).then((function(e){return e.data})).catch((function(e){return{error:JSON.stringify(e)}}));case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();t.a=new l},sF9j:function(e,t,s){"use strict";var n=s("nKUr");s("q1tI");t.a=function(){return Object(n.jsx)("aside",{className:"widget widget--blog widget--search",children:Object(n.jsxs)("form",{className:"ps-form--widget-search",action:"do_action",method:"get",children:[Object(n.jsx)("input",{className:"form-control",type:"text",placeholder:"Search..."}),Object(n.jsx)("button",{children:Object(n.jsx)("i",{className:"icon-magnifier"})})]})})}},"u+A/":function(e,t,s){"use strict";var n=s("nKUr"),c=(s("q1tI"),s("g4pe")),r=s.n(c),a=s("Tt/Y"),i=s("yUax"),o=s("spCc"),l=s("JNwe"),h=s("lSLZ"),j=s("/y5a");t.a=function(e){var t,s=e.children,c=e.title,u=e.boxed;return t=null!==c?"Luxury Ledger Market | "+c:"Luxury Ledger Market | A Market Place",void 0!==u&&u?Object(n.jsxs)("div",{className:"martfury",children:[Object(n.jsx)(r.a,{children:Object(n.jsx)("title",{children:t})}),Object(n.jsx)(a.a,{}),Object(n.jsx)(i.a,{}),Object(n.jsx)("main",{children:s}),Object(n.jsx)(l.a,{layout:"container"}),Object(n.jsx)(j.a,{}),Object(n.jsx)(o.a,{})]}):Object(n.jsxs)("div",{className:"martfury",children:[Object(n.jsx)(r.a,{children:Object(n.jsx)("title",{children:t})}),Object(n.jsx)(a.a,{}),Object(n.jsx)(i.a,{}),Object(n.jsx)("main",{children:s}),Object(n.jsx)(l.a,{}),Object(n.jsx)(h.a,{}),Object(n.jsx)(o.a,{})]})}},vaMm:function(e,t,s){"use strict";var n=s("vJKn"),c=s.n(n),r=s("nKUr"),a=s("rg98"),i=s("q1tI"),o=s("YFqc"),l=s.n(o),h=s("fGvY");t.a=function(){var e,t=Object(i.useState)(!0),s=t[0],n=t[1],o=Object(i.useState)(null),j=o[0],u=o[1];function d(){return(d=Object(a.a)(c.a.mark((function e(){var t,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={_limit:4},e.next=3,h.a.getPosts(t);case 3:if(!(s=e.sent)){e.next=10;break}return setTimeout((function(){n(!1)}),200),u(s),e.abrupt("return",s);case 10:return u(null),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(i.useEffect)((function(){!function(){d.apply(this,arguments)}()}),[]),s?e=Object(r.jsx)("p",{children:"Loading..."}):j&&j.length>0&&(e=j.map((function(e){return Object(r.jsx)(l.a,{href:"/post/[pid]",as:"/post/".concat(e.id),children:Object(r.jsx)("a",{children:e.title})})}))),Object(r.jsxs)("aside",{className:"widget widget--blog widget--recent-post",children:[Object(r.jsx)("h3",{className:"widget__title",children:"Recent Posts"}),Object(r.jsx)("div",{className:"widget__content",children:e})]})}},wpul:function(e,t,s){"use strict";s.r(t);var n=s("nKUr"),c=(s("q1tI"),s("24c+")),r=s("u+A/"),a=s("sF9j"),i=s("3QIL"),o=s("vaMm"),l=s("Mngm"),h=function(){return Object(n.jsxs)("div",{className:"ps-post--detail sidebar",children:[Object(n.jsxs)("div",{className:"ps-post__header",children:[Object(n.jsxs)("h1",{children:["Harman Kadon Onyx Studio Mini, ",Object(n.jsx)("br",{})," Reviews & Experiences"]}),Object(n.jsxs)("p",{children:["December 17/ 2017 / By drfurion / in",Object(n.jsx)("a",{href:"blog-list.html",children:"Life Style"}),Object(n.jsx)("a",{href:"blog-list.html",children:"Others"})]})]}),Object(n.jsxs)("div",{className:"ps-post__content",children:[Object(n.jsx)("h4",{children:"On the off chance that you have an escalated stop, mull over a short taking a gander at outing. This especially is shrewd in urban areas with brilliant open transportation decisions."}),Object(n.jsx)("p",{children:"Today most people get on average 4 to 6 hours of exercise every day, and make sure that everything they put in their mouths is not filled with sugars or preservatives, but they pay no attention to their mental health, no vacations, not even the occasional long weekend. All of this for hopes of one day getting that big promotion.This response is important for our ability to learn from mistakes, but it also gives rise to self-criticism, because it is part of the threat-protection system. In other words, what keeps us safe can go too far, and keep us too safe. In fact, it can trigger self-censoring. Coven try is a city with a thousand years of history that has plenty to offer the visiting tourist. Located in the heart of Warwickshire. One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections."}),Object(n.jsxs)("blockquote",{className:"ps-blockquote",children:[Object(n.jsx)("p",{children:"\u201cWhen you think \u2018I know\u2019 and \u2018it is,\u2019 you have the illusion of knowing, the illusion of certainty, and then you\u2019re mindless\u201d"}),Object(n.jsx)("span",{className:"ps-blockquote__author",children:"JELLY CRISTIANA"})]}),Object(n.jsx)("p",{children:"That immediately brought to mind one of my fondest memories, involving my daughter when she was just a toddler of one: taking her with me on the short walk to check the mail. I live in a small enclave of homes in which all the mailboxes are together in a central location, less than a minute\u2019s walk from my front door"}),Object(n.jsxs)("div",{className:"row",children:[Object(n.jsx)("div",{className:"col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12 ",children:Object(n.jsx)("img",{className:"mb-30",src:"img/blog/detail/2.jpg",alt:"Luxury Ledger Market"})}),Object(n.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ",children:Object(n.jsx)("img",{className:"mb-30",src:"img/blog/detail/3.jpg",alt:"Luxury Ledger Market"})}),Object(n.jsx)("div",{className:"col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ",children:Object(n.jsx)("img",{className:"mb-30",src:"img/blog/detail/4.jpg",alt:"Luxury Ledger Market"})})]}),Object(n.jsx)("h4",{children:"Defaulting to Mindfulness: The Third Person Effect"}),Object(n.jsx)("p",{children:"Cray post-ironic plaid, Helvetica keffiyeh tousled Carles banjo before they sold out blog photo booth Marfa semiotics Truffaut. Mustache Schlitz next level blog Williamsburg, deep v typewriter tote bag Banksy +1 literally."}),Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:"Welsh novelist Sarah Waters sums it up eloquently"}),Object(n.jsx)("li",{children:"In their classic book, Creativity in Business, based on a popular course they co-taught"}),Object(n.jsx)("li",{children:"Novelist and screenwriter Steven Pressfield"}),Object(n.jsx)("li",{children:"A possible off-the-wall idea or solution appears like a blip and disappears without us even realizing"})]}),Object(n.jsxs)("p",{children:["The short answer is yes. ",Object(n.jsx)("strong",{children:"According to Kross"}),", when you think of yourself as another person, it allows you give yourself more objective, helpful feedback."]}),Object(n.jsx)("h4",{children:"Recommended Items"}),Object(n.jsx)("p",{children:"Both of these assumptions, of course, could be entirely false. Self-censoring is firmly rooted in our experiences with mistakes in the past and not the present"})]}),Object(n.jsxs)("div",{className:"ps-post__footer",children:[Object(n.jsxs)("p",{className:"ps-post__tags",children:["Tags:",Object(n.jsx)("a",{href:"#",children:"business"}),Object(n.jsx)("a",{href:"#",children:"technology"})]}),Object(n.jsxs)("div",{className:"ps-post__social",children:[Object(n.jsx)("a",{className:"facebook",href:"#",children:Object(n.jsx)("i",{className:"fa fa-facebook"})}),Object(n.jsx)("a",{className:"twitter",href:"#",children:Object(n.jsx)("i",{className:"fa fa-twitter"})}),Object(n.jsx)("a",{className:"google",href:"#",children:Object(n.jsx)("i",{className:"fa fa-google-plus"})}),Object(n.jsx)("a",{className:"linkedin",href:"#",children:Object(n.jsx)("i",{className:"fa fa-linkedin"})}),Object(n.jsx)("a",{className:"pinterest",href:"#",children:Object(n.jsx)("i",{className:"fa fa-pinterest"})})]})]})]})};t.default=function(){return Object(n.jsx)(r.a,{title:"Post Detail 3",boxed:!0,children:Object(n.jsxs)("div",{className:"ps-page--blog",children:[Object(n.jsx)(c.a,{breacrumb:[{text:"Home",url:"/"},{text:"Our Press"}]}),Object(n.jsx)("div",{className:"container",children:Object(n.jsxs)("div",{className:"ps-blog--sidebar",children:[Object(n.jsx)("div",{className:"ps-blog__left",children:Object(n.jsx)(h,{})}),Object(n.jsxs)("div",{className:"ps-blog__right",children:[Object(n.jsx)(a.a,{}),Object(n.jsx)(i.a,{}),Object(n.jsx)(o.a,{}),Object(n.jsx)(l.a,{})]})]})})]})})}}},[["1qBU",1,2,0,3,4,5,6,7]]]);