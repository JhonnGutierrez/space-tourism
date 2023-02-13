import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';
import path from "node:path"

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: preprocess({
		scss: {
			prependData: `@import "${path.resolve("./src/styles/library.scss")}";`
		}
	})
};

export default config;
