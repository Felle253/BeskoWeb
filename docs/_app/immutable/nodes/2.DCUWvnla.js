import{s as P,a as R,u as T,g as w,b as B,c as G,d as j}from"../chunks/IVZS7HP5.js";import{S as J,i as L,e as v,s as D,c as d,a as C,d as _,f as N,l as U,m,g as p,h as M,n as $,k as z,o as F,p as H}from"../chunks/C3UJd6Qb.js";import{e as q}from"../chunks/Dh8dSmc_.js";import"../chunks/BG3Us0aE.js";import{p as K}from"../chunks/CZyTPPK4.js";function x(r,t,s){const a=r.slice();return a[7]=t[s],a}function A(r){let t,s,a,u;return{c(){t=v("a"),s=v("img"),this.h()},l(o){t=d(o,"A",{href:!0});var l=C(t);s=d(l,"IMG",{src:!0,alt:!0,class:!0}),l.forEach(_),this.h()},h(){j(s.src,a=Object.entries(r[7].sprites)[0][1])||m(s,"src",a),m(s,"alt"," sprite"),m(s,"class","pokemon-image svelte-10xi5ve"),m(t,"href",u="/search/"+r[7].name)},m(o,l){p(o,t,l),M(t,s)},p(o,l){l&1&&!j(s.src,a=Object.entries(o[7].sprites)[0][1])&&m(s,"src",a),l&1&&u!==(u="/search/"+o[7].name)&&m(t,"href",u)},d(o){o&&_(t)}}}function Q(r){let t,s,a,u,o,l,E="Clear Recent Pokémon",h,g,k,O,V;const S=r[4].default,f=R(S,r,r[3],null);let b=q(r[0]),i=[];for(let e=0;e<b.length;e+=1)i[e]=A(x(r,b,e));return{c(){t=v("main"),f&&f.c(),s=D(),a=v("div"),u=v("div");for(let e=0;e<i.length;e+=1)i[e].c();o=D(),l=v("button"),l.textContent=E,h=D(),g=v("div"),this.h()},l(e){t=d(e,"MAIN",{class:!0});var c=C(t);f&&f.l(c),c.forEach(_),s=N(e),a=d(e,"DIV",{class:!0});var n=C(a);u=d(n,"DIV",{class:!0});var I=C(u);for(let y=0;y<i.length;y+=1)i[y].l(I);I.forEach(_),n.forEach(_),o=N(e),l=d(e,"BUTTON",{class:!0,"data-svelte-h":!0}),U(l)!=="svelte-8nm10i"&&(l.textContent=E),h=N(e),g=d(e,"DIV",{class:!0}),C(g).forEach(_),this.h()},h(){m(t,"class","svelte-10xi5ve"),m(u,"class","recent-pokemon svelte-10xi5ve"),m(a,"class","recent-views svelte-10xi5ve"),m(l,"class","clear-button svelte-10xi5ve"),m(g,"class","backdrop svelte-10xi5ve")},m(e,c){p(e,t,c),f&&f.m(t,null),p(e,s,c),p(e,a,c),M(a,u);for(let n=0;n<i.length;n+=1)i[n]&&i[n].m(u,null);p(e,o,c),p(e,l,c),p(e,h,c),p(e,g,c),k=!0,O||(V=$(l,"click",r[1]),O=!0)},p(e,[c]){if(f&&f.p&&(!k||c&8)&&T(f,S,e,e[3],k?B(S,e[3],c,null):w(e[3]),null),c&1){b=q(e[0]);let n;for(n=0;n<b.length;n+=1){const I=x(e,b,n);i[n]?i[n].p(I,c):(i[n]=A(I),i[n].c(),i[n].m(u,null))}for(;n<i.length;n+=1)i[n].d(1);i.length=b.length}},i(e){k||(z(f,e),k=!0)},o(e){F(f,e),k=!1},d(e){e&&(_(t),_(s),_(a),_(o),_(l),_(h),_(g)),f&&f.d(e),H(i,e),O=!1,V()}}}function W(r,t,s){let a;G(r,K,h=>s(2,a=h));let{$$slots:u={},$$scope:o}=t,l=[];function E(){sessionStorage.setItem("pokemons",""),s(0,l=[])}return r.$$set=h=>{"$$scope"in h&&s(3,o=h.$$scope)},r.$$.update=()=>{r.$$.dirty&4&&s(0,l=a.length>2?JSON.parse(a):"")},[l,E,a,o,u]}class se extends J{constructor(t){super(),L(this,t,W,Q,P,{})}}export{se as component};
