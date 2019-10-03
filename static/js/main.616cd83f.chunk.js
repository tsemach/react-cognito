(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,a){e.exports=a(654)},150:function(e,t,a){},153:function(e,t,a){},25:function(e,t,a){"use strict";a.r(t),console.log("process.env.REACT_APP_COGNITO_REGION","us-east-1"),console.log("process.env.REACT_APP_COGNITO_POOL_ID","us-east-1_fbGh7xuxh"),console.log("process.env.REACT_APP_COGNITO_CLIENT_ID","7628om56uev46dkp0vnc64f6nn"),t.default={api:{invokeUrl:"https://5bltcq602h.execute-api.us-west-2.amazonaws.com/prod"},cognito:{REGION:"us-east-1",USER_POOL_ID:"us-east-1_fbGh7xuxh",APP_CLIENT_ID:"7628om56uev46dkp0vnc64f6nn"}}},55:function(e,t){},654:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(140),c=a.n(s),o=(a(149),a(150),a(6)),l=a.n(o),i=a(13),m=a(7),u=a(8),d=a(10),p=a(9),h=a(11),f=a(657),g=a(658),E=a(659),v=(a(153),a(14)),w=a.n(v),b=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleLogOut=function(){var e=Object(i.a)(l.a.mark(function e(t){return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();try{v.Auth.signOut(),a.props.auth.setAuthStatus(!1),a.props.auth.setUser(null)}catch(n){console.log(n.message)}case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{className:"navbar-item",href:"/"},r.a.createElement("img",{src:"cognito-icon.png",width:"112",height:"28",alt:"hexal logo"})),r.a.createElement("p",{className:"navbar-item"},"Cognito Demo")),r.a.createElement("div",{id:"navbarBasicExample",className:"navbar-menu"},r.a.createElement("div",{className:"navbar-end"},r.a.createElement("div",{className:"navbar-item"},this.props.auth.isAuthenticated&&this.props.auth.user&&r.a.createElement("p",null,"Hello ",this.props.auth.user.username),r.a.createElement("div",{className:"buttons"},!this.props.auth.isAuthenticated&&r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"/react-cognito/register",className:"button is-primary"},r.a.createElement("strong",null,"Register")),r.a.createElement("a",{href:"/react-cognito/login",className:"button is-light"},"Log in")),this.props.auth.isAuthenticated&&r.a.createElement("a",{href:"/react-cognito/login",className:"button is-light",onClick:this.handleLogOut},"Log out"))))))}}]),t}(n.Component);var N=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleRegister=function(){console.log("HomeContent::handleRegister, auth:",a.props.auth),a.props.history.push("/registry")},a.handleLogin=function(){console.log("HomeContent::handleLogin, auth:",a.props.auth)},a.handleForgotPassword=function(){console.log("HomeContent::handleForgotPassword, auth:",a.props.auth)},a.handleChangePassword=function(){console.log("HomeContent::handleChangePassword, auth:",a.props.auth)},a.handleLogout=function(e){console.log("HomeContent::handleLogin, auth:",a.props.auth),e.preventDefault();try{v.Auth.signOut(),a.props.auth.setAuthStatus(!1),a.props.auth.setUser(null)}catch(t){console.log(t.message)}},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log("HomeContent::render, auth:",this.props),r.a.createElement("section",{className:"container"},r.a.createElement("div",{className:"columns features"},r.a.createElement("div",{className:"column is-3"},r.a.createElement("div",{className:"card is-shady"},r.a.createElement("div",{className:"card-content big-button"},r.a.createElement("a",{href:"/react-cognito/register"},r.a.createElement("div",{className:"content",onClick:this.handleRegister},r.a.createElement("h4",null,"Register"),r.a.createElement("p",null,"Click here to register using aws-amplify Auth.signUp(..)"),r.a.createElement("p",null,r.a.createElement("a",{href:"/"},"Learn more"))))))),r.a.createElement("div",{className:"column is-3"},r.a.createElement("div",{className:"card is-shady"},r.a.createElement("div",{className:"card-content big-button"},r.a.createElement("a",{href:"/react-cognito/login"},r.a.createElement("div",{className:"content",onClick:this.handleLogin},r.a.createElement("h4",null,"Login"),r.a.createElement("p",null,"Click here to register using aws-amplify Auth.signIn(..)"),r.a.createElement("p",null,r.a.createElement("a",{href:"/"},"Learn more"))))))),r.a.createElement("div",{className:"column is-3"},r.a.createElement("div",{className:"card is-shady"},r.a.createElement("div",{className:"card-content big-button"},r.a.createElement("a",{href:"/react-cognito/logout"},r.a.createElement("div",{className:"content",onClick:this.handleLogout},r.a.createElement("h4",null,"Logout"),r.a.createElement("p",null,"Click here to register using aws-amplify Auth.signOut(..)"),r.a.createElement("p",null,r.a.createElement("a",{href:"/"},"Learn more"))))))),r.a.createElement("div",{className:"column is-3"},r.a.createElement("div",{className:"card is-shady"},r.a.createElement("div",{className:"card-content big-button"},r.a.createElement("a",{href:"/react-cognito/forgotpassword"},r.a.createElement("div",{className:"content",onClick:this.handleForgotPassword},r.a.createElement("h4",null,"Forgot Password"),r.a.createElement("p",null,"Click here to register using aws-amplify Auth.forgotPassword(..)"),r.a.createElement("p",null,r.a.createElement("a",{href:"/"},"Learn more"))))))),r.a.createElement("div",{className:"column is-3"},r.a.createElement("div",{className:"card is-shady"},r.a.createElement("div",{className:"card-content big-button"},r.a.createElement("a",{href:"/react-cognito/changepassword"},r.a.createElement("div",{className:"content",onClick:this.handleChangePassword},r.a.createElement("h4",null,"Change Password"),r.a.createElement("p",null,"Click here to register using aws-amplify Auth.changePassword(..)"),r.a.createElement("p",null,r.a.createElement("a",{href:"/"},"Learn more")))))))))}}]),t}(n.Component);function y(e){return r.a.createElement(n.Fragment,null,r.a.createElement("br",null),r.a.createElement("div",{className:"box cta"},r.a.createElement("p",{className:"has-text-centered"},"This React application demostrate the use of AWS Cognito, user the Regsiter, Login, Logout, Forgot password and Change password to test it.")),r.a.createElement(N,e))}var O=a(141),C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isEditMode:!1,updatedproductname:a.props.name},a.handleProductEdit=function(e){e.preventDefault(),a.setState({isEditMode:!0})},a.handleEditSave=function(e){e.preventDefault(),a.setState({isEditMode:!1}),a.props.handleUpdateProduct(a.props.id,a.state.updatedproductname)},a.onAddProductNameChange=function(e){return a.setState({updatedproductname:e.target.value})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tile is-child box notification is-success"},this.props.isAdmin&&r.a.createElement(n.Fragment,null,r.a.createElement("a",{href:"/",onClick:this.handleProductEdit,className:"product-edit-icon"},r.a.createElement(O.a,{icon:"edit"})),r.a.createElement("button",{onClick:function(t){return e.props.handleDeleteProduct(e.props.id,t)},className:"delete"})),this.state.isEditMode?r.a.createElement("div",null,r.a.createElement("p",null,"Edit product name"),r.a.createElement("input",{className:"input is-medium",type:"text",placeholder:"Enter name",value:this.state.updatedproductname,onChange:this.onAddProductNameChange}),r.a.createElement("p",{className:"product-id"},"id: ",this.props.id),r.a.createElement("button",{type:"submit",className:"button is-info is-small",onClick:this.handleEditSave},"save")):r.a.createElement("div",null,r.a.createElement("p",{className:"product-title"},this.props.name),r.a.createElement("p",{className:"product-id"},"id: ",this.props.id)))}}]),t}(n.Component),j=a(27),k=a.n(j),I=a(25),P=(n.Component,a(16)),S=a(37),A=a(25),L=(n.Component,a(23));var x=function(e){return e.formerrors&&(e.formerrors.blankfield||e.formerrors.passwordmatch)?r.a.createElement("div",{className:"error container help is-danger"},r.a.createElement("div",{className:"row justify-content-center"},e.formerrors.passwordmatch?"Password value does not match confirm password value":""),r.a.createElement("div",{className:"row justify-content-center help is-danger"},e.formerrors.blankfield?"All fields are required":"")):e.apierrors?r.a.createElement("div",{className:"error container help is-danger"},r.a.createElement("div",{className:"row justify-content-center"},e.apierrors)):e.formerrors&&e.formerrors.cognito?r.a.createElement("div",{className:"error container help is-danger"},r.a.createElement("div",{className:"row justify-content-center"},e.formerrors.cognito.message)):r.a.createElement("div",null)};var _=function(e,t){for(var a=document.getElementsByClassName("is-danger"),n=0;n<a.length;n++)a[n].classList.contains("error")||a[n].classList.remove("is-danger");return t.hasOwnProperty("username")&&""===t.username?(document.getElementById("username").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("firstname")&&""===t.firstname?(document.getElementById("firstname").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("lastname")&&""===t.lastname?(document.getElementById("lastname").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("email")&&""===t.email?(document.getElementById("email").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("verificationcode")&&""===t.verificationcode?(document.getElementById("verificationcode").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("password")&&""===t.password?(document.getElementById("password").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("oldpassword")&&""===t.oldpassword?(document.getElementById("oldpassword").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("newpassword")&&""===t.newpassword?(document.getElementById("newpassword").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("confirmpassword")&&""===t.confirmpassword?(document.getElementById("confirmpassword").classList.add("is-danger"),{blankfield:!0}):t.hasOwnProperty("password")&&t.hasOwnProperty("confirmpassword")&&t.password!==t.confirmpassword?(document.getElementById("password").classList.add("is-danger"),document.getElementById("confirmpassword").classList.add("is-danger"),{passwordmatch:!0}):t.hasOwnProperty("newpassword")&&t.hasOwnProperty("confirmpassword")&&t.newpassword!==t.confirmpassword?(document.getElementById("newpassword").classList.add("is-danger"),document.getElementById("confirmpassword").classList.add("is-danger"),{passwordmatch:!0}):void 0},R=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:"",errors:{cognito:null,blankfield:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1}})},a.handleSubmit=function(){var e=Object(i.a)(l.a.mark(function e(t){var n,r,s;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.clearErrorState(),(n=_(t,a.state))&&a.setState({errors:Object(P.a)({},a.state.errors,n)}),e.prev=4,e.next=7,v.Auth.signIn(a.state.username,a.state.password);case 7:r=e.sent,console.log("user:",r),a.props.auth.setAuthStatus(!0),a.props.auth.setUser(r),a.props.history.push("/"),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(4),s=null,s=e.t0.message?e.t0:{message:e.t0},a.setState({errors:Object(P.a)({},a.state.errors,{cognito:s})});case 19:case"end":return e.stop()}},e,null,[[4,14]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(L.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Log in"),r.a.createElement(x,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{className:"input",type:"text",id:"username","aria-describedby":"usernameHelp",placeholder:"Enter username or email",value:this.state.username,onChange:this.onInputChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"password",placeholder:"Password",value:this.state.password,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{href:"/forgotpassword"},"Forgot password?"))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Login"))))))}}]),t}(n.Component),B=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",email:"",password:"",confirmpassword:"",errors:{cognito:null,blankfield:!1,passwordmatch:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1,passwordmatch:!1}})},a.handleSubmit=function(){var e=Object(i.a)(l.a.mark(function e(t){var n,r,s,c,o,i,m;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("register submit halder"),t.preventDefault(),a.clearErrorState(),(n=_(t,a.state))&&a.setState({errors:Object(P.a)({},a.state.errors,n)}),r=a.state,s=r.username,c=r.email,o=r.password,e.prev=6,e.next=9,v.Auth.signUp({username:s,password:o,attributes:{email:c}});case 9:i=e.sent,console.log("signUpResponse:",i),a.props.history.push("/welcome"),e.next=19;break;case 14:e.prev=14,e.t0=e.catch(6),m=null,m=e.t0.message?e.t0:{message:e.t0},a.setState({errors:Object(P.a)({},a.state.errors,{cognito:m})});case 19:case"end":return e.stop()}},e,null,[[6,14]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(L.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return console.log("Registry:render"),r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Register"),r.a.createElement(x,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{className:"input",type:"text",id:"username","aria-describedby":"userNameHelp",placeholder:"Enter username",value:this.state.username,onChange:this.onInputChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{className:"input",type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:this.state.email,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"password",placeholder:"Password",value:this.state.password,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"confirmpassword",placeholder:"Confirm password",value:this.state.confirmpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{href:"/forgotpassword"},"Forgot password?"))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Register"))))))}}]),t}(n.Component),D=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",errors:{cognito:null,blankfield:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1}})},a.forgotPasswordHandler=function(){var e=Object(i.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.clearErrorState(),(n=_(t,a.state))&&a.setState({errors:Object(P.a)({},a.state.errors,n)}),e.prev=4,e.next=7,v.Auth.forgotPassword(a.state.email);case 7:a.props.history.push("/react-cognito/forgotpasswordverification"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(4),console.log(e.t0);case 13:case"end":return e.stop()}},e,null,[[4,10]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(L.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Forgot your password?"),r.a.createElement("p",null,"Please enter the email address associated with your account and we'll email you a password reset link."),r.a.createElement(x,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.forgotPasswordHandler},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left has-icons-right"},r.a.createElement("input",{type:"email",className:"input",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:this.state.email,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{href:"/forgotpassword"},"Forgot password?"))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Submit"))))))}}]),t}(n.Component),H=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={verificationcode:"",email:"",newpassword:"",errors:{cognito:null,blankfield:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1}})},a.passwordVerificationHandler=function(){var e=Object(i.a)(l.a.mark(function e(t){var n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("passwordVerificationHandler"),t.preventDefault(),a.clearErrorState(),(n=_(t,a.state))&&a.setState({errors:Object(P.a)({},a.state.errors,n)}),e.prev=5,e.next=8,v.Auth.forgotPasswordSubmit(a.state.email,a.state.verificationcode,a.state.newpassword);case 8:a.props.history.push("/react-cognito/forgotpasswordverification"),a.props.history.push("/changepasswordconfirmation"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(5),console.log(e.t0);case 15:case"end":return e.stop()}},e,null,[[5,12]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(L.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Set new password"),r.a.createElement("p",null,"Please enter the verification code sent to your email address below, your email address and a new password."),r.a.createElement(x,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.passwordVerificationHandler},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("input",{type:"text",className:"input",id:"verificationcode","aria-describedby":"verificationCodeHelp",placeholder:"Enter verification code",value:this.state.verificationcode,onChange:this.onInputChange}))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"email",id:"email","aria-describedby":"emailHelp",placeholder:"Enter email",value:this.state.email,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-envelope"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{type:"password",className:"input",id:"newpassword",placeholder:"New password",value:this.state.newpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Submit"))))))}}]),t}(n.Component),U=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={oldpassword:"",newpassword:"",confirmpassword:"",errors:{cognito:null,blankfield:!1,passwordmatch:!1}},a.clearErrorState=function(){a.setState({errors:{cognito:null,blankfield:!1,passwordmatch:!1}})},a.handleSubmit=function(){var e=Object(i.a)(l.a.mark(function e(t){var n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),a.clearErrorState(),(n=_(t,a.state))&&a.setState({errors:Object(P.a)({},a.state.errors,n)}),e.prev=4,e.next=7,v.Auth.currentAuthenticatedUser();case 7:return r=e.sent,console.log("ChangePassword: user -",r),e.next=11,v.Auth.changePassword(r,a.state.oldpassword,a.state.newpassword);case 11:a.props.history.push("/react-cognito/changepasswordconfirmation"),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:case"end":return e.stop()}},e,null,[[4,14]])}));return function(t){return e.apply(this,arguments)}}(),a.onInputChange=function(e){a.setState(Object(L.a)({},e.target.id,e.target.value)),document.getElementById(e.target.id).classList.remove("is-danger")},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Change Password"),r.a.createElement(x,{formerrors:this.state.errors}),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"oldpassword",placeholder:"Old password",value:this.state.oldpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"newpassword",placeholder:"New password",value:this.state.newpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control has-icons-left"},r.a.createElement("input",{className:"input",type:"password",id:"confirmpassword",placeholder:"Confirm password",value:this.state.confirmpassword,onChange:this.onInputChange}),r.a.createElement("span",{className:"icon is-small is-left"},r.a.createElement("i",{className:"fas fa-lock"})))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("a",{href:"/forgotpassword"},"Forgot password?"))),r.a.createElement("div",{className:"field"},r.a.createElement("p",{className:"control"},r.a.createElement("button",{className:"button is-success"},"Change password"))))))}}]),t}(n.Component),T=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Change Password"),r.a.createElement("p",null,"Your password has been successfully updated!")))}}]),t}(n.Component);function F(){return r.a.createElement("section",{className:"section auth"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,"Welcome!"),r.a.createElement("p",null,"You have successfully registered a new account."),r.a.createElement("p",null,"We've sent you an email. Please click on the confirmation link to verify your account.")))}function G(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("a",{href:"http://www.tsemach.org"},"tsemach.org")," 2019. The source code is licensed MIT")))}var M=a(36),W=a(142);M.b.add(W.a),console.log("In App: add login/"),console.log("process.env.REACT_APP_COGNITO_REGION","us-east-1");var V=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={isAuthenticated:!1,isAuthenticating:!0,user:null},a.setAuthStatus=function(e){a.setState({isAuthenticated:e})},a.setUser=function(e){a.setState({user:e})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(l.a.mark(function e(){var t,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.Auth.currentSession();case 3:return t=e.sent,console.log("session:",t),this.setAuthStatus(!0),e.next=8,v.Auth.currentAuthenticatedUser();case 8:a=e.sent,this.setUser(a),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:this.setState({isAuthenticating:!1});case 16:case"end":return e.stop()}},e,this,[[0,12]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e={isAuthenticated:this.state.isAuthenticated,user:this.state.user,setAuthStatus:this.setAuthStatus,setUser:this.setUser};return!this.state.isAuthenticating&&r.a.createElement("div",{className:"App"},r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(b,{auth:e}),r.a.createElement(g.a,null,r.a.createElement(f.a,{basename:"react-cognito"},r.a.createElement(E.a,{exact:!0,path:"/",render:function(t){return r.a.createElement(y,Object.assign({},t,{auth:e}))}})),r.a.createElement(f.a,{basename:"react-cognito/login"},r.a.createElement(E.a,{exact:!0,path:"/react-cognito/login",render:function(t){return r.a.createElement(R,Object.assign({},t,{auth:e}))}})),r.a.createElement(f.a,{basename:"react-cognito"},r.a.createElement(E.a,{exact:!0,path:"/react-cognito/register",render:function(t){return r.a.createElement(B,Object.assign({},t,{auth:e}))}})),r.a.createElement(f.a,{basename:"react-cognito"},r.a.createElement(E.a,{exact:!0,path:"/react-cognito/forgotpassword",render:function(t){return r.a.createElement(D,Object.assign({},t,{auth:e}))}})),r.a.createElement(f.a,{basename:"react-cognito"},r.a.createElement(E.a,{exact:!0,path:"/react-cognito/forgotpasswordverification",render:function(t){return r.a.createElement(H,Object.assign({},t,{auth:e}))}})),r.a.createElement(f.a,{basename:"react-cognito"},r.a.createElement(E.a,{exact:!0,path:"/react-cognito/changepassword",render:function(t){return r.a.createElement(U,Object.assign({},t,{auth:e}))}})),r.a.createElement(f.a,{basename:"react-cognito"},r.a.createElement(E.a,{exact:!0,path:"/react-cognito/changepasswordconfirmation",render:function(t){return r.a.createElement(T,Object.assign({},t,{auth:e}))}})),r.a.createElement(f.a,{basename:"react-cognito"},r.a.createElement(E.a,{exact:!0,path:"/react-cognito/welcome",render:function(t){return r.a.createElement(F,Object.assign({},t,{auth:e}))}}))),r.a.createElement(G,null))))}}]),t}(n.Component),q=a(25);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log(q.default.cognito.REGION),console.log(q.default.cognito.USER_POOL_ID),console.log(q.default.cognito.APP_CLIENT_ID),console.log("index.js:",q.default),w.a.configure({Auth:{mandatorySignId:!0,region:q.default.cognito.REGION,userPoolId:q.default.cognito.USER_POOL_ID,userPoolWebClientId:q.default.cognito.APP_CLIENT_ID}}),c.a.render(r.a.createElement(V,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[144,1,2]]]);
//# sourceMappingURL=main.616cd83f.chunk.js.map