import{c as l,a as n}from"./chunks/community-projects.c53947c7.js";import{C as y}from"./chunks/CardSingle.38ec60e1.js";import{d as g,o as a,c as i,k as e,n as h,F as d,D as _,N as b,t as c,l as u,H as C,w as f,p as j,m as w,_ as v,a as m,Q as P}from"./chunks/framework.f95d50c3.js";import"./chunks/CardSingle.vue_vue_type_style_index_0_scoped_681eb775_lang.4ed993c7.js";const k=s=>(j("data-v-cb2eccaf"),s=s(),w(),s),S={class:"community-project-categories"},A={class:"section-label filter"},$=k(()=>e("span",null,"Filter by Category",-1)),D=["onClick"],I={class:"community-projects"},W=["href"],N={class:"item-content"},B=["src"],E={class:"item-description"},z={class:"description-heading"},F={class:"project-title"},H={props:{},data(){return{selectedCategories:{},communityProjects:n}},methods:{clearSelectedCategories(){this.selectedCategories={},this.communityProjects=n},toggleSelectedCategory(s){if(this.selectedCategories[s]){const{[s]:o,...r}=this.selectedCategories;this.selectedCategories=r}else this.selectedCategories[s]=!0;this.communityProjects=Object.keys(this.selectedCategories).length===0?n:n.filter(o=>Object.keys(this.selectedCategories).includes(o.category))}}},O=g({...H,__name:"CommunityProjects",setup(s){return(o,r)=>(a(),i(d,null,[e("div",S,[e("div",A,[$,e("button",{class:h(!Object.keys(o.selectedCategories).length&&"disabled"),onClick:r[0]||(r[0]=(...t)=>o.clearSelectedCategories&&o.clearSelectedCategories(...t))},"Clear Filters",2)]),(a(!0),i(d,null,_(u(l),(t,p)=>(a(),i("button",{class:h(["project-category button",o.selectedCategories[p]&&"selected"]),style:b({"--category-rgb":t.rgb}),onClick:()=>o.toggleSelectedCategory(p)},c(t.titlePlural?t.titlePlural:t.title),15,D))),256))]),e("div",I,[(a(!0),i(d,null,_(o.communityProjects,t=>(a(),i("a",{class:"project-item",href:t.itemUrl},[C(y,null,{default:f(()=>[e("div",N,[e("img",{src:t.thumbnailUrl},null,8,B),e("div",E,[e("div",z,[e("span",F,c(t.title),1),e("span",{class:"project-category",style:b({"--category-rgb":u(l)[t.category].rgb})},c(u(l)[t.category].title),5)]),e("p",null,c(t.description),1)])])]),_:2},1024)],8,W))),256))])],64))}});const V=v(O,[["__scopeId","data-v-cb2eccaf"]]),U={id:"frontmatter-title",tabindex:"-1"},q=e("a",{class:"header-anchor",href:"#frontmatter-title","aria-label":'Permalink to "{{ $frontmatter.title }}"'},"​",-1),x=P('<p>This page is a tribute to our Community who have been using WebContainers over the past two years - and who have been building with WebContainer API since it was released in June 2022 in a private alpha. Here are some of the projects that are powered by it.</p><div class="tip custom-block"><p class="custom-block-title">Get your project featured!</p><p>Have a project you&#39;d like us to showcase here and on our social media? Reach out to our <a href="https://github.com/stackblitz/webcontainer-docs/issues/new?assignees=sylwiavargas&amp;labels=documentation&amp;template=%E2%9C%A8-feature-your-project.md&amp;title=%5B%E2%9C%A8+Project+submission%5D" target="_blank" rel="noreferrer">Developer Advocates</a>!</p></div><h2 id="projects-built-with-webcontainers" tabindex="-1">Projects built with WebContainers <a class="header-anchor" href="#projects-built-with-webcontainers" aria-label="Permalink to &quot;Projects built with WebContainers&quot;">​</a></h2>',3),G=e("br",null,null,-1),J=e("div",{class:"tip custom-block"},[e("p",{class:"custom-block-title"},"Get your project featured!"),e("p",null,[m("Have a project you'd like us to showcase here and on our social media? Reach out to our "),e("a",{href:"https://github.com/stackblitz/webcontainer-docs/issues/new?assignees=sylwiavargas&labels=documentation&template=%E2%9C%A8-feature-your-project.md&title=%5B%E2%9C%A8+Project+submission%5D",target:"_blank",rel:"noreferrer"},"Developer Advocates"),m("!")])],-1),M=JSON.parse('{"title":"Community Projects","description":"See what our Community have built with WebContainer API.","frontmatter":{"title":"Community Projects","description":"See what our Community have built with WebContainer API.","outline":[2,3],"head":[["meta",{"property":"og:title","content":"Community Projects"}],["meta",{"property":"og:image","content":"https://webcontainers.io/img/og/guide-community_inspirations.png"}],["meta",{"name":"twitter:title","content":"Community Projects"}],["meta",{"name":"twitter:description","content":"See what our Community have built with WebContainer API."}]]},"headers":[],"relativePath":"community-projects/all-projects.md","filePath":"community-projects/all-projects.md","lastUpdated":1678987958000}'),R={name:"community-projects/all-projects.md"},X=g({...R,setup(s){return(o,r)=>(a(),i("div",null,[e("h1",U,[m(c(o.$frontmatter.title)+" ",1),q]),x,C(V),G,J]))}});export{M as __pageData,X as default};
