<script>
	import '../app.postcss';
	import Analytics from '$lib/analytics.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import { theme } from '$lib/stores/theme.js';
	import { onMount } from 'svelte';

	onMount(() => {
		theme.init();
	});
</script>

<main class="min-h-screen transition-colors duration-300 {$theme === 'light' ? 'bg-white' : 'bg-indigo_dye-100'} py-4 md:py-8 px-4">
	<!-- Theme Toggle -->
	<div class="fixed top-4 right-4 z-50">
		<ThemeToggle />
	</div>
	
	<div class="max-w-4xl mx-auto space-y-8">
		<slot />
	</div>
</main>
