(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{18:function(e,t,a){"use strict";a.r(t);var c=a(6),n=a.n(c),r=a(9),i=a(2),s=a(0),l=a(10),o=a.n(l);function j(e,t){for(var a=[],c=e;c<=t;c+=1)a.push(c);return a}var d=a(3),m=function(e){var t=e.totalItems,a=e.perPage,c=e.currentPage,n=e.fromItem,r=e.toItem,i=e.onPageChange,s=j(1,t).map((function(e){return"Item ".concat(e)})),l=Math.ceil(s.length/a),m=j(1,l),b=o()({"page-item":!0,disabled:1===c}),u=o()({"page-item":!0,disabled:c===l});return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("ul",{className:"pagination",onClick:function(e){var t=e.target.textContent;if(t)switch(t){case"\xab":i(c-1,l);break;case"\xbb":i(c+1,l);break;default:i(+t,l)}},children:[Object(d.jsx)("li",{className:b,children:Object(d.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===c,children:"\xab"})}),m.map((function(e){var t=o()({"page-item":!0,active:c===e});return Object(d.jsx)("li",{className:t,children:Object(d.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),children:e})},e)})),Object(d.jsx)("li",{className:u,children:Object(d.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===l,children:"\xbb"})})]}),Object(d.jsx)("ul",{children:s.map((function(e,t){return t>=n-1&&t<=r-1?Object(d.jsx)("li",{"data-cy":"item",children:e},e):""}))})]})},b=42,u=[3,5,10,20],h=function(){var e=Object(r.b)(),t=Object(i.a)(e,2),a=t[0],c=t[1];Object(s.useEffect)((function(){c({page:"2",perPage:"7"})}),[]);var n=a.get("page")||1,l=a.get("perPage")||5,o=+n>Math.ceil(b/+l)?Math.ceil(b/+l):n;u.includes(+l)||(u.push(+l),u.sort((function(e,t){return e-t})));var j=Object(s.useState)(+l),h=Object(i.a)(j,2),g=h[0],p=h[1],f=Object(s.useState)(+o),O=Object(i.a)(f,2),x=O[0],v=O[1],N=x*g-g+1,P=x*g>b?b:x*g;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h1",{children:"Items with Pagination"}),Object(d.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(x," (items ").concat(N," - ").concat(P," of ").concat(b,")")}),Object(d.jsxs)("div",{className:"form-group row",children:[Object(d.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(d.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){p(+e.target.value),v(1)},defaultValue:g,children:u.map((function(e){return Object(d.jsx)("option",{value:e,children:e},e)}))})}),Object(d.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(d.jsx)(m,{totalItems:b,perPage:g,currentPage:x,fromItem:N,toItem:P,onPageChange:function(e,t){e>0&&e<=t&&v(e)}})]})})},g=function(){return Object(d.jsx)(r.a,{basename:"/",children:Object(d.jsx)(h,{})})};n.a.render(Object(d.jsx)(g,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.99ca6a66.chunk.js.map