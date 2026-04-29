// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

// const dev = process.env.NODE_ENV === 'development';

/** @type {import('mdsvex').MdsvexOptions} */
const mdsvexOptions = {
	extensions: ['.md', '.svx']
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: undefined,
			precompress: false,
			strict: true
		}),
		paths: {
			// change below to your repo name
			// base: dev ? '' : '/bonifasiuskhris.github.io',
			base: ''
		}
		// hydrate the <div id="svelte"> element in src/app.html
		// target: "#svelte"
	},

	preprocess: [
		sveltePreprocess({
			postcss: true
		}),
		mdsvex(mdsvexOptions)
	]
};

export default config;
