(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{28:function(e,t,a){},31:function(e,t,a){"use strict";a.r(t);var c=a(16),n=a.n(c),r=a(19),i=a(2),s=(a(28),a(5)),l=a(0),o=a(22),j=a.n(o);function d(e,t){for(var a=[],c=e;c<=t;c+=1)a.push(c);return a}var b=a(4),h=function(e){var t=e.totalItems,a=e.perPage,c=e.currentPage,n=e.onPageChange,r=d(1,t).map((function(e){return"Item ".concat(e)})),i=Math.ceil(r.length/a),s=d(1,i),l=c*a-a+1,o=c*a>t?t:c*a,h=j()({"page-item":!0,disabled:1===c}),u=j()({"page-item":!0,disabled:c===i});return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("ul",{className:"pagination",onClick:function(e){var t=e.target.textContent;if(t)switch(t){case"\xab":c>1&&n(c-1);break;case"\xbb":c<i&&n(c+1);break;default:n(+t)}},children:[Object(b.jsx)("li",{className:h,children:Object(b.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":1===c,children:"\xab"})}),s.map((function(e){var t=j()({"page-item":!0,active:c===e});return Object(b.jsx)("li",{className:t,children:Object(b.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),children:e})},e)})),Object(b.jsx)("li",{className:u,children:Object(b.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":c===i,children:"\xbb"})})]}),Object(b.jsx)("ul",{children:r.map((function(e,t){return t>=l-1&&t<=o-1?Object(b.jsx)("li",{"data-cy":"item",children:e},e):""}))})]})},u=42,m=[3,5,10,20],g=function(){var e=Object(r.b)(),t=Object(s.a)(e,1)[0],a=t.get("page")||1,c=t.get("perPage")||5,n=+a>Math.ceil(u/+c)?Math.ceil(u/+c):a;m.includes(+c)||(m.push(+c),m.sort((function(e,t){return e-t})));var i=Object(l.useState)(+c),o=Object(s.a)(i,2),j=o[0],d=o[1],g=Object(l.useState)(+n),p=Object(s.a)(g,2),O=p[0],x=p[1],f=O*j-j+1,v=O*j>u?u:O*j;return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{children:"Items with Pagination"}),Object(b.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(O," (items ").concat(f," - ").concat(v," of ").concat(u,")")}),Object(b.jsxs)("div",{className:"form-group row",children:[Object(b.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(b.jsx)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",onChange:function(e){d(+e.target.value),x(1)},defaultValue:j,children:m.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}))})}),Object(b.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(b.jsx)(h,{totalItems:u,perPage:j,currentPage:O,onPageChange:function(e){return x(e)}})]})})},p=function(){return Object(b.jsx)(r.a,{children:Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(i.c,{children:Object(b.jsx)(i.a,{path:"/",element:Object(b.jsx)(g,{})})})})})};n.a.render(Object(b.jsx)(p,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.1465755f.chunk.js.map