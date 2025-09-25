// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import { sveltePreprocess } from 'svelte-preprocess';

// const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
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
			base: '',
		},
		// hydrate the <div id="svelte"> element in src/app.html
		// target: "#svelte"
	},

	preprocess: [
		sveltePreprocess({
			postcss: true
		})
	]
};

export default config;
