import{s as P,a as R,u as T,g as B,b as G,c as J,d as V}from"../chunks/IVZS7HP5.js";import{S as L,i as U,e as v,s as S,t as $,c as d,a as I,d as f,f as D,l as z,b as F,m as _,g as p,h as M,n as H,k as K,o as Q,p as W}from"../chunks/C3UJd6Qb.js";import{e as j}from"../chunks/Dh8dSmc_.js";import"../chunks/BNCjw44F.js";import{p as X}from"../chunks/CZyTPPK4.js";function q(r,t,s){const a=r.slice();return a[7]=t[s],a}function A(r){let t,s,a,u;return{c(){t=v("a"),s=v("img"),this.h()},l(o){t=d(o,"A",{href:!0});var l=I(t);s=d(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(f),this.h()},h(){V(s.src,a=Object.entries(r[7].sprites)[0][1])||_(s,"src",a),_(s,"alt"," sprite"),_(s,"class","pokemon-image svelte-10xi5ve"),_(t,"href",u="/search/"+r[7].name)},m(o,l){p(o,t,l),M(t,s)},p(o,l){l&1&&!V(s.src,a=Object.entries(o[7].sprites)[0][1])&&_(s,"src",a),l&1&&u!==(u="/search/"+o[7].name)&&_(t,"href",u)},d(o){o&&f(t)}}}function Y(r){let t,s,a,u,o,l,w="Clear Recent Pokémon",h,b,C,g,E,N;const x=r[4].default,m=R(x,r,r[3],null);let k=j(r[0]),i=[];for(let e=0;e<k.length;e+=1)i[e]=A(q(r,k,e));return{c(){t=v("main"),m&&m.c(),s=S(),a=v("div"),u=v("div");for(let e=0;e<i.length;e+=1)i[e].c();o=S(),l=v("button"),l.textContent=w,h=S(),b=v("div"),C=$(`\r
\r
\r
\r
\r
when sessionstorage is empty the website doesnt load, crashes fully`),this.h()},l(e){t=d(e,"MAIN",{class:!0});var c=I(t);m&&m.l(c),c.forEach(f),s=D(e),a=d(e,"DIV",{class:!0});var n=I(a);u=d(n,"DIV",{class:!0});var y=I(u);for(let O=0;O<i.length;O+=1)i[O].l(y);y.forEach(f),n.forEach(f),o=D(e),l=d(e,"BUTTON",{class:!0,"data-svelte-h":!0}),z(l)!=="svelte-8nm10i"&&(l.textContent=w),h=D(e),b=d(e,"DIV",{class:!0}),I(b).forEach(f),C=F(e,`\r
\r
\r
\r
\r
when sessionstorage is empty the website doesnt load, crashes fully`),this.h()},h(){_(t,"class","svelte-10xi5ve"),_(u,"class","recent-pokemon svelte-10xi5ve"),_(a,"class","recent-views svelte-10xi5ve"),_(l,"class","clear-button svelte-10xi5ve"),_(b,"class","backdrop svelte-10xi5ve")},m(e,c){p(e,t,c),m&&m.m(t,null),p(e,s,c),p(e,a,c),M(a,u);for(let n=0;n<i.length;n+=1)i[n]&&i[n].m(u,null);p(e,o,c),p(e,l,c),p(e,h,c),p(e,b,c),p(e,C,c),g=!0,E||(N=H(l,"click",r[1]),E=!0)},p(e,[c]){if(m&&m.p&&(!g||c&8)&&T(m,x,e,e[3],g?G(x,e[3],c,null):B(e[3]),null),c&1){k=j(e[0]);let n;for(n=0;n<k.length;n+=1){const y=q(e,k,n);i[n]?i[n].p(y,c):(i[n]=A(y),i[n].c(),i[n].m(u,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=k.length}},i(e){g||(K(m,e),g=!0)},o(e){Q(m,e),g=!1},d(e){e&&(f(t),f(s),f(a),f(o),f(l),f(h),f(b),f(C)),m&&m.d(e),W(i,e),E=!1,N()}}}function Z(r,t,s){let a;J(r,X,h=>s(2,a=h));let{$$slots:u={},$$scope:o}=t,l=[];function w(){sessionStorage.setItem("pokemons",""),s(0,l=[])}return r.$$set=h=>{"$$scope"in h&&s(3,o=h.$$scope)},r.$$.update=()=>{r.$$.dirty&4&&s(0,l=a.length>2?JSON.parse(a):"")},[l,w,a,o,u]}class ne extends L{constructor(t){super(),U(this,t,Z,Y,P,{})}}export{ne as component};
