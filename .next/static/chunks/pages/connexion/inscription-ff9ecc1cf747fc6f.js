(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[691],{8483:function(e,r,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/connexion/inscription",function(){return s(563)}])},563:function(e,r,s){"use strict";s.r(r),s.d(r,{default:function(){return S}});var n=s(5893),t=s(962),a=s(1008),i=s(7536),o=s(9194),c=s(5675),l=s.n(c),d=s(7294),u=s(687),p=s(5241),m=s(1664),x=s.n(m),g=s(3572),h=s(2163);let f=e=>{let{form:r}=e,{control:s,onSubmit:t,errors:a,isLoading:i,register:o,handleSubmit:c}=r;return(0,n.jsxs)("form",{onSubmit:c(t),className:"pt-8 pb-5 space-y-5",children:[(0,n.jsx)(h.I,{isLoading:i,placeholder:"MartyMcFly@gmal.com",type:"email",register:o,errors:a,errorMsg:"Merci de renseigner ce champs.",id:"email"}),(0,n.jsx)(h.I,{isLoading:i,placeholder:"Mot de Passe",type:"password",register:o,errors:a,errorMsg:"Un mot de passe fort comporte au moins 11 caract\xe8res dont des caract\xe8res sp\xe9ciaux.",id:"password"}),(0,n.jsx)(h.I,{isLoading:i,placeholder:"Comment nous avez-vous connus ?",register:o,errors:a,errorMsg:"Merci de remplir ce champs SVP.",id:"how_did_you_know"}),(0,n.jsx)(g.z,{isLoading:i,type:"submit",fullWidth:!0,children:"S'inscrire"})]})},j=e=>{let{form:r}=e;return(0,n.jsxs)(o.W,{className:"grid grid-cols-2 gap-20 mb-32",children:[(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsx)("div",{className:"relative w-full h-[530px]",children:(0,n.jsx)(l(),{fill:!0,src:"/assets/svg/Register.svg",alt:"Register Image",className:"object-scale-down"})})}),(0,n.jsx)("div",{className:"flex items-center",children:(0,n.jsxs)(u.x,{padding_y:"py-5",children:[(0,n.jsxs)("div",{className:"flex items-center justify-between",children:[(0,n.jsx)(p.Z,{component:"h1",variant:"h5",children:"Inscription:"}),(0,n.jsxs)("div",{className:"flex items-center gap-2",children:[(0,n.jsx)(p.Z,{component:"span",variant:"caption4",theme:"grey",children:"D\xe9j\xe0 un compte ?"}),(0,n.jsx)(p.Z,{component:"span",variant:"caption4",theme:"primary",children:(0,n.jsx)(x(),{href:"/connexion",children:"Connexion"})})]})]}),(0,n.jsx)(f,{form:r})]})})]})};var v=s(7210),y=s(3977),w=s(4864);let b=(0,y.ZF)({apiKey:"AIzaSyDku59EJ6XoGak8uvdQxeq1B3DMWbRpwFo",authDomain:"monkeytest1-ec597.firebaseapp.com",projectId:"monkeytest1-ec597",storageBucket:"monkeytest1-ec597.appspot.com",messagingSenderId:"218322387768",appId:"1:218322387768:web:b8fcd8233c13e72e60f7cd"}),N=(0,w.v0)(b),_=async(e,r)=>{try{let s=await (0,v.Xb)(N,e,r);return{data:s.user}}catch(e){return{error:{code:e.code,message:e.message}}}};var I=s(5678);let k=function(){let{initial:e=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[r,s]=(0,d.useState)(e),n=()=>{s(!r)};return{value:r,setValue:s,toggle:n}},M=()=>{let{value:e,setValue:r,toggle:s}=k({initial:!1});console.log(e);let{handleSubmit:t,formState:{errors:a},register:o,setError:c,reset:l}=(0,i.cI)(),d=async e=>{let{email:s,password:n,how_did_you_know:t}=e,{error:a,data:i}=await _(s,n);if(a){r(!1),I.Am.error(a.message);return}I.Am.success("Inscription valid\xe9e !"),r(!1),l(),console.log(i)},u=async e=>{r(!0);let{password:s}=e;if(s.length<=5){c("password",{type:"manual",message:"Votre mot de passe doit comporter 6 caract\xe8res au minimum."});return}await d(e)};return(0,n.jsx)(j,{form:{errors:a,register:o,handleSubmit:t,onSubmit:u,isLoading:e}})};function S(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{title:"Inscription",description:"titre"}),(0,n.jsx)(a.A,{children:(0,n.jsx)(M,{})})]})}},687:function(e,r,s){"use strict";s.d(r,{x:function(){return a}});var n=s(5893),t=s(6010);let a=e=>{let{children:r,className:s,padding_x:a="px-9",padding_y:i="px9"}=e;return(0,n.jsx)("div",{className:(0,t.Z)("w-full border border-grey-400 rounded bg-white",s,a,i),children:r})}},2163:function(e,r,s){"use strict";s.d(r,{I:function(){return i}});var n=s(5893),t=s(6010),a=s(5241);s(7294);let i=e=>{var r;let{isLoading:s,placeholder:i,type:o="text",register:c,errors:l,errorMsg:d="Merci de renseigner ce champs.",id:u,required:p=!0,isAutoCompleted:m=!1}=e;return(0,n.jsxs)("div",{className:"space-y-2",children:[(0,n.jsx)("input",{type:o,placeholder:i,className:(0,t.Z)(s&&"cursor-not-allowed",l[u]?"placeholder-alert-danger text-alert-danger":"placeholder-alert-grey-600","w-full placeholder-grey-600 p-4 font-light border border-grey-400 rounded focus:outline-none focus:ring-1 focus:ring-primary"),disabled:s,...c(u,{required:{value:p,message:d}}),autoComplete:m?"on":"off"}),l[u]&&(0,n.jsx)(a.Z,{variant:"caption4",component:"div",theme:"danger",children:null===(r=l[u])||void 0===r?void 0:r.message})]})}}},function(e){e.O(0,[937,617,874,551,364,536,675,533,774,888,179],function(){return e(e.s=8483)}),_N_E=e.O()}]);