// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

// const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs'
		}),
		// paths: {
		// 	// change below to your repo name
		// 	// base: dev ? '' : '/bonifasiuskhris.github.io',
		// 	base: '',
		// },
		// hydrate the <div id="svelte"> element in src/app.html
		// target: "#svelte"
	},

	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
