(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[50],{565:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(6),c=n(186);t.a=function(){return a.a.createElement("div",{className:"breadcrumb-area pt-10 pb-10 bg-gray-5"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"breadcrumb-content text-center"},a.a.createElement(c.Breadcrumbs,{separator:a.a.createElement("span",null,"/"),item:o.c,finalItem:"span"}))))}},567:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=l(n(3)),o=l(n(36)),c=n(578);function l(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var m,y,b,h=function(e){function t(){return u(this,t),s(this,p(t).apply(this,arguments))}var n,a,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&o.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var n=r.default.createElement("div",{className:"react-head-temp"},t);o.default.render(n,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var n=e.temporaryElement.querySelector(".react-head-temp");if(null!==n){var r=Array.prototype.slice.call(n.children),a=document.head,o=a.innerHTML;(r=(r=r.filter((function(e){return-1===o.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var n=(0,c.getDuplicateTitle)();n&&(0,c.removeChild)(a,n)}else if("meta"===t){var r=(0,c.getDuplicateMeta)(e);r&&(0,c.removeChild)(a,r)}else if("link"===t&&"canonical"===e.rel){var o=(0,c.getDuplicateCanonical)(e);o&&(0,c.removeChild)(a,o)}})),(0,c.appendChild)(document.head,r)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&f(n.prototype,a),l&&f(n,l),t}(r.Component);m=h,y="contextTypes",b={extract:a.default.func},y in m?Object.defineProperty(m,y,{value:b,enumerable:!0,configurable:!0,writable:!0}):m[y]=b;var v=h;t.default=v,e.exports=t.default},568:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return a.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return o.default}}),t.default=void 0;var r=c(n(577)),a=c(n(567)),o=c(n(579));function c(e){return e&&e.__esModule?e:{default:e}}var l=a.default;t.default=l},577:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r,a=n(0),o=(r=n(3))&&r.__esModule?r:{default:r};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function u(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(){return l(this,t),u(this,f(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,e),n=t,(r=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return a.Children.only(this.props.children)}}])&&i(n.prototype,r),o&&i(n,o),t}(a.Component);!function(e,t,n){t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n}(p,"childContextTypes",{extract:o.default.func});var d=p;t.default=d,e.exports=t.default},578:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,n=null,r=[],c=[];return e.forEach((function(e){var a=e.type,o=e.props;"title"===a?t=e:"link"===a&&"canonical"===o.rel?n=e:"meta"===a?r.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};o.forEach((function(e){t[e]=[]}));for(var n=[],r=function(r){var c=e[r],l=c.props.id;(l?!t.id[l]:0===a.filter((function(e){var n=c.props[e],r=t[e][n];return r&&!r.props.id})).length)&&(n.unshift(c),o.forEach((function(e){var n=c.props[e];n&&(t[e][n]=c)})))},c=e.length-1;c>=0;c--)r(c);return n}(r)),[n],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,n=e.id;if(n)return n&&t.querySelector("#".concat(n));return r.reduce((function(n,r){var a,o=e.getAttribute(r);return o?n.concat((a=t.querySelectorAll("[".concat(r,' = "').concat(o,'"]')),(a=Array.prototype.slice.call(a||[])).filter((function(e){return!e.id})))):n}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=document.createDocumentFragment(),r=0,a=t.length;r<a;r++)n.appendChild(t[r]);e.appendChild(n)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var n=0,r=t.length;n<r;n++)e.removeChild(t[n])};var r=["property","name","itemprop"],a=r.concat(["itemProp"]),o=a.concat(["id"])},579:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,n):{};r.get||r.set?Object.defineProperty(t,n,r):t[n]=e[n]}return t.default=e,t}(n(0)),a=c(n(3)),o=c(n(567));function c(e){return e&&e.__esModule?e:{default:e}}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,m,y,b=function(e){function t(){return i(this,t),f(this,s(t).apply(this,arguments))}var n,a,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){return r.default.createElement(o.default,null,r.default.createElement("title",null,this.props.title))}}])&&u(n.prototype,a),c&&u(n,c),t}(r.Component);d=b,m="propTypes",y={title:a.default.string},m in d?Object.defineProperty(d,m,{value:y,enumerable:!0,configurable:!0,writable:!0}):d[m]=y;var h=b;t.default=h,e.exports=t.default},865:function(e,t,n){"use strict";n.r(t);var r=n(42),a=n.n(r),o=n(69),c=n(35),l=n(0),i=n.n(l),u=n(6),f=n(108),s=n(568),p=n.n(s),d=n(186),m=n(45),y=(n(184),n(109)),b=n(70),h=n(138),v=n(565),E=n(56),O=n.n(E);t.default=Object(m.connect)((function(e){return{cartItems:e.cartData,wishlistItems:e.wishlistData,currency:e.currencyData}}),(function(e){return{addToCart:function(t,n,r){e(Object(b.e)(t,n,r))},addToWishlist:function(t,n,r){e(Object(y.d)(t,n,r))},deleteFromWishlist:function(t,n,r){e(Object(y.f)(t,n,r))},deleteAllFromWishlist:function(t){e(Object(y.e)(t))}}}))((function(e){var t=e.location,n=(e.cartItems,e.currency,e.addToCart,e.wishlistItems,e.deleteFromWishlist,e.deleteAllFromWishlist,Object(f.useToasts)().addToast,t.pathname),r=Object(l.useState)([]),s=Object(c.a)(r,2),m=s[0],y=s[1],b=function(){var e=Object(o.a)(a.a.mark((function e(t){var n,r,o;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("http://35.154.86.59/api/admin/getorderbycustomer",{headers:{"auth-token":localStorage.getItem("auth-token")}});case 2:n=e.sent,r=n.data,o=r.data,y(o),console.log(o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.useEffect)((function(){localStorage.getItem("auth-token")&&b()}),[]),i.a.createElement(l.Fragment,null,i.a.createElement(p.a,null,i.a.createElement("title",null,"Flone | MyOrder"),i.a.createElement("meta",{name:"description",content:"Wishlist page of flone react minimalist eCommerce template."})),i.a.createElement(d.BreadcrumbsItem,{to:"/"},"Home"),i.a.createElement(d.BreadcrumbsItem,{to:""+n},"My Order"),i.a.createElement(h.a,{headerTop:"visible"},i.a.createElement(v.a,null),i.a.createElement("div",{className:"cart-main-area pt-90 pb-100"},i.a.createElement("div",{className:"container"},m&&m.length>=1?i.a.createElement(l.Fragment,null,i.a.createElement("h3",{className:"cart-page-title"},"Your Order Items"),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-12"},i.a.createElement("div",{className:"table-content table-responsive cart-table-content"},i.a.createElement("table",null,i.a.createElement("thead",null,i.a.createElement("tr",null,i.a.createElement("th",null,"ORDER ID"),i.a.createElement("th",null,"Image"),i.a.createElement("th",null,"Product Name"),i.a.createElement("th",null,"QUANTITY"),i.a.createElement("th",null,"AMOUNT"),i.a.createElement("th",null,"Order Status"),i.a.createElement("th",null,"action"))),i.a.createElement("tbody",null,null===m||void 0===m?void 0:m.map((function(e,t){return i.a.createElement("tr",{key:t},i.a.createElement("td",{className:"product-price-cart"},i.a.createElement("span",{className:"amount"},null===e||void 0===e?void 0:e.cus_orderId)),i.a.createElement("td",{className:"product-thumbnail"},i.a.createElement(u.b,{to:"#"},i.a.createElement("img",{className:"img-fluid",src:""+e.product.product_img[0],alt:""}))),i.a.createElement("td",{className:"product-name text-center"},i.a.createElement(u.b,{to:"/product-sticky/"},e.product.product_name),i.a.createElement("br",null),"COLOR: ",null===e||void 0===e?void 0:e.color,i.a.createElement("br",null),"SIZE: ",null===e||void 0===e?void 0:e.size),i.a.createElement("td",{className:"product-price-cart"},i.a.createElement("span",{className:"amount"},null===e||void 0===e?void 0:e.product_qty)),i.a.createElement("td",{className:"product-price-cart"},i.a.createElement("span",{className:"amount"}),null===e||void 0===e?void 0:e.product_price),i.a.createElement("td",{className:"product-price-cart"},i.a.createElement("span",{className:"amount"}),null===e||void 0===e?void 0:e.status))})))))))):i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-lg-12"},i.a.createElement("div",{className:"item-empty-area text-center"},i.a.createElement("div",{className:"item-empty-area__icon mb-30"},i.a.createElement("i",{className:"pe-7s-cart"})),i.a.createElement("div",{className:"item-empty-area__text"},"No Product Found ",i.a.createElement("br",null)," ",i.a.createElement(u.b,{to:"/"},"Shop Now")))))))))}))}}]);
//# sourceMappingURL=50.82373b28.chunk.js.map