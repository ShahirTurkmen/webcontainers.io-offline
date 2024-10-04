import{d as u,o as s,c as i,n as y,N as D,_ as C,K as F,h as m,x as Y,k as o,H as h,w as v,a as d,e as k,Z as V,F as A,a2 as j,a3 as z,b as g,Q as U,O as H,p as T,m as $,l as M,s as w,a4 as W,a5 as G,a6 as K,a7 as Q,a8 as Z,a9 as q,aa as J,ab as X,ac as ee,ad as te,U as ae,u as ne,j as se,y as oe,ae as ce,af as ie,ag as le,ah as ue}from"./chunks/framework.f95d50c3.js";import{t as B}from"./chunks/theme.87d39298.js";import{C as E}from"./chunks/CardSingle.38ec60e1.js";import"./chunks/CardSingle.vue_vue_type_style_index_0_scoped_681eb775_lang.4ed993c7.js";const re=["aria-hidden"],de=u({__name:"LoadingIcon",props:{className:{},hidden:{type:Boolean},size:{}},setup(e){return(t,a)=>(s(),i("span",{class:y(["root",t.className]),"aria-hidden":t.hidden,style:D({"--size":`clamp(8px, ${t.size||18}px, 100px)`})},null,14,re))}});const pe=C(de,[["__scopeId","data-v-d9877c92"]]);function _e({eventName:e,pagePath:t,value:a}){typeof window.gtag=="function"&&window.gtag("event",e,{page_path:t,value:a})}const _=e=>(T("data-v-b16d9ad6"),e=e(),$(),e),fe={class:"feedbackContainer"},me=U('<form name="webcontainer-api-doc-feedback" data-netlify="true" hidden data-v-b16d9ad6><textarea name="feedback" data-v-b16d9ad6></textarea><input name="wasHelpful" data-v-b16d9ad6><input name="page" data-v-b16d9ad6></form><p class="title" data-v-b16d9ad6>Was this page helpful?</p>',2),he={class:"buttonContainer"},ve=_(()=>o("span",{class:"icon thumbsUp"},null,-1)),be=_(()=>o("span",{class:"icon thumbsDown"},null,-1)),ke=["onSubmit"],ye=_(()=>o("input",{type:"hidden",name:"form-name",value:"doc-feedback"},null,-1)),ge={class:"title label",for:"feedback"},Se=_(()=>o("span",{class:"icon thumbsUp"},null,-1)),we=_(()=>o("span",{class:"icon thumbsDown"},null,-1)),Ce=["disabled"],xe={key:0,class:"error"},Ae={key:1,class:"end"},Ee=_(()=>o("span",{class:"red"},"♥",-1)),Ne=u({__name:"Feedback",setup(e){const t=F(),a=m("START"),n=m(""),f=m(null),S=m(!1),b=m(!1);function x(l){[l==="YES"?"NO":"YES"].includes(a.value)||(a.value=l,H(()=>{var r;return(r=f.value)==null?void 0:r.focus()}))}function O(){a.value="START"}function L(l){return Object.keys(l).map(c=>encodeURIComponent(c)+"="+encodeURIComponent(l[c])).join("&")}function R(){S.value=!0,_e({eventName:"wc_doc_feedback_helpful",pagePath:t.path,value:a.value}),fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:L({"form-name":"webcontainer-api-doc-feedback",page:t.path,wasHelpful:a.value,feedback:n.value})}).then(()=>{a.value="END",n.value="",b.value=!1}).catch(l=>{b.value=!0}).finally(()=>{S.value=!1})}return Y(()=>t.path,()=>{a.value="START",n.value="",b.value=!1}),(l,c)=>(s(),i("div",fe,[me,o("div",he,[h(E,{link:!["NO"].includes(a.value)},{default:v(()=>[o("button",{class:y(["button",["YES"].includes(a.value)&&"active",["NO"].includes(a.value)&&"deselected"]),onClick:c[0]||(c[0]=r=>x("YES"))},[ve,d(" Yes ")],2)]),_:1},8,["link"]),h(E,{link:!["YES"].includes(a.value)},{default:v(()=>[o("button",{class:y(["button",["NO"].includes(a.value)&&"active",["YES"].includes(a.value)&&"deselected"]),onClick:c[1]||(c[1]=r=>x("NO"))},[be,d(" No ")],2)]),_:1},8,["link"]),["YES","NO"].includes(a.value)?(s(),i("button",{key:0,class:"cancel",onClick:O},"Cancel")):k("",!0)]),["YES","NO"].includes(a.value)?(s(),i("form",{key:0,class:"form",name:"doc-feedback",method:"post",onSubmit:V(R,["prevent"]),"data-netlify":"true"},[ye,o("label",ge,[a.value==="YES"?(s(),i(A,{key:0},[Se,d(" What did you find most helpful? ")],64)):(s(),i(A,{key:1},[we,d(" What should we improve? ")],64))]),j(o("textarea",{id:"feedback",name:"feedback",class:"textarea","onUpdate:modelValue":c[2]||(c[2]=r=>n.value=r),ref_key:"feedbackTextarea",ref:f,autofocus:""},null,512),[[z,n.value]]),o("button",{class:"button submit",type:"submit",disabled:n.value.length===0},[S.value?(s(),g(pe,{key:0,size:11})):k("",!0),d("Submit ")],8,Ce),b.value?(s(),i("p",xe,"Sorry, something went wrong. Please try it again later.")):k("",!0)],40,ke)):a.value==="END"?(s(),i("p",Ae,[d("Thank you for helping improve our documentation! "),Ee])):k("",!0)]))}});const Te=C(Ne,[["__scopeId","data-v-b16d9ad6"]]),$e=e=>(T("data-v-2b95e121"),e=e(),$(),e),Be=$e(()=>o("a",{href:"https://stackblitz.com/api-console",class:"link accent"},"Go to Console",-1)),Pe=[Be],Ie=u({__name:"AuthButtons",props:{place:{}},setup(e){return(t,a)=>(s(),i("div",{class:y(t.place==="navScreen"?"navScreenContainer":"navBarContainer")},Pe,2))}});const P=C(Ie,[["__scopeId","data-v-2b95e121"]]),Oe=u({__name:"NavBarAuthButtons",setup(e){return(t,a)=>(s(),g(P,{place:"navBar"}))}}),Le=u({__name:"NavScreenAuthButtons",setup(e){return(t,a)=>(s(),g(P,{place:"navScreen"}))}}),Re=u({__name:"CustomLayout",setup(e){const{Layout:t}=B;return(a,n)=>(s(),g(M(t),null,{"nav-bar-content-after":v(()=>[h(Oe)]),"doc-footer-before":v(()=>[h(Te)]),"nav-screen-content-after":v(()=>[h(Le)]),_:1}))}});var N;typeof document=="object"&&((N=document.body)==null||N.addEventListener("click",De,!0));function De(e){const t=e.target instanceof HTMLAnchorElement?e.target:null;t&&t.classList.contains("edit-link-button")&&!t.href.includes("initialPath=")&&(t.href=`${t.href}?initialPath=${document.location.pathname}`)}const Fe={...B,Layout:Re};function I(e){if(e.extends){const t=I(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const p=I(Fe),Ye=u({name:"VitePressApp",setup(){const{site:e}=ne();return se(()=>{oe(()=>{document.documentElement.lang=e.value.lang,document.documentElement.dir=e.value.dir})}),ce(),ie(),le(),p.setup&&p.setup(),()=>ue(p.Layout)}});async function Ve(){const e=ze(),t=je();t.provide(G,e);const a=K(e.route);return t.provide(Q,a),t.component("Content",Z),t.component("ClientOnly",q),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),p.enhanceApp&&await p.enhanceApp({app:t,router:e,siteData:J}),{app:t,router:e,data:a}}function je(){return X(Ye)}function ze(){let e=w,t;return ee(a=>{let n=te(a),f=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),f=ae(()=>import(n),[])),w&&(e=!1),f},p.NotFound)}w&&Ve().then(({app:e,router:t,data:a})=>{t.go().then(()=>{W(t.route,a.site),e.mount("#app")})});export{Ve as createApp};
