(this["webpackJsonpreact-styling-exercise"]=this["webpackJsonpreact-styling-exercise"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},27:function(e,t,n){"use strict";n.r(t);var r,a,i,s,l,c=n(0),o=n.n(c),d=n(12),u=n.n(d),p=(n(20),n(21),n(4)),h=n(5),j=n(7),b=n(6),x=n(2),O=n(3),k=n(1),g=O.a.div(r||(r=Object(x.a)(["\n  padding: 10px;\n  border: 1px solid black;\n  width: 60px;\n"]))),v=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(k.jsx)(g,{onClick:function(){return e.props.onClick(e.props.value)},style:this.props.style,children:this.props.value})}}]),n}(c.Component),C=O.a.div(a||(a=Object(x.a)(["\n  padding: 10px;\n  border: 1px solid black;\n  width: 60px;\n"]))),f=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(k.jsx)(C,{onClick:function(){return e.props.onClick(e.props.value)},style:this.props.style,children:this.props.value})}}]),n}(c.Component),y=O.a.div(i||(i=Object(x.a)(["\n  border: 1px solid black;\n  width: 410px;\n  height: 70px;\n  text-align: right;\n  margin-bottom: 10px;\n  margin-left: 14px;\n  padding: 5px;\n"]))),m=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){return Object(p.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(k.jsxs)(y,{children:[Object(k.jsx)("div",{children:this.props.value.first}),Object(k.jsx)("div",{children:this.props.value.operator}),Object(k.jsx)("div",{children:this.props.value.second})]})}}]),n}(c.Component),A=O.a.div(s||(s=Object(x.a)(["\n  width: 450px;\n  height: 600px;\n  border: 1px solid black;\n"]))),S=O.a.div(l||(l=Object(x.a)(['\n  display: grid;\n  justify-content: center;\n  grid-template-columns: 60px 60px 60px 60px;\n  grid-template-rows: 60px 60px 60px 60px 60px 60px;\n  grid-template-areas:\n    ". . . clear"\n    "n7 n8 n9 divide"\n    "n4 n5 n6 multiply"\n    "n1 n2 n3 subtract"\n    "neg n0 dec plus"\n    ". . . equals";\n  padding: 20px 30px 20px 10px;\n  grid-column-gap: 25px;\n  grid-row-gap: 4px;\n  border: 1px solid black;\n  width: 380px;\n  margin-left: 14px;\n']))),N=function(e){Object(j.a)(n,e);var t=Object(b.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={first:null,operator:null,second:null},e.handleNumberClick=function(t){e.state.operator?"+/-"===t?e.setState({second:-e.state.second}):"."===t?e.state.second?-1===e.state.second.toString().indexOf(".")&&e.setState({second:e.state.second+"."}):e.setState({second:"0."}):e.isValidLength(e.state.second)&&e.setState({second:"".concat(e.state.second||"").concat(t)}):"+/-"===t?e.setState({first:-e.state.first}):"."===t?e.state.first?-1===e.state.first.toString().indexOf(".")&&e.setState({first:e.state.first+"."}):e.setState({first:"0."}):e.isValidLength(e.state.first)&&e.setState({first:"".concat(e.state.first||"").concat(t)})},e.handleOperatorClick=function(t){if("="===t){var n=parseFloat(e.state.first),r=parseFloat(e.state.second);"+"===e.state.operator?e.setState({operator:null,first:n+r,second:null}):"/"===e.state.operator?e.setState({operator:null,first:n/r,second:null}):"-"===e.state.operator?e.setState({operator:null,first:n-r,second:null}):"x"===e.state.operator&&e.setState({operator:null,first:n*r,second:null})}else"C"===t?e.setState({first:null,second:null,operator:null}):e.setState({operator:t})},e.getScreenValue=function(){return e.state},e.isValidLength=function(e){return!e||e.toString().length<48},e}return Object(h.a)(n,[{key:"render",value:function(){return Object(k.jsxs)(A,{children:[Object(k.jsx)("header",{children:"Calculator"}),Object(k.jsx)(m,{value:this.getScreenValue()}),Object(k.jsxs)(S,{children:[Object(k.jsx)(v,{style:{gridArea:"n0"},value:0,onClick:this.handleNumberClick}),Object(k.jsx)(v,{style:{gridArea:"n1"},value:1,onClick:this.handleNumberClick}),Object(k.jsx)(v,{style:{gridArea:"n2"},value:2,onClick:this.handleNumberClick}),Object(k.jsx)(v,{style:{gridArea:"n3"},value:3,onClick:this.handleNumberClick}),Object(k.jsx)(v,{style:{gridArea:"n4"},value:4,onClick:this.handleNumberClick}),Object(k.jsx)(v,{style:{gridArea:"n5"},value:5,onClick:this.handleNumberClick}),Object(k.jsx)(v,{style:{gridArea:"n6"},value:6,onClick:this.handleNumberClick}),Object(k.jsx)(v,{style:{gridArea:"n7"},value:7,onClick:this.handleNumberClick}),Object(k.jsx)(v,{style:{gridArea:"n8"},value:8,onClick:this.handleNumberClick}),Object(k.jsx)(v,{style:{gridArea:"n9"},value:9,onClick:this.handleNumberClick}),Object(k.jsx)(v,{style:{gridArea:"neg"},value:"+/-",onClick:this.handleNumberClick}),Object(k.jsx)(v,{style:{gridArea:"dec"},value:".",onClick:this.handleNumberClick}),Object(k.jsx)(f,{style:{gridArea:"clear"},value:"C",onClick:this.handleOperatorClick}),Object(k.jsx)(f,{style:{gridArea:"divide"},value:"/",onClick:this.handleOperatorClick}),Object(k.jsx)(f,{style:{gridArea:"multiply"},value:"x",onClick:this.handleOperatorClick}),Object(k.jsx)(f,{style:{gridArea:"subtract"},value:"-",onClick:this.handleOperatorClick}),Object(k.jsx)(f,{style:{gridArea:"plus"},value:"+",onClick:this.handleOperatorClick}),Object(k.jsx)(f,{style:{gridArea:"equals"},value:"=",onClick:this.handleOperatorClick})]})]})}}]),n}(c.Component);var w=function(){return Object(k.jsx)("div",{className:"App",children:Object(k.jsx)(N,{})})};u.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(w,{})}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.30bcdd95.chunk.js.map