let J=!1,tr=!1;function Jr(){J=!0}const Qr=1,tn=2,rn=16,rr=2,nr="[",er="[!",lr="]",xt={},nn=Symbol(),ht=!1;var ar=Array.isArray,ur=Array.prototype.indexOf,en=Array.from,sr=Object.defineProperty,yt=Object.getOwnPropertyDescriptor,or=Object.getOwnPropertyDescriptors,ln=Object.prototype,an=Array.prototype,ir=Object.getPrototypeOf;function un(t){return t()}function bt(t){for(var r=0;r<t.length;r++)t[r]()}const y=2,kt=4,H=8,_t=16,x=32,Y=64,$=128,R=256,K=512,p=1024,b=2048,q=4096,I=8192,S=16384,fr=32768,At=65536,_r=1<<19,Dt=1<<20,wt=Symbol("$state"),sn=Symbol("");function Ot(t){return t===this.v}function cr(t,r){return t!=t?r==r:t!==r||t!==null&&typeof t=="object"||typeof t=="function"}function Nt(t){return!cr(t,this.v)}function vr(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function pr(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function dr(t){throw new Error("https://svelte.dev/e/effect_orphan")}function hr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function on(){throw new Error("https://svelte.dev/e/hydration_failed")}function fn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function _n(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function yr(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function wr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function Rt(t,r){var n={f:0,v:t,reactions:null,equals:Ot,rv:0,wv:0};return n}function Er(t,r=!1){const n=Rt(t);return r||(n.equals=Nt),J&&c!==null&&c.l!==null&&(c.l.s??=[]).push(n),n}function cn(t,r=!1){return gr(Er(t,r))}function gr(t){return s!==null&&(s.f&y)!==0&&(m===null?Mr([t]):m.push(t)),t}function mr(t,r){return s!==null&&Q()&&(s.f&(y|_t))!==0&&(m===null||!m.includes(t))&&wr(),Tr(t,r)}function Tr(t,r){return t.equals(r)||(t.v,t.v=r,t.wv=Gt(),qt(t,b),Q()&&i!==null&&(i.f&p)!==0&&(i.f&(x|Y))===0&&(T===null?Lr([t]):T.push(t))),r}function qt(t,r){var n=t.reactions;if(n!==null)for(var e=Q(),a=n.length,l=0;l<a;l++){var u=n[l],o=u.f;(o&b)===0&&(!e&&u===i||(E(u,r),(o&(p|R))!==0&&((o&y)!==0?qt(u,q):nt(u))))}}function Ct(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function vn(t){O=t}let g;function G(t){if(t===null)throw Ct(),xt;return g=t}function xr(){return G(B(g))}function pn(t){if(O){if(B(g)!==null)throw Ct(),xt;g=t}}function dn(){for(var t=0,r=g;;){if(r.nodeType===8){var n=r.data;if(n===lr){if(t===0)return r;t-=1}else(n===nr||n===er)&&(t+=1)}var e=B(r);r.remove(),r=e}}var Et,It,St;function hn(){if(Et===void 0){Et=window;var t=Element.prototype,r=Node.prototype;It=yt(r,"firstChild").get,St=yt(r,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function Ft(t=""){return document.createTextNode(t)}function lt(t){return It.call(t)}function B(t){return St.call(t)}function yn(t,r){if(!O)return lt(t);var n=lt(g);return n===null&&(n=g.appendChild(Ft())),G(n),n}function wn(t,r=1,n=!1){let e=O?g:t;for(var a;r--;)a=e,e=B(e);if(!O)return e;var l=e?.nodeType;if(n&&l!==3){var u=Ft();return e===null?a?.after(u):e.before(u),G(u),u}return G(e),e}function En(t){t.textContent=""}function br(t){var r=y|b;i===null?r|=R:i.f|=Dt;var n=s!==null&&(s.f&y)!==0?s:null;const e={children:null,ctx:c,deps:null,equals:Ot,f:r,fn:t,reactions:null,rv:0,v:null,wv:0,parent:n??i};return n!==null&&(n.children??=[]).push(e),e}function gn(t){const r=br(t);return r.equals=Nt,r}function Mt(t){var r=t.children;if(r!==null){t.children=null;for(var n=0;n<r.length;n+=1){var e=r[n];(e.f&y)!==0?ct(e):N(e)}}}function kr(t){for(var r=t.parent;r!==null;){if((r.f&y)===0)return r;r=r.parent}return null}function Lt(t){var r,n=i;A(kr(t));try{Mt(t),r=Zt(t)}finally{A(n)}return r}function jt(t){var r=Lt(t),n=(D||(t.f&R)!==0)&&t.deps!==null?q:p;E(t,n),t.equals(r)||(t.v=r,t.wv=Gt())}function ct(t){Mt(t),j(t,0),E(t,S),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Ht(t){i===null&&s===null&&dr(),s!==null&&(s.f&R)!==0&&pr(),pt&&vr()}function Ar(t,r){var n=r.last;n===null?r.last=r.first=t:(n.next=t,t.prev=n,r.last=t)}function F(t,r,n,e=!0){var a=(t&Y)!==0,l=i,u={ctx:c,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|b,first:null,fn:r,last:null,next:null,parent:a?null:l,prev:null,teardown:null,transitions:null,wv:0};if(n){var o=C;try{gt(!0),rt(u),u.f|=fr}catch(v){throw N(u),v}finally{gt(o)}}else r!==null&&nt(u);var _=n&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&(Dt|$))===0;if(!_&&!a&&e&&(l!==null&&Ar(u,l),s!==null&&(s.f&y)!==0)){var w=s;(w.children??=[]).push(u)}return u}function Dr(t){const r=F(H,null,!1);return E(r,p),r.teardown=t,r}function mn(t){Ht();var r=i!==null&&(i.f&x)!==0&&c!==null&&!c.m;if(r){var n=c;(n.e??=[]).push({fn:t,effect:i,reaction:s})}else{var e=Yt(t);return e}}function Tn(t){return Ht(),vt(t)}function xn(t){const r=F(Y,t,!0);return(n={})=>new Promise(e=>{n.outro?Rr(r,()=>{N(r),e(void 0)}):(N(r),e(void 0))})}function Yt(t){return F(kt,t,!1)}function bn(t,r){var n=c,e={effect:null,ran:!1};n.l.r1.push(e),e.effect=vt(()=>{t(),!e.ran&&(e.ran=!0,mr(n.l.r2,!0),$r(r))})}function kn(){var t=c;vt(()=>{if(Wr(t.l.r2)){for(var r of t.l.r1){var n=r.effect;(n.f&p)!==0&&E(n,q),M(n)&&rt(n),r.ran=!1}t.l.r2.v=!1}})}function vt(t){return F(H,t,!0)}function An(t){return Or(t)}function Or(t,r=0){return F(H|_t|r,t,!0)}function Dn(t,r=!0){return F(H|x,t,!0,r)}function Bt(t){var r=t.teardown;if(r!==null){const n=pt,e=s;mt(!0),k(null);try{r.call(null)}finally{mt(n),k(e)}}}function Pt(t){var r=t.deriveds;if(r!==null){t.deriveds=null;for(var n=0;n<r.length;n+=1)ct(r[n])}}function Ut(t,r=!1){var n=t.first;for(t.first=t.last=null;n!==null;){var e=n.next;N(n,r),n=e}}function Nr(t){for(var r=t.first;r!==null;){var n=r.next;(r.f&x)===0&&N(r),r=n}}function N(t,r=!0){var n=!1;if((r||(t.f&_r)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,a=t.nodes_end;e!==null;){var l=e===a?null:B(e);e.remove(),e=l}n=!0}Ut(t,r&&!n),Pt(t),j(t,0),E(t,S);var u=t.transitions;if(u!==null)for(const _ of u)_.stop();Bt(t);var o=t.parent;o!==null&&o.first!==null&&Vt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Vt(t){var r=t.parent,n=t.prev,e=t.next;n!==null&&(n.next=e),e!==null&&(e.prev=n),r!==null&&(r.first===t&&(r.first=e),r.last===t&&(r.last=n))}function Rr(t,r){var n=[];Wt(t,n,!0),qr(n,()=>{N(t),r&&r()})}function qr(t,r){var n=t.length;if(n>0){var e=()=>--n||r();for(var a of t)a.out(e)}else r()}function Wt(t,r,n){if((t.f&I)===0){if(t.f^=I,t.transitions!==null)for(const u of t.transitions)(u.is_global||n)&&r.push(u);for(var e=t.first;e!==null;){var a=e.next,l=(e.f&At)!==0||(e.f&x)!==0;Wt(e,r,l?n:!1),e=a}}}function On(t){$t(t,!0)}function $t(t,r){if((t.f&I)!==0){t.f^=I,(t.f&p)===0&&(t.f^=p),M(t)&&(E(t,b),nt(t));for(var n=t.first;n!==null;){var e=n.next,a=(n.f&At)!==0||(n.f&x)!==0;$t(n,a?r:!1),n=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||r)&&l.in()}}const Cr=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let at=!1,ut=!1,st=[],ot=[];function Ir(){at=!1;const t=st.slice();st=[],bt(t)}function Sr(){ut=!1;const t=ot.slice();ot=[],bt(t)}function Fr(t){at||(at=!0,queueMicrotask(Ir)),st.push(t)}function Nn(t){ut||(ut=!0,Cr(Sr)),ot.push(t)}let W=!1,X=!1,Z=null,C=!1,pt=!1;function gt(t){C=t}function mt(t){pt=t}let it=[],L=0;let s=null;function k(t){s=t}let i=null;function A(t){i=t}let m=null;function Mr(t){m=t}let d=null,h=0,T=null;function Lr(t){T=t}let Kt=1,z=0,D=!1,c=null;function Gt(){return++Kt}function Q(){return!J||c!==null&&c.l===null}function M(t){var r=t.f;if((r&b)!==0)return!0;if((r&q)!==0){var n=t.deps,e=(r&R)!==0;if(n!==null){var a,l,u=(r&K)!==0,o=e&&i!==null&&!D,_=n.length;if(u||o){for(a=0;a<_;a++)l=n[a],(u||!l?.reactions?.includes(t))&&(l.reactions??=[]).push(t);u&&(t.f^=K)}for(a=0;a<_;a++)if(l=n[a],M(l)&&jt(l),l.wv>t.wv)return!0}(!e||i!==null&&!D)&&E(t,p)}return!1}function jr(t,r){for(var n=r;n!==null;){if((n.f&$)!==0)try{n.fn(t);return}catch{n.f^=$}n=n.parent}throw W=!1,t}function Hr(t){return(t.f&S)===0&&(t.parent===null||(t.parent.f&$)===0)}function tt(t,r,n,e){if(W){if(n===null&&(W=!1),Hr(r))throw t;return}n!==null&&(W=!0);{jr(t,r);return}}function Xt(t,r,n=0){var e=t.reactions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a];(l.f&y)!==0?Xt(l,r,n+1):r===l&&(n===0?E(l,b):(l.f&p)!==0&&E(l,q),nt(l))}}function Zt(t){var r=d,n=h,e=T,a=s,l=D,u=m,o=c,_=t.f;d=null,h=0,T=null,s=(_&(x|Y))===0?t:null,D=!C&&(_&R)!==0,m=null,c=t.ctx,z++;try{var w=(0,t.fn)(),v=t.deps;if(d!==null){var f;if(j(t,h),v!==null&&h>0)for(v.length=h+d.length,f=0;f<d.length;f++)v[h+f]=d[f];else t.deps=v=d;if(!D)for(f=h;f<v.length;f++)(v[f].reactions??=[]).push(t)}else v!==null&&h<v.length&&(j(t,h),v.length=h);if(Q()&&T!==null&&(t.f&(y|q|b))===0)for(f=0;f<T.length;f++)Xt(T[f],t);return a!==null&&z++,w}finally{d=r,h=n,T=e,s=a,D=l,m=u,c=o}}function Yr(t,r){let n=r.reactions;if(n!==null){var e=ur.call(n,t);if(e!==-1){var a=n.length-1;a===0?n=r.reactions=null:(n[e]=n[a],n.pop())}}n===null&&(r.f&y)!==0&&(d===null||!d.includes(r))&&(E(r,q),(r.f&(R|K))===0&&(r.f^=K),j(r,0))}function j(t,r){var n=t.deps;if(n!==null)for(var e=r;e<n.length;e++)Yr(t,n[e])}function rt(t){var r=t.f;if((r&S)===0){E(t,p);var n=i,e=c;i=t;try{(r&_t)!==0?Nr(t):Ut(t),Pt(t),Bt(t);var a=Zt(t);t.teardown=typeof a=="function"?a:null,t.wv=Kt;var l=t.deps,u;ht&&tr&&t.f&b}catch(o){tt(o,t,n,e||t.ctx)}finally{i=n}}}function Br(){if(L>1e3){L=0;try{hr()}catch(t){if(Z!==null)tt(t,Z,null);else throw t}}L++}function Pr(t){var r=t.length;if(r!==0){Br();var n=C;C=!0;try{for(var e=0;e<r;e++){var a=t[e];(a.f&p)===0&&(a.f^=p);var l=[];zt(a,l),Ur(l)}}finally{C=n}}}function Ur(t){var r=t.length;if(r!==0)for(var n=0;n<r;n++){var e=t[n];if((e.f&(S|I))===0)try{M(e)&&(rt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Vt(e):e.fn=null))}catch(a){tt(a,e,null,e.ctx)}}}function Vr(){if(X=!1,L>1001)return;const t=it;it=[],Pr(t),X||(L=0,Z=null)}function nt(t){X||(X=!0,queueMicrotask(Vr)),Z=t;for(var r=t;r.parent!==null;){r=r.parent;var n=r.f;if((n&(Y|x))!==0){if((n&p)===0)return;r.f^=p}}it.push(r)}function zt(t,r){var n=t.first,e=[];t:for(;n!==null;){var a=n.f,l=(a&x)!==0,u=l&&(a&p)!==0,o=n.next;if(!u&&(a&I)===0)if((a&H)!==0){if(l)n.f^=p;else try{M(n)&&rt(n)}catch(f){tt(f,n,null,n.ctx)}var _=n.first;if(_!==null){n=_;continue}}else(a&kt)!==0&&e.push(n);if(o===null){let f=n.parent;for(;f!==null;){if(t===f)break t;var w=f.next;if(w!==null){n=w;continue t}f=f.parent}}n=o}for(var v=0;v<e.length;v++)_=e[v],r.push(_),zt(_,r)}function Wr(t){var r=t.f,n=(r&y)!==0;if(n&&(r&S)!==0){var e=Lt(t);return ct(t),e}if(s!==null){m!==null&&m.includes(t)&&yr();var a=s.deps;t.rv<z&&(t.rv=z,d===null&&a!==null&&a[h]===t?h++:d===null?d=[t]:d.push(t))}else if(n&&t.deps===null)for(var l=t,u=l.parent,o=l;u!==null;)if((u.f&y)!==0){var _=u;o=_,u=_.parent}else{var w=u;w.deriveds?.includes(o)||(w.deriveds??=[]).push(o);break}return n&&(l=t,M(l)&&jt(l)),t.v}function $r(t){const r=s;try{return s=null,t()}finally{s=r}}const Kr=-7169;function E(t,r){t.f=t.f&Kr|r}function Rn(t,r=!1,n){c={p:c,c:null,e:null,m:!1,s:t,x:null,l:null},J&&!r&&(c.l={s:null,u:null,r1:[],r2:Rt(!1)})}function qn(t){const r=c;if(r!==null){const u=r.e;if(u!==null){var n=i,e=s;r.e=null;try{for(var a=0;a<u.length;a++){var l=u[a];A(l.effect),k(l.reaction),Yt(l.fn)}}finally{A(n),k(e)}}c=r.p,r.m=!0}return{}}function Cn(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(wt in t)ft(t);else if(!Array.isArray(t))for(let r in t){const n=t[r];typeof n=="object"&&n&&wt in n&&ft(n)}}}function ft(t,r=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!r.has(t)){r.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ft(t[e],r)}catch{}const n=ir(t);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const e=or(n);for(let a in e){const l=e[a].get;if(l)try{l.call(t)}catch{}}}}}function Gr(t){var r=s,n=i;k(null),A(null);try{return t()}finally{k(r),A(n)}}const In=new Set,Sn=new Set;function Xr(t,r,n,e){function a(l){if(e.capture||Zr.call(r,l),!l.cancelBubble)return Gr(()=>n.call(this,l))}return t.startsWith("pointer")||t.startsWith("touch")||t==="wheel"?Fr(()=>{r.addEventListener(t,a,e)}):r.addEventListener(t,a,e),a}function Fn(t,r,n,e,a){var l={capture:e,passive:a},u=Xr(t,r,n,l);(r===document.body||r===window||r===document)&&Dr(()=>{r.removeEventListener(t,u,l)})}function Zr(t){var r=this,n=r.ownerDocument,e=t.type,a=t.composedPath?.()||[],l=a[0]||t.target,u=0,o=t.__root;if(o){var _=a.indexOf(o);if(_!==-1&&(r===document||r===window)){t.__root=r;return}var w=a.indexOf(r);if(w===-1)return;_<=w&&(u=_)}if(l=a[u]||t.target,l!==r){sr(t,"currentTarget",{configurable:!0,get(){return l||n}});var v=s,f=i;k(null),A(null);try{for(var P,dt=[];l!==null;){var et=l.assignedSlot||l.parentNode||l.host||null;try{var U=l["__"+e];if(U!==void 0&&!l.disabled)if(ar(U)){var[Jt,...Qt]=U;Jt.apply(l,[t,...Qt])}else U.call(l,t)}catch(V){P?dt.push(V):P=V}if(t.cancelBubble||et===r||et===null)break;l=et}if(P){for(let V of dt)queueMicrotask(()=>{throw V});throw P}}finally{t.__root=r,delete t.currentTarget,k(v),A(f)}}}function zr(t){var r=document.createElement("template");return r.innerHTML=t,r.content}function Tt(t,r){var n=i;n.nodes_start===null&&(n.nodes_start=t,n.nodes_end=r)}function Mn(t,r){var n=(r&rr)!==0,e,a=!t.startsWith("<!>");return()=>{if(O)return Tt(g,null),g;e===void 0&&(e=zr(a?t:"<!>"+t),e=lt(e));var l=n?document.importNode(e,!0):e.cloneNode(!0);return Tt(l,l),l}}function Ln(t,r){if(O){i.nodes_end=g,xr();return}t!==null&&t.before(r)}export{Ln as $,Qr as A,rn as B,B as C,ar as D,tn as E,Ct as F,xt as G,er as H,I,Tt as J,zr as K,Nn as L,sn as M,ir as N,or as O,Tn as P,mn as Q,c as R,$r as S,bt as T,un as U,Cn as V,br as W,Rn as X,mr as Y,bn as Z,kn as _,Dn as a,qn as a0,Mn as a1,cn as a2,An as a3,Fn as a4,yn as a5,wn as a6,pn as a7,wt as a8,ln as a9,an as aa,fn as ab,nn as ac,yt as ad,_n as ae,hn as af,nr as ag,on as ah,In as ai,Sn as aj,xn as ak,Zr as al,Dr as am,Or as b,Ft as c,en as d,Jr as e,i as f,Wr as g,O as h,Tr as i,Wt as j,En as k,qr as l,N as m,xr as n,gn as o,Rr as p,dn as q,On as r,G as s,vn as t,g as u,s as v,Er as w,Rt as x,lt as y,lr as z};
