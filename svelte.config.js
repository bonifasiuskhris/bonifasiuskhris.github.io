// import adapter from '@sveltejs/adapter-auto';
import adapter from "@sveltejs/adapter-static"; 

const dev = "production" === "development";
// const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: "docs",
			assets: "docs"
		}),
		paths: {
			// change below to your repo name
			base: 'development' ? '' : '/bonifasiuskhris.com',
		},
		// hydrate the <div id="svelte"> element in src/app.html
		// target: "#svelte"
	}
};

export default config;
