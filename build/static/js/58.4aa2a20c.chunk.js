(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[58],{565:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(6),l=a(186);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(l.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:n.c,finalItem:"span"}))))}},607:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=(a(184),function(e){e.getLayout,e.getFilterSortParams;var t=e.productCount,a=e.sortedProductCount;return r.a.createElement("div",{className:"shop-top-bar mb-35"},r.a.createElement("div",{className:"select-shoing-wrap"},r.a.createElement("p",null,"Showing ",a," of ",t," result")))});t.a=function(e){var t=e.getLayout,a=e.getFilterSortParams,l=e.productCount,s=e.sortedProductCount;return r.a.createElement(c.Fragment,null,r.a.createElement(n,{getLayout:t,getFilterSortParams:a,productCount:l,sortedProductCount:s}))}},610:function(e,t,a){"use strict";var c=a(0),r=a.n(c),n=a(184),l=function(){return r.a.createElement("div",{className:"sidebar-widget"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Search "),r.a.createElement("div",{className:"pro-sidebar-search mb-50 mt-25"},r.a.createElement("form",{className:"pro-sidebar-search-form",action:"#"},r.a.createElement("input",{type:"text",placeholder:"Search here..."}),r.a.createElement("button",null,r.a.createElement("i",{className:"pe-7s-search"})))))},s=function(e){var t=e.categories,a=e.getSortParams,c=e.cb;return r.a.createElement("div",{className:"sidebar-widget"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Categories "),r.a.createElement("div",{className:"sidebar-widget-list mt-30"},t?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(e){a("category",""),Object(n.h)(e)}},r.a.createElement("span",{className:"checkmark"})," All Categories"))),t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(t){console.log(e._id),c(e._id),a("category",e),Object(n.h)(t)}}," ",r.a.createElement("span",{className:"checkmark"})," ",e.name," ")))}))):"No categories found"))},o=function(e){var t=e.colors,a=e.getSortParams,c=e.getonecolor;return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Color "),r.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(e){a("color",""),Object(n.h)(e)}},r.a.createElement("span",{className:"checkmark"})," All Colors"," "))),t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(t){c(e._id),console.log(e._id),a("color",e),Object(n.h)(t)}},r.a.createElement("span",{className:"checkmark"}),r.a.createElement("span",{style:{backgroundColor:null===e||void 0===e?void 0:e.colorName,borderRadius:"50%",height:25,width:25}})," ",null===e||void 0===e?void 0:e.colorName," ")))}))):"No colors found"))},i=function(e){var t=e.sizes,a=e.getSortParams,c=e.getonesize;return r.a.createElement("div",{className:"sidebar-widget mt-40"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Size "),r.a.createElement("div",{className:"sidebar-widget-list mt-20"},t?r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{onClick:function(e){a("size",""),Object(n.h)(e)}},r.a.createElement("span",{className:"checkmark"})," All Sizes"," "))),t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("button",{className:"text-uppercase",onClick:function(t){console.log(e._id),c(e._id),a("size",e),Object(n.h)(t)}}," ",r.a.createElement("span",{className:"checkmark"}),e.sizeName," ")))}))):"No sizes found"))},m=function(e){var t=e.tags,a=e.getSortParams,c=e.getonetag;return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Tag "),r.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(t){c(e),a("tag",e),Object(n.h)(t)}},e))}))):"No tags found"))},u=function(e){var t=e.brands,a=e.getSortParams,c=e.getonebrand;return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Brand "),r.a.createElement("div",{className:"sidebar-widget-tag mt-25"},t?r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(t){c(e._id),a("brands",e),Object(n.h)(t)}},e.name))}))):"No brands found"))},d=a(35),b=a(695),g=a(694);function E(e){return"".concat(e,"\xb0C")}var p=function(e){e.tags,e.getSortParams;var t=e.priceobj,a=r.a.useState([1,90]),c=Object(d.a)(a,2),n=c[0],l=c[1];return r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Price Range "),r.a.createElement("div",{className:"sidebar-widget-tag mt-25"},r.a.createElement(b.a,null,r.a.createElement(g.a,{getAriaLabel:function(){return"Price range"},value:n,scale:function(e){return 25*e},onChange:function(e,a){l(a),t({min:25*a[0],max:25*a[1]})},valueLabelDisplay:"auto",getAriaValueText:E}))))};t.a=function(e){var t=e.products,a=e.getSortParams,c=e.sideSpaceClass,d=e.colors,b=e.sizes,g=e.category,E=e.tags,f=e.brand,N=e.callback,v=e.tagcallback,h=e.colorcallback,j=e.sizecallback,O=e.brandcallback,k=e.pricerange;Object(n.b)(t),Object(n.c)(t),Object(n.f)(t),Object(n.d)(t);return r.a.createElement("div",{className:"sidebar-style ".concat(c||"")},r.a.createElement(l,null),r.a.createElement(p,{tags:E,getSortParams:a,priceobj:function(e){k(e),console.log(e)}}),r.a.createElement(m,{tags:E,getSortParams:a,getonetag:function(e){v(e),console.log(e)}}),r.a.createElement(o,{colors:d,getSortParams:a,getonecolor:function(e){h(e),console.log(e)}}),r.a.createElement(i,{sizes:b,getSortParams:a,getonesize:function(e){j(e),console.log(e)}}),r.a.createElement(u,{brands:f,getSortParams:a,getonebrand:function(e){O(e),console.log(e)}}),r.a.createElement(s,{categories:g,getSortParams:a,cb:function(e){N(e),console.log(e)}}))}},835:function(e,t,a){"use strict";a.r(t);var c=a(42),r=a.n(c),n=a(69),l=a(35),s=a(0),o=a.n(s),i=a(568),m=a.n(i),u=a(617),d=a(186),b=a(45),g=a(6),E=a(184),p=a(138),f=a(565),N=(a(610),a(607),a(108));t.default=Object(b.connect)((function(e){return{products:e.productData.products}}))((function(e){var t=e.location,a=e.products,c=(e.product,e.currency,e.addToCart,e.addToWishlist,e.addToCompare,e.cartItem,e.wishlistItem,e.discountedPrice,e.compareItem,e.sliderClassName),i=e.spaceBottomClass,b=e.colorClass,v=e.titlePriceClass,h=(Object(N.useToasts)().addToast,Object(s.useState)("grid two-column")),j=Object(l.a)(h,2),O=j[0],k=(j[1],Object(s.useState)("")),S=Object(l.a)(k,2),w=S[0],C=(S[1],Object(s.useState)("")),P=Object(l.a)(C,2),y=P[0],_=(P[1],Object(s.useState)("")),x=Object(l.a)(_,2),z=x[0],T=(x[1],Object(s.useState)("")),F=Object(l.a)(T,2),I=F[0],L=(F[1],Object(s.useState)(0)),A=Object(l.a)(L,2),B=A[0],R=A[1],D=Object(s.useState)(1),J=Object(l.a)(D,2),H=J[0],K=J[1],V=Object(s.useState)([]),W=Object(l.a)(V,2),q=(W[0],W[1]),G=Object(s.useState)([]),M=Object(l.a)(G,2),Q=M[0],U=M[1],X=t.pathname;Object(s.useEffect)((function(){var e=Object(E.g)(a,w,y),t=Object(E.g)(e,z,I);U(e=t),q(e.slice(B,B+16))}),[B,a,w,y,z,I]);var Y=Object(s.useState)([]),Z=Object(l.a)(Y,2),$=Z[0],ee=Z[1];return Object(s.useEffect)((function(){function e(){return(e=Object(n.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://35.154.86.59/api/admin/getproductbytagname/Kids");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,ee(a.data),console.log(a.data);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),o.a.createElement(s.Fragment,null,o.a.createElement(m.a,null,o.a.createElement("title",null,"Flone | Shop Page"),o.a.createElement("meta",{name:"description",content:"Shop page of flone react minimalist eCommerce template."})),o.a.createElement(d.BreadcrumbsItem,{to:"/"},"Home"),o.a.createElement(d.BreadcrumbsItem,{to:""+X},"Shop"),o.a.createElement(p.a,{headerTop:"visible"},o.a.createElement(f.a,null),o.a.createElement("div",{className:"shop-area pt-95 pb-100"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-lg-12"},o.a.createElement("div",{className:"shop-bottom-area mt-35"},o.a.createElement("div",{className:"row ".concat(O||"")},o.a.createElement(s.Fragment,null,$.map((function(e){return o.a.createElement("div",{className:"col-xl-3 col-md-6 col-lg-4 col-sm-6 ".concat(c||""),key:e._id},o.a.createElement("div",{className:"product-wrap-2 ".concat(i||""," ").concat(b||""," ")},o.a.createElement("div",{className:"product-img"},o.a.createElement(g.b,{to:"/product-sticky/"+e._id},o.a.createElement("img",{className:"default-img",src:e.product_img[0],alt:""}),o.a.createElement("img",{className:"hover-img",src:e.product_img[1],alt:""})),o.a.createElement("div",{className:"product-action-2"})),o.a.createElement("div",{className:"product-content-2"},o.a.createElement("div",{className:"title-price-wrap-2 ".concat(v||"")},o.a.createElement("h3",null,o.a.createElement(g.b,{to:"/product/"+e._id},e.product_name)),o.a.createElement("div",{className:"price-2"},o.a.createElement(s.Fragment,null,o.a.createElement("span",null,"\u20b9 ",e.sell_price)))))))}))))),o.a.createElement("div",{className:"pro-pagination-style text-center mt-30"},o.a.createElement(u.a,{totalRecords:Q.length,pageLimit:16,pageNeighbours:2,setOffset:R,currentPage:H,setCurrentPage:K,pageContainerClass:"mb-0 mt-0",pagePrevText:"\xab",pageNextText:"\xbb"}))))))))}))}}]);
//# sourceMappingURL=58.4aa2a20c.chunk.js.map