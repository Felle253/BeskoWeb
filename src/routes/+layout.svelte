<script>
	import '../app.postcss';

	import { base } from '$app/paths';

	import hljs from 'highlight.js/lib/core';
	import 'highlight.js/styles/github-dark.css';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';
	import xml from 'highlight.js/lib/languages/xml';
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	hljs.registerLanguage('xml', xml);
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);

	import { computePosition, autoUpdate, flip, shift, offset, arrow } from '@floating-ui/dom';
	import { storePopup } from '@skeletonlabs/skeleton';
	storePopup.set({ computePosition, autoUpdate, flip, shift, offset, arrow });

	let pages = ["home","photoapp","register","login","shoppinglist","memory"]
	import { browser } from "$app/environment";
	import { writable } from "svelte/store";

	let currentPage = browser ? window.document.location.href : ""


	console.log("sida:",currentPage)
</script>

<nav data-sveltekit-reload>
	{#each pages as page}
		<a  class:current={currentPage.includes(page)} href={`${base}/${page=="home" ?"":page}`}>{page.charAt(0).toUpperCase()+page.slice(1)}</a>
		
	{/each}
</nav>

<slot />

<style>
:global(body), :global(html) {
  margin: 0;
  padding: 0;
  height: 99vh;
  width: 99vw;
  background: linear-gradient(to bottom, #ffffff, #cce7ff);
  font-family: 'bertsfamilj', sans-serif;

  
}

@font-face{
	font-family: "bertsfamilj";
	src: url("/LUNERY.otf");
}

nav {
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 10;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  color: rgb(255, 255, 255);
  background-color: rgba(0, 0, 50, 0.447);
  border-bottom: 3px solid #ff4d4d;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(5px);
}

a {
  margin: 0 20px;
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;
  font-size: 18px;
  transition: color 0.3s ease, text-shadow 0.3s ease;
  text-transform: uppercase;
}

a:hover {
  color: #ffffff;
  text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 5px rgba(255, 215, 0, 0.6);
}

.current{
	color: #ffffff;
	text-shadow: 0 0 10px rgba(255, 255, 255, 0.8), 0 0 5px rgba(255, 215, 0, 0.6);
}

</style>