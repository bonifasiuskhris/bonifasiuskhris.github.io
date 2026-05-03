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

<main class="min-h-screen transition-colors duration-300 {$theme === 'light' ? 'bg-slate-50' : 'bg-slate-900'} py-4 md:py-8 px-4 relative overflow-hidden">
	<!-- Ambient background glows -->
	<div class="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/20 blur-[120px] mix-blend-screen pointer-events-none animate-blob"></div>
	<div class="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-secondary/10 blur-[150px] mix-blend-screen pointer-events-none animate-blob animation-delay-2000"></div>
	<div class="fixed top-[40%] left-[60%] w-[40%] h-[40%] rounded-full bg-accent/10 blur-[120px] mix-blend-screen pointer-events-none animate-blob animation-delay-4000"></div>

	<!-- Theme Toggle -->
	<div class="fixed top-4 right-4 z-50">
		<ThemeToggle />
	</div>
	
	<div class="max-w-4xl mx-auto space-y-8">
		<slot />
	</div>
</main>
