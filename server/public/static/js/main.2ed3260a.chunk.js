(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,a){e.exports=a(55)},31:function(e,t,a){},32:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(23),o=a.n(l),c=(a(31),a(57)),i=a(3),s=a(4),u=a(6),m=a(5),h=a(7),p=(a(32),a(59)),d=a(58),f=a(12),b=a(56),g=function(){var e;return r.a.createElement("nav",{className:"nav-wrapper white darken-3"},r.a.createElement(b.a,(e={to:"/Home",className:"brand-logo",img:!0,scr:"./images/logo_transparent.png",width:"30",height:"30"},Object(f.a)(e,"className","align-left"),Object(f.a)(e,"alt","Digital Digest Logo"),e)),r.a.createElement("div",{className:"NavBar"},r.a.createElement("ul",null,r.a.createElement("a",{href:"/Collections"},"Collections"),r.a.createElement("a",{href:"/"},"Logout"))))},v=a(11),E=a.n(v),j=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.email,n=a.state.password,r=a.state.name;E.a.post("https://digital-digest.herokuapp.com/api/signup",{email:t,password:n,name:r}).then(function(e){a.setState({name:"",email:"",password:""}),a.props.history.push("/Home")}).catch(function(e){return console.log(e)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.state={name:"",email:"",password:""},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Signup"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"text",name:"name",placeholder:"your name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{name:"password",placeholder:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("button",{type:"submit",name:"submit"},"Submit!")))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleFormSubmit=function(e){e.preventDefault();var t=a.state.email,n=a.state.password;E.a.post("https://digital-digest.herokuapp.com/api/login",{email:t,password:n}).then(function(e){console.log("logged in",e),a.props.history.push("/Home")}).catch(function(e){return console.log(e.response)})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.state={email:"",password:""},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{type:"text",name:"email",placeholder:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{name:"password",placeholder:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("button",{type:"submit",name:"submit"},"Login!")))}}]),t}(n.Component),y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j,{history:this.props.history}),r.a.createElement(O,{history:this.props.history}))}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleForm=function(e){e.preventDefault(),console.log("form handled"),a.props.onSearch(a.state.searchTerm)},a.handleInputChange=function(e){a.setState({searchTerm:e.target.value})},a.state={searchTerm:""},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return console.log("this.props",this.props),r.a.createElement("form",{onSubmit:this.handleForm,action:"",autoComplete:"off",className:"form-horizontal",method:"post",acceptCharset:"utf-8",width:"300px",height:"350px"},r.a.createElement("div",{className:"input-group"},r.a.createElement("input",{type:"text",placeholder:"Search for...",ref:function(t){return e.search=t},onChange:this.handleInputChange}),r.a.createElement("span",{className:"input-group-btn"},r.a.createElement("button",{type:"submit",className:"btn btn-search"},"Search"))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).saveArticle=function(e){e.preventDefault(),E.a.post("https://digital-digest.herokuapp.com/api")},a.state={title:"",date:[],url:"",text:[],results:[]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"openArticleTab",value:function(){window.open("www.google.com","_blank")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"card-group-local"},this.props.mirResult.map(function(t,a){return null!==t?r.a.createElement("div",{className:"card-local",key:a},r.a.createElement("div",{className:"card-title-local"},r.a.createElement("h4",null,t.title)),r.a.createElement("br",null),r.a.createElement("span",{className:"card-footer-local"},r.a.createElement("button",{type:"redirect",onClick:e.saveArticle},"Like")),r.a.createElement("span",{className:"card-footer-local"},r.a.createElement("button",{target:"_blank",onClick:e.openArticleTab},"Go To"))):null}),";")}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).getInfo=function(e){var t="https://digital-digest.herokuapp.com/api/api/stories";e&&(t="https://digital-digest.herokuapp.com/api"+"/api/stories/".concat(e)),E.a.get(t).then(function(e){a.setState({results:e.data})})},a.state={results:[]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getInfo()}},{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",null,r.a.createElement(C,{onSearch:this.getInfo})),r.a.createElement(w,{mirResult:this.state.results}),r.a.createElement("div",null))}}]),t}(n.Component),N=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={collections:[]},a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;E.a.get("https://digital-digest.herokuapp.com/api/user/collections").then(function(t){e.setState({collections:t.data})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){return r.a.createElement("div",{className:"collections"},r.a.createElement("div",null,r.a.createElement("h1",null,"Collections"),r.a.createElement("div",{className:"folderGroup"},this.state.collections.map(function(e,t){return console.log("coleeeeeectionsdata",e),r.a.createElement("div",{className:"singleFolder",key:t},e.name)}),";")," "))}}]),t}(n.Component),S=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement("div",null,r.a.createElement(p.a,null,r.a.createElement(d.a,{path:"/",exact:!0,component:y}),r.a.createElement(d.a,{path:"/Home",exact:!0,component:k}),r.a.createElement(d.a,{path:"/Collections",exact:!0,component:N}))))}}]),t}(n.Component);o.a.render(r.a.createElement(c.a,null,r.a.createElement(S,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.2ed3260a.chunk.js.map