import{s as w,n as d,o as x}from"../chunks/IVZS7HP5.js";import{S as E,i as b,e as g,c as v,a as y,d as i,m as c,g as k,p as j,t as I,s as M,b as S,f as z,h as f,j as C}from"../chunks/C3UJd6Qb.js";import{e as m}from"../chunks/Dh8dSmc_.js";function u(r,s,a){const e=r.slice();return e[3]=s[a],e[5]=a,e}function _(r){let s,a=r[3]+"",e,n;return{c(){s=g("div"),e=I(a),n=M(),this.h()},l(l){s=v(l,"DIV",{class:!0,key:!0});var t=y(s);e=S(t,a),n=z(t),t.forEach(i),this.h()},h(){c(s,"class","cell svelte-1dtlj0y"),c(s,"key",r[5])},m(l,t){k(l,s,t),f(s,e),f(s,n)},p(l,t){t&1&&a!==(a=l[3]+"")&&C(e,a)},d(l){l&&i(s)}}}function D(r){let s,a=m(r[0]),e=[];for(let n=0;n<a.length;n+=1)e[n]=_(u(r,a,n));return{c(){s=g("div");for(let n=0;n<e.length;n+=1)e[n].c();this.h()},l(n){s=v(n,"DIV",{class:!0});var l=y(s);for(let t=0;t<e.length;t+=1)e[t].l(l);l.forEach(i),this.h()},h(){c(s,"class","grid svelte-1dtlj0y")},m(n,l){k(n,s,l);for(let t=0;t<e.length;t+=1)e[t]&&e[t].m(s,null)},p(n,[l]){if(l&1){a=m(n[0]);let t;for(t=0;t<a.length;t+=1){const o=u(n,a,t);e[t]?e[t].p(o,l):(e[t]=_(o),e[t].c(),e[t].m(s,null))}for(;t<e.length;t+=1)e[t].d(1);e.length=a.length}},i:d,o:d,d(n){n&&i(s),j(e,n)}}}let p=11;function L(r,s,a){let e=[];function n(t){const o=t.key.toUpperCase(),h=Math.floor(Math.random()*e.length);a(0,e[h]=o,e),setTimeout(()=>{a(0,e[h]="",e)},1e5)}function l(){a(0,e=Array.from({length:p*p},()=>""))}return x(()=>(l(),window.addEventListener("keydown",n),()=>window.removeEventListener("keydown",n))),[e]}class A extends E{constructor(s){super(),b(this,s,L,D,w,{})}}export{A as component};
