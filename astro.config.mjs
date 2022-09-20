import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import linaria from '@linaria/rollup';
import tokencss from '@tokencss/astro';

// https://astro.build/config
export default defineConfig({
	integrations: [preact(), tokencss()],
	vite: {
		plugins: [linaria()],
	},
});
