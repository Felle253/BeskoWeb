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
</script>

<nav>
	<a href="{base}/">Home</a>
	<a href="{base}/photoapp">Photos</a>
	<a href="{base}/register">Register</a>
	<a href="{base}/login">Login</a>

</nav>

<slot />

<style>
:global(body), :global(html){
  margin: 0;
  padding: 0;
  height: 100vh;
  width: 100vw;
}    
</style>