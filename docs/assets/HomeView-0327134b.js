import{u as R,g as H,o as W,r as x,w as q,_ as m,a as r,c as l,b as s,t as d,n as u,d as F,F as f,e as p,f as h,h as w,T as L,i as V,j as D,p as G,k as b,l as U}from"./index-41f39876.js";var S;const I=typeof window<"u",z=e=>typeof e=="string",J=()=>{};I&&((S=window==null?void 0:window.navigator)!=null&&S.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function A(e){return typeof e=="function"?e():R(e)}function K(e){return e}function X(e){return H()?(W(e),!0):!1}function P(e){var t;const n=A(e);return(t=n==null?void 0:n.$el)!=null?t:n}const Q=I?window:void 0;I&&window.document;I&&window.navigator;I&&window.location;function Y(...e){let t,n,_,a;if(z(e[0])||Array.isArray(e[0])?([n,_,a]=e,t=Q):[t,n,_,a]=e,!t)return J;Array.isArray(n)||(n=[n]),Array.isArray(_)||(_=[_]);const o=[],i=()=>{o.forEach(v=>v()),o.length=0},c=(v,k,O,$)=>(v.addEventListener(k,O,$),()=>v.removeEventListener(k,O,$)),g=q(()=>[P(t),A(a)],([v,k])=>{i(),v&&o.push(...n.flatMap(O=>_.map($=>c(v,O,$,k))))},{immediate:!0,flush:"post"}),y=()=>{g(),i()};return X(y),y}const E=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},M="__vueuse_ssr_handlers__";E[M]=E[M]||{};E[M];function C(e,{window:t=Q,scrollTarget:n}={}){const _=x(!1),a=()=>{if(!t)return;const o=t.document,i=P(e);if(!i)_.value=!1;else{const c=i.getBoundingClientRect();_.value=c.top<=(t.innerHeight||o.documentElement.clientHeight)&&c.left<=(t.innerWidth||o.documentElement.clientWidth)&&c.bottom>=0&&c.right>=0}};return q(()=>P(e),()=>a(),{immediate:!0,flush:"post"}),t&&Y(n||t,"scroll",a,{capture:!1,passive:!0}),_}var N;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(N||(N={}));var Z=Object.defineProperty,j=Object.getOwnPropertySymbols,ee=Object.prototype.hasOwnProperty,te=Object.prototype.propertyIsEnumerable,T=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,se=(e,t)=>{for(var n in t||(t={}))ee.call(t,n)&&T(e,n,t[n]);if(j)for(var n of j(t))te.call(t,n)&&T(e,n,t[n]);return e};const ne={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};se({linear:K},ne);const ie={name:"PresentacionComponent",props:{data:{type:Object,required:!0}},data(){return{subtitulo:"",text:"",index:0,visibleCounter:!1}},created(){this.subtitulo=this.data.subtitulo},mounted(){setTimeout(this.typing,400)},methods:{typing(){this.index<this.subtitulo.length&&(this.text+=this.subtitulo.charAt(this.index),this.index++,setTimeout(this.typing,50))},setVisible(){this.visibleCounter=!0}},setup(){const e=x(null),t=C(e);return{target:e,targetIsVisible:t}},computed:{fadeClass(){return this.targetIsVisible&&!this.visibleCounter?(this.setVisible(),"fade-in fade-in-animation"):""}}};const ae={class:"presentacion",ref:"target"};function oe(e,t,n,_,a,o){return r(),l("div",ae,[s("div",{class:u(["presentacion-titulo text-h1",o.fadeClass]),style:{"animation-delay":"200ms"}},d(n.data.titulo),3),s("div",{class:u(["presentacion-sub-titulo text-h2",o.fadeClass]),style:{"animation-delay":"300ms"}},[F(d(a.text)+" ",1),s("span",{class:u(["blink",a.text.length===a.subtitulo.length?"blink-animation":""])},null,2)],2),s("div",{class:u(["presentacion-descripcion text-p",o.fadeClass]),style:{"animation-delay":"400ms"}},d(n.data.descripcion),3)],512)}const re=m(ie,[["render",oe]]),le={name:"SobreMiComponent",props:{data:{type:Object,required:!0}},data(){return{visibleCounter:!1}},setup(){const e=x(null),t=C(e);return{target:e,targetIsVisible:t}},methods:{setVisible(){this.visibleCounter=!0}},computed:{fadeClass(){return this.targetIsVisible&&!this.visibleCounter?(this.setVisible(),"fade-in fade-in-animation"):""}}};const ce={class:"sobre-mi",ref:"target"},de={class:"contenido-descripcion text-p"},ue={class:"contenido-tecnologias"},_e=["src"],he={class:"chips-icon-name"},fe={class:"contenido-imagen"},pe=["href"],me=["src"];function ve(e,t,n,_,a,o){return r(),l("div",ce,[s("div",{class:u(["titulo text-h2",o.fadeClass]),style:{"animation-delay":"200ms"}},d(n.data.titulo),3),s("div",{class:u(["contenido",o.fadeClass]),style:{"animation-delay":"300ms"}},[s("div",de,[(r(!0),l(f,null,p(n.data.parrafos,(i,c)=>(r(),l("div",{class:"parrafo text-p",key:c},d(i),1))),128)),s("div",ue,[(r(!0),l(f,null,p(n.data.tecnologias,(i,c)=>(r(),l("div",{class:"chips-icon",key:c},[s("img",{class:"chips-icon-svg",src:i.icono,alt:""},null,8,_e),s("div",he,d(i.nombre),1)]))),128))])]),s("div",fe,[s("a",{class:"img-wrapper",href:n.data.perfil_link,rel:"noopener noreferrer",target:"_blank"},[s("img",{src:n.data.imagen,alt:""},null,8,me)],8,pe)])],2)],512)}const be=m(le,[["render",ve]]),ge={name:"ExperienciaComponent",props:{data:{type:Object,required:!0}},data(){return{selected:[this.data.experiencias[0]],navs:[""],visibleCounter:!1}},created(){this.navs=this.data.experiencias.map(e=>e.empresa_abrev)},methods:{cambiarExperiencia(e){this.selected.splice(0,this.selected.length),this.selected.push(this.data.experiencias[e])},setVisible(){this.visibleCounter=!0}},setup(){const e=x(null),t=C(e);return{target:e,targetIsVisible:t}},computed:{fadeClass(){return this.targetIsVisible&&!this.visibleCounter?(this.setVisible(),"fade-in fade-in-animation"):""}}};const ye={class:"experiencia",ref:"target"},xe={class:"botonera"},Ce=["onClick"],ke={class:"contenido-box"},Oe={class:"text-h3"},$e=["href"],Ve={class:"contenido-descripcion"};function Ie(e,t,n,_,a,o){return r(),l("div",ye,[s("div",{class:u(["titulo text-h2",o.fadeClass]),style:{"animation-delay":"200ms"}},d(n.data.titulo),3),s("div",{class:u(["contenido text-p",o.fadeClass]),style:{"animation-delay":"300ms"}},[s("div",xe,[(r(!0),l(f,null,p(a.navs,(i,c)=>(r(),l("button",{key:i,onClick:g=>o.cambiarExperiencia(c),class:u(JSON.stringify(a.selected[0])===JSON.stringify(n.data.experiencias[c])?"active":"")},d(i),11,Ce))),128))]),s("div",ke,[h(L,{name:"slide-up"},{default:w(()=>[(r(!0),l(f,null,p(a.selected,i=>(r(),l("div",{class:"contenido-detalle",key:i.empresa_abrev},[s("div",Oe,[F(d(i.cargo)+" ",1),s("a",{class:"text-link",href:i.empresa_link,rel:"noopener noreferrer",target:"_blank"},d(i.empresa),9,$e)]),s("div",null,d(i.fecha),1),s("div",Ve,[s("ul",null,[(r(!0),l(f,null,p(i.funciones,c=>(r(),l("li",{key:c},d(c),1))),128))])])]))),128))]),_:1})])],2)],512)}const we=m(ge,[["render",Ie]]),Pe={name:"ProyectosComponent",props:{data:{type:Object,required:!0}},data(){return{visibleCounter:!1}},methods:{getLink(e){let t="";return e.demo_link?t=e.demo_link:e.git_link&&(t=e.git_link),t},setVisible(){this.visibleCounter=!0}},setup(){const e=x(null),t=C(e);return{target:e,targetIsVisible:t}},computed:{fadeClass(){return this.targetIsVisible&&!this.visibleCounter?(this.setVisible(),"fade-in fade-in-animation"):""}}};const Ee={class:"proyectos",ref:"target"},Me={class:"contenido"},Se=["href"],Ne=["src"],je={class:"text-h3 text-accent"},Te={class:"proyecto-descripcion"},qe={class:"chips"},Fe={class:"botonera"},Le=["href"],Ae=s("i",{class:"fa-brands fa-github"},null,-1),Qe=[Ae],Be=["href"],Re=s("i",{class:"fa-solid fa-arrow-up-right-from-square"},null,-1),He=[Re];function We(e,t,n,_,a,o){return r(),l("div",Ee,[s("div",{class:u(["titulo text-h2",o.fadeClass]),style:{"animation-delay":"200ms"}},d(n.data.titulo),3),s("div",Me,[(r(!0),l(f,null,p(n.data.proyectos,(i,c)=>(r(),l("div",{class:u(["proyecto text-p",[o.fadeClass,c%2===0?"position-left":"position-right"]]),style:{"animation-delay":"300ms"},key:c},[s("a",{class:"img-wrapper",href:o.getLink(i),rel:"noopener noreferrer",target:"_blank"},[s("img",{src:i.imagen,alt:""},null,8,Ne)],8,Se),s("div",{class:u(["proyecto-card",c%2===0?"position-left":"position-right"])},[s("div",je,d(i.titulo),1),s("div",Te,d(i.descripcion),1),s("div",qe,[(r(!0),l(f,null,p(i.tecnologias,(g,y)=>(r(),l("div",{class:"chip",key:y},d(g),1))),128))]),s("div",Fe,[i.git_link?(r(),l("a",{key:0,class:"icon-button text-h3",href:i.git_link,rel:"noopener noreferrer",target:"_blank"},Qe,8,Le)):V("",!0),i.demo_link?(r(),l("a",{key:1,class:"icon-button text-h3",href:i.demo_link,rel:"noopener noreferrer",target:"_blank"},He,8,Be)):V("",!0)])],2)],2))),128))])],512)}const De=m(Pe,[["render",We]]),Ge={name:"OtrosProyectosComponent",props:{data:{type:Object,required:!0}},data(){return{proyectos:[],visibleCounter:!1}},created(){this.proyectos=this.data.proyectos.slice(0,6)},methods:{getLink(e){let t="";return e.demo_link?t=e.demo_link:e.git_link&&(t=e.git_link),t},setVisible(){this.visibleCounter=!0},mostrarMas(){const e=this.proyectos.length,t=e+6,n=this.data.proyectos.slice(e,t);this.proyectos.length<=this.data.proyectos.length&&(this.proyectos=this.proyectos.concat(n))}},setup(){const e=x(null),t=C(e);return{target:e,targetIsVisible:t}},computed:{fadeClass(){return this.targetIsVisible&&!this.visibleCounter?(this.setVisible(),"fade-in fade-in-animation"):""}}};const Ue={class:"titulo text-h2",style:{"animation-delay":"200ms"}},ze=["href"],Je={class:"card-header"},Ke=s("div",{class:"text-h2 text-accent"},[s("i",{class:"fa-solid fa-code"})],-1),Xe={class:"card-opciones"},Ye=["href"],Ze=s("i",{class:"fa-brands fa-github"},null,-1),et=[Ze],tt=["href"],st=s("i",{class:"fa-solid fa-arrow-up-right-from-square"},null,-1),nt=[st],it={class:"card-titulo text-h3 text-accent"},at={class:"card-descripcion text-p"},ot={class:"chips"},rt={key:0,class:"mostrar-mas"};function lt(e,t,n,_,a,o){return r(),l("div",{class:u(["otros-proyectos",o.fadeClass]),ref:"target"},[s("div",Ue,d(n.data.titulo),1),s("div",{class:u(["contenido",o.fadeClass]),style:{"animation-delay":"300ms"}},[h(L,{name:"slide-up"},{default:w(()=>[(r(!0),l(f,null,p(a.proyectos,(i,c)=>(r(),l("a",{class:"card",href:o.getLink(i),rel:"noopener noreferrer",target:"_blank",key:c},[s("div",Je,[Ke,s("div",Xe,[i.git_link?(r(),l("a",{key:0,class:"icon-button text-h3",href:i.git_link,rel:"noopener noreferrer",target:"_blank"},et,8,Ye)):V("",!0),i.demo_link?(r(),l("div",{key:1,class:"icon-button text-h3",href:i.demo_link,rel:"noopener noreferrer",target:"_blank"},nt,8,tt)):V("",!0)])]),s("div",it,d(i.titulo),1),s("div",at,d(i.descripcion),1),s("div",ot,[(r(!0),l(f,null,p(i.tecnologias,(g,y)=>(r(),l("div",{class:"chip",key:y},d(g),1))),128))])],8,ze))),128))]),_:1})],2),h(D,null,{default:w(()=>[a.proyectos.length<n.data.proyectos.length?(r(),l("div",rt,[s("button",{class:"outline-button",onClick:t[0]||(t[0]=i=>o.mostrarMas())},d(n.data.boton_mostrar_mas),1)])):V("",!0)]),_:1})],2)}const ct=m(Ge,[["render",lt]]),dt={name:"ContactoComponent",props:{data:{type:Object,required:!0}},data(){return{visibleCounter:!1}},setup(){const e=x(null),t=C(e);return{target:e,targetIsVisible:t}},methods:{setVisible(){this.visibleCounter=!0}},computed:{fadeClass(){return this.targetIsVisible&&!this.visibleCounter?(this.setVisible(),"fade-in fade-in-animation"):""}}};const ut={class:"contacto",ref:"target"},_t=["href"];function ht(e,t,n,_,a,o){return r(),l("div",ut,[s("div",{class:u(["titulo text-h2",o.fadeClass]),style:{"animation-delay":"200ms"}},d(n.data.titulo),3),s("div",{class:u(["contenido text-p",o.fadeClass]),style:{"animation-delay":"250ms"}},d(n.data.descripcion),3),s("div",{class:u(["contacto-button",o.fadeClass]),style:{"animation-delay":"300ms"}},[s("a",{class:"outline-button",href:`mailto:${n.data.email}`,rel:"noopener noreferrer",target:"_blank"},d(n.data.boton_contacto),9,_t)],2)],512)}const ft=m(dt,[["render",ht]]),pt={name:"CopyrigthComponent"};const mt={class:"copyrigth"},vt=s("div",null,[s("a",{rel:"noopener noreferrer",target:"_blank",href:"https://github.com/felipevogtf/Portfolio",class:"text-link-secondary"},"Diseñado y construido por Felipe Vogt")],-1),bt=[vt];function gt(e,t,n,_,a,o){return r(),l("div",mt,bt)}const yt=m(pt,[["render",gt]]),xt={name:"RedesSociales",props:{data:{type:Object,required:!0}}};const Ct={class:"social"},kt=["href"];function Ot(e,t,n,_,a,o){return r(),l("div",Ct,[(r(!0),l(f,null,p(n.data.redes,(i,c)=>(r(),l("a",{class:"social-button text-h3",rel:"noopener noreferrer",target:"_blank",href:i.url,key:c},[s("i",{class:u(i.fontawesome_icon)},null,2)],8,kt))),128))])}const $t=m(xt,[["render",Ot]]),Vt={name:"NavbarComponent",props:{data:{type:Object,required:!0}},data(){return{showMobileMenu:!1,visibleCounter:!1}},methods:{showMenu(){this.showMobileMenu=!this.showMobileMenu},handleFocusOut(){setTimeout(()=>{this.showMobileMenu=!1},100)},setVisible(){this.visibleCounter=!0}},setup(){const e=x(null),t=C(e);return{target:e,targetIsVisible:t}},computed:{fadeClass(){return this.targetIsVisible&&!this.visibleCounter?(this.setVisible(),"fade-in fade-in-animation"):""}}};const It={class:"nav",ref:"target"},wt={class:"logo"},Pt=["src"],Et=s("i",{class:"fas fa-bars"},null,-1),Mt=[Et],St=["href"];function Nt(e,t,n,_,a,o){return r(),l("div",It,[s("div",{class:u(["nav-menu",o.fadeClass]),style:{"animation-delay":"200ms"},onFocusout:t[1]||(t[1]=(...i)=>o.handleFocusOut&&o.handleFocusOut(...i)),tabindex:"0"},[s("div",wt,[s("img",{src:n.data.logo,alt:""},null,8,Pt)]),s("div",{class:u(["nav-toggle",a.showMobileMenu?"active-toggle":""]),onClick:t[0]||(t[0]=i=>o.showMenu())},Mt,2),s("div",{class:u(["nav-content",a.showMobileMenu?"open-menu":"closed-menu"])},[(r(!0),l(f,null,p(n.data.items,(i,c)=>(r(),l("a",{key:c,href:`#${i.id}`},d(i.nombre),9,St))),128))],2)],34)],512)}const jt=m(Vt,[["render",Nt]]),Tt={components:{Presentacion:re,SobreMi:be,Experiencia:we,Proyectos:De,OtrosProyectos:ct,Contacto:ft,Copyrigth:yt,RedesSociales:$t,Navbar:jt},data(){return{data:null,styleObject:{}}},created(){this.data=G.data,this.styleObject={"--background":`url(${this.data.inicio.background})`}}};function qt(e,t,n,_,a,o){const i=b("Navbar"),c=b("Presentacion"),g=b("SobreMi"),y=b("Experiencia"),v=b("Proyectos"),k=b("OtrosProyectos"),O=b("Contacto"),$=b("Copyrigth"),B=b("RedesSociales");return r(),l("main",null,[h(i,{data:a.data.navbar},null,8,["data"]),s("section",{class:"main-background",style:U(a.styleObject)},[h(c,{id:a.data.inicio.id,data:a.data.inicio},null,8,["id","data"])],4),s("section",null,[h(g,{id:a.data.sobre_mi.id,data:a.data.sobre_mi,class:"section-margin"},null,8,["id","data"])]),s("section",null,[h(y,{id:a.data.experiencia.id,data:a.data.experiencia,class:"section-margin"},null,8,["id","data"])]),s("section",null,[h(v,{id:a.data.proyectos.id,data:a.data.proyectos,class:"section-margin"},null,8,["id","data"])]),s("section",null,[h(k,{id:a.data.otros_proyectos.id,data:a.data.otros_proyectos,class:"section-margin"},null,8,["id","data"])]),s("section",null,[h(O,{ref:"test",id:a.data.contacto.id,data:a.data.contacto,class:"section-margin"},null,8,["id","data"])]),s("section",null,[h($)]),h(B,{id:a.data.redes.id,data:a.data.redes},null,8,["id","data"])])}const Lt=m(Tt,[["render",qt]]);export{Lt as default};