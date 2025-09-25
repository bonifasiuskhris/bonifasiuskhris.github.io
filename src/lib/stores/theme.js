import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// Create theme store with default value
function createThemeStore() {
	const { subscribe, set, update } = writable('dark');

	return {
		subscribe,
		set,
		update,
		toggle: () => update(theme => theme === 'dark' ? 'light' : 'dark'),
		init: () => {
			if (browser) {
				// Check localStorage first
				const stored = localStorage.getItem('theme');
				if (stored) {
					set(stored);
					return;
				}
				
				// Check system preference
				const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
				set(prefersDark ? 'dark' : 'light');
			}
		},
		save: (theme) => {
			if (browser) {
				localStorage.setItem('theme', theme);
				document.documentElement.setAttribute('data-theme', theme);
				document.documentElement.classList.toggle('dark', theme === 'dark');
			}
		}
	};
}

export const theme = createThemeStore();

// Auto-save theme changes
if (browser) {
	theme.subscribe(value => {
		theme.save(value);
	});
}