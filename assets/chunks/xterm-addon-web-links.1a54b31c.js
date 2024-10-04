import{g as j}from"./commonjsHelpers.39b5b250.js";function A(x,m){for(var v=0;v<m.length;v++){const l=m[v];if(typeof l!="string"&&!Array.isArray(l)){for(const u in l)if(u!=="default"&&!(u in x)){const _=Object.getOwnPropertyDescriptor(l,u);_&&Object.defineProperty(x,u,_.get?_:{enumerable:!0,get:()=>l[u]})}}}return Object.freeze(Object.defineProperty(x,Symbol.toStringTag,{value:"Module"}))}var O={exports:{}};(function(x,m){(function(v,l){x.exports=l()})(self,function(){return(()=>{var v={6:(f,d)=>{Object.defineProperty(d,"__esModule",{value:!0}),d.LinkComputer=d.WebLinkProvider=void 0,d.WebLinkProvider=class{constructor(g,e,t,r={}){this._terminal=g,this._regex=e,this._handler=t,this._options=r}provideLinks(g,e){const t=i.computeLink(g,this._regex,this._terminal,this._handler);e(this._addCallbacks(t))}_addCallbacks(g){return g.map(e=>(e.leave=this._options.leave,e.hover=(t,r)=>{if(this._options.hover){const{range:s}=e;this._options.hover(t,r,s)}},e))}};class i{static computeLink(e,t,r,s){const h=new RegExp(t.source,(t.flags||"")+"g"),[n,o]=i._getWindowedLineStrings(e-1,r),a=n.join("");let c;const b=[];for(;c=h.exec(a);){const p=c[0];try{const P=new URL(p),S=decodeURI(P.toString());if(p!==S&&p+"/"!==S)continue}catch{continue}const[L,k]=i._mapStrIdx(r,o,0,c.index),[W,y]=i._mapStrIdx(r,L,k,p.length);if(L===-1||k===-1||W===-1||y===-1)continue;const C={start:{x:k+1,y:L+1},end:{x:y,y:W+1}};b.push({range:C,text:p,activate:s})}return b}static _getWindowedLineStrings(e,t){let r,s=e,h=e,n=0,o="";const a=[];if(r=t.buffer.active.getLine(e)){const c=r.translateToString(!0);if(r.isWrapped&&c[0]!==" "){for(n=0;(r=t.buffer.active.getLine(--s))&&n<2048&&(o=r.translateToString(!0),n+=o.length,a.push(o),r.isWrapped&&o.indexOf(" ")===-1););a.reverse()}for(a.push(c),n=0;(r=t.buffer.active.getLine(++h))&&r.isWrapped&&n<2048&&(o=r.translateToString(!0),n+=o.length,a.push(o),o.indexOf(" ")===-1););}return[a,s]}static _mapStrIdx(e,t,r,s){const h=e.buffer.active,n=h.getNullCell();let o=r;for(;s;){const a=h.getLine(t);if(!a)return[-1,-1];for(let c=o;c<a.length;++c){a.getCell(c,n);const b=n.getChars();if(n.getWidth()&&(s-=b.length||1,c===a.length-1&&b==="")){const p=h.getLine(t+1);p&&p.isWrapped&&(p.getCell(0,n),n.getWidth()===2&&(s+=1))}if(s<0)return[t,c]}t++,o=0}return[t,o]}}d.LinkComputer=i}},l={};function u(f){var d=l[f];if(d!==void 0)return d.exports;var i=l[f]={exports:{}};return v[f](i,i.exports,u),i.exports}var _={};return(()=>{var f=_;Object.defineProperty(f,"__esModule",{value:!0}),f.WebLinksAddon=void 0;const d=u(6),i=/https?:[/]{2}[^\s"'!*(){}|\\\^<>`]*[^\s"':,.!?{}|\\\^~\[\]`()<>]/;function g(e,t){const r=window.open();if(r){try{r.opener=null}catch{}r.location.href=t}else console.warn("Opening link blocked as opener could not be cleared")}f.WebLinksAddon=class{constructor(e=g,t={}){this._handler=e,this._options=t}activate(e){this._terminal=e;const t=this._options,r=t.urlRegex||i;this._linkProvider=this._terminal.registerLinkProvider(new d.WebLinkProvider(this._terminal,r,this._handler,t))}dispose(){var e;(e=this._linkProvider)===null||e===void 0||e.dispose()}}})(),_})()})})(O);var w=O.exports;const I=j(w),T=A({__proto__:null,default:I},[w]);export{T as x};
