<script>
	import profile_img from '$lib/images/profile_1x1.jpg';
	import { theme } from '$lib/stores/theme.js';
	import { onMount } from 'svelte';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	function downloadPDF() {
		// Create a new window with print-friendly version
		const printWindow = window.open('', '_blank');
		printWindow.document.write(`
			<!DOCTYPE html>
			<html>
			<head>
				<title>Bonifasius Khrisna Wicaksono - Resume</title>
				<style>
					body { font-family: 'Inter', sans-serif; margin: 2rem; color: #000; }
					h1 { font-size: 2rem; margin-bottom: 0.5rem; }
					h2 { font-size: 1.5rem; color: #2563eb; margin-bottom: 1rem; }
					h3 { font-size: 1.25rem; margin-top: 1.5rem; margin-bottom: 0.5rem; }
					.contact-info { margin-bottom: 2rem; }
					.section { margin-bottom: 2rem; }
					.skill-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
					.skill { background: #e5e7eb; padding: 0.25rem 0.75rem; border-radius: 4px; font-size: 0.875rem; }
					.timeline-item { margin-bottom: 1.5rem; }
					.date { color: #64748b; font-size: 0.875rem; }
				</style>
			</head>
			<body>
				<h1>Bonifasius Khrisna Wicaksono</h1>
				<h2>Full-Stack Web Developer</h2>
				<div class="contact-info">
					<p>Jakarta, Indonesia | bonifasiuskhris@gmail.com</p>
					<p>LinkedIn: linkedin.com/in/bonifasiuskhris/ | GitHub: github.com/bonifasiuskhris</p>
				</div>
				<div class="section">
					<h3>About Me</h3>
					<p>I'm a Full-stack Developer with a unique UI/UX approach and practical experience in web development, project management, and marketing.</p>
				</div>
				<div class="section">
					<h3>Technical Skills</h3>
					<div class="skill-list">
						<span class="skill">PHP</span>
						<span class="skill">Laravel</span>
						<span class="skill">MySQL</span>
						<span class="skill">JavaScript</span>
						<span class="skill">HTML</span>
						<span class="skill">Tailwind CSS</span>
						<span class="skill">Nginx</span>
						<span class="skill">Svelte</span>
					</div>
				</div>
			</body>
			</html>
		`);
		printWindow.document.close();
		printWindow.print();
	}
</script>

<main class="min-h-screen transition-colors duration-300 {$theme === 'light' ? 'bg-slate-50' : 'bg-slate-900'}">
	<!-- Navigation -->
	<nav class="sticky top-0 z-50 backdrop-blur-md bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-800">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between items-center h-16">
				<div class="flex items-center space-x-8">
					<a href="/" class="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
						Bonifasius Khrisna
					</a>
					<div class="hidden md:flex space-x-6">
						<a href="/" class="text-blue-600 dark:text-blue-400 font-medium">
							Home
						</a>
						<a href="/portfolio" class="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
							Portfolio
						</a>
						<a href="/blog" class="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
							Blog
						</a>
					</div>
				</div>
				<div class="flex items-center space-x-4">
					<!-- Theme Toggle -->
					<button
						on:click={() => theme.toggle()}
						class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 {$theme === 'dark' ? 'bg-blue-600 focus:ring-blue-500' : 'bg-slate-300 focus:ring-blue-500'}"
						aria-label="Toggle theme"
					>
						<span class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 {$theme === 'dark' ? 'translate-x-6' : 'translate-x-1'}">
							{#if $theme === 'light'}
								<svg class="h-3 w-3 text-yellow-500 absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
									<path fill-rule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
								</svg>
							{:else}
								<svg class="h-3 w-3 text-blue-400 absolute top-0.5 left-0.5" fill="currentColor" viewBox="0 0 20 20">
									<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
								</svg>
							{/if}
						</span>
					</button>
				</div>
			</div>
		</div>
	</nav>

	<!-- Hero Section -->
	<section class="section-card animate-fade-in" class:animate-slide-up={mounted}>
	<div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
		<div class="flex-shrink-0">
			<img
				class="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full object-cover border-4 {$theme === 'light' ? 'border-white shadow-lg' : 'border-slate-700 shadow-xl'} transition-all duration-300 hover:scale-105 hover:shadow-2xl"
				src={profile_img}
				alt="Bonifasius Khrisna Wicaksono"
			/>
		</div>
		<div class="text-center md:text-left flex-1">
			<h1 class="text-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r {$theme === 'light' ? 'from-slate-900 to-blue-600' : 'from-white to-blue-400'}">
				Bonifasius Khrisna Wicaksono
			</h1>
			<h2 class="text-xl md:text-2xl lg:text-3xl font-medium mb-6 {$theme === 'light' ? 'text-slate-600' : 'text-slate-300'}">
				Full-Stack Web Developer
			</h2>
			<div class="flex flex-col md:flex-row items-center gap-4 md:gap-6 mb-6 md:mb-8 text-sm md:text-base">
			<div class="flex items-center {$theme === 'light' ? 'text-slate-600' : 'text-slate-400'}">
				<svg class="w-4 h-4 md:w-5 md:h-5 mr-2 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'}" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
				</svg>
				<span class="font-medium">Jakarta, Indonesia</span>
			</div>
			<div class="hidden md:block {$theme === 'light' ? 'text-slate-400' : 'text-slate-600'}">•</div>
			<div class="flex items-center {$theme === 'light' ? 'text-slate-600' : 'text-slate-400'}">
				<svg class="w-4 h-4 md:w-5 md:h-5 mr-2 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'}" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
					<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
					<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
				</svg>
				<span class="font-medium">bonifasiuskhris@gmail.com</span>
			</div>
		</div>
			<div class="flex flex-wrap justify-center md:justify-start gap-3 md:gap-4 mb-6">
				<a
					href="https://www.linkedin.com/in/bonifasiuskhris/"
					rel="noreferrer"
					target="_blank"
					class="btn btn-primary text-sm md:text-base"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						fill="currentColor"
						class="mr-1 md:mr-2"
						viewBox="0 0 16 16"
					>
						<path
							d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"
						/>
					</svg>
					LinkedIn
				</a>
				<a
					href="https://www.instagram.com/bonifasiuskhris/"
					rel="noreferrer"
					target="_blank"
					class="btn btn-secondary text-sm md:text-base"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						fill="currentColor"
						class="mr-1 md:mr-2"
						viewBox="0 0 16 16"
					>
						<path
							d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
						/>
					</svg>
					Instagram
				</a>
				<a
					href="https://x.com/bonifasiuskhris"
					rel="noreferrer"
					target="_blank"
					class="btn btn-secondary text-sm md:text-base"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="14"
						height="14"
						fill="currentColor"
						class="mr-1 md:mr-2"
						viewBox="0 0 16 16"
					>
						<path
							d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z"
						/>
					</svg>
					X
				</a>
				<button
					on:click={downloadPDF}
					class="btn btn-secondary text-sm md:text-base"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="mr-1 md:mr-2" viewBox="0 0 16 16">
						<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
						<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
					</svg>
					Download PDF
				</button>
				<button
					on:click={() => window.print()}
					class="btn btn-secondary text-sm md:text-base"
				>
					<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="mr-1 md:mr-2" viewBox="0 0 16 16">
						<path d="M2.5 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
						<path d="M5 1a2 2 0 0 0-2 2v2H2a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1h1a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-1V3a2 2 0 0 0-2-2H5zM13 3v2H3V3h10zM2 7h12v3H2V7zm1 5v1h10v-1H2zm11 1v-1H3v1H2v1h12v-1h-1z"/>
					</svg>
					Print Resume
				</button>
			</div>

			<!-- Quick Navigation -->
			<div class="mt-8 flex justify-center space-x-4">
				<a href="/portfolio" class="btn btn-primary">
					<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
					</svg>
					View Portfolio
				</a>
				<a href="/blog" class="btn btn-secondary">
					<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
					</svg>
					Read Blog
				</a>
			</div>
		</div>
	</div>
</section>

<!-- About Section -->
<section class="section-card" class:animate-slide-up={mounted}>
	<h3 class="text-heading text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center {$theme === 'light' ? 'text-slate-900' : 'text-white'}">
		<svg class="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'}" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
			<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
		</svg>
		About Me
	</h3>
	<div class="space-y-4 md:space-y-6 text-sm md:text-base leading-relaxed">
		<p class="text-base md:text-lg font-medium {$theme === 'light' ? 'text-slate-800' : 'text-slate-200'}">
			Hi, I'm <span class="{$theme === 'light' ? 'text-blue-600' : 'text-blue-400'}">Boni</span>
		</p>
		<p class="{$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
			I'm a Full-stack Developer with a unique UI/UX approach and practical experience in web
			development, project management, and marketing. As a creative individual, I bring simple solutions
			to complex problems with strong troubleshooting abilities. I'm a logical thinker with a competitive
			mindset, on a mission to become a generalizing specialist.
		</p>
		<p class="{$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
			I excel at problem-solving with an outside-the-box approach, consistently delivering
			timely solutions. My strength lies in collaborative environments where effective communication
			enables me to tackle diverse challenges and drive successful outcomes.
		</p>
		<p class="{$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
			I thrive in team settings and believe that clear communication is the foundation of effective
			problem-solving. This combination of technical expertise and interpersonal skills allows me
			to contribute meaningfully to any project or organization.
		</p>
	</div>
</section>

<!-- Skills Section -->
<section class="section-card" class:animate-slide-up={mounted}>
	<h3 class="text-heading text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center {$theme === 'light' ? 'text-slate-900' : 'text-white'}">
		<svg
			class="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'}"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
			></path>
		</svg>
		Technical Skills
	</h3>
	
	<!-- Skills Matrix -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6">
		<!-- Backend Skills -->
		<div class="card">
			<h4 class="font-semibold mb-3 {$theme === 'light' ? 'text-slate-800' : 'text-slate-200'}">Backend Development</h4>
			<div class="space-y-2">
				<div class="flex justify-between items-center">
					<span class="{$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">PHP</span>
					<div class="flex space-x-1">
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-slate-300' : 'bg-slate-500'}"></div>
					</div>
				</div>
				<div class="flex justify-between items-center">
					<span class="{$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">Laravel</span>
					<div class="flex space-x-1">
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-slate-300' : 'bg-slate-500'}"></div>
					</div>
				</div>
				<div class="flex justify-between items-center">
					<span class="{$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">MySQL</span>
					<div class="flex space-x-1">
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-slate-300' : 'bg-slate-500'}"></div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- Frontend Skills -->
		<div class="card">
			<h4 class="font-semibold mb-3 {$theme === 'light' ? 'text-slate-800' : 'text-slate-200'}">Frontend Development</h4>
			<div class="space-y-2">
				<div class="flex justify-between items-center">
					<span class="{$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">JavaScript</span>
					<div class="flex space-x-1">
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-slate-300' : 'bg-slate-500'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-slate-300' : 'bg-slate-500'}"></div>
					</div>
				</div>
				<div class="flex justify-between items-center">
					<span class="{$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">HTML/CSS</span>
					<div class="flex space-x-1">
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-slate-300' : 'bg-slate-500'}"></div>
					</div>
				</div>
				<div class="flex justify-between items-center">
					<span class="{$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">Tailwind CSS</span>
					<div class="flex space-x-1">
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-slate-300' : 'bg-slate-500'}"></div>
					</div>
				</div>
			</div>
		</div>
		
		<!-- DevOps Skills -->
		<div class="card">
			<h4 class="font-semibold mb-3 {$theme === 'light' ? 'text-slate-800' : 'text-slate-200'}">DevOps & Tools</h4>
			<div class="space-y-2">
				<div class="flex justify-between items-center">
					<span class="{$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">Nginx</span>
					<div class="flex space-x-1">
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-slate-300' : 'bg-slate-500'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-slate-300' : 'bg-slate-500'}"></div>
					</div>
				</div>
				<div class="flex justify-between items-center">
					<span class="{$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">Svelte</span>
					<div class="flex space-x-1">
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-blue-600' : 'bg-blue-300'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-slate-300' : 'bg-slate-500'}"></div>
						<div class="w-3 h-3 rounded-full {$theme === 'light' ? 'bg-slate-300' : 'bg-slate-500'}"></div>
					</div>
				</div>
			</div>
		</div>
	</div>
	
	<!-- Traditional Skill Tags -->
	<div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
		<div class="skill-badge bg-blue-100 text-blue-800 text-xs md:text-sm px-4 py-2 rounded-lg font-medium {$theme === 'dark' ? 'bg-slate-700 text-blue-300 border border-slate-600' : ''}">
			PHP
		</div>
		<div class="skill-badge bg-blue-100 text-blue-800 text-xs md:text-sm px-4 py-2 rounded-lg font-medium {$theme === 'dark' ? 'bg-slate-700 text-blue-300 border border-slate-600' : ''}">
			Laravel
		</div>
		<div class="skill-badge bg-blue-100 text-blue-800 text-xs md:text-sm px-4 py-2 rounded-lg font-medium {$theme === 'dark' ? 'bg-slate-700 text-blue-300 border border-slate-600' : ''}">
			MySQL
		</div>
		<div class="skill-badge bg-blue-100 text-blue-800 text-xs md:text-sm px-4 py-2 rounded-lg font-medium {$theme === 'dark' ? 'bg-slate-700 text-blue-300 border border-slate-600' : ''}">
			JavaScript
		</div>
		<div class="skill-badge bg-blue-100 text-blue-800 text-xs md:text-sm px-4 py-2 rounded-lg font-medium {$theme === 'dark' ? 'bg-slate-700 text-blue-300 border border-slate-600' : ''}">
			HTML
		</div>
		<div class="skill-badge bg-blue-100 text-blue-800 text-xs md:text-sm px-4 py-2 rounded-lg font-medium {$theme === 'dark' ? 'bg-slate-700 text-blue-300 border border-slate-600' : ''}">
			Tailwind CSS
		</div>
		<div class="skill-badge bg-blue-100 text-blue-800 text-xs md:text-sm px-4 py-2 rounded-lg font-medium {$theme === 'dark' ? 'bg-slate-700 text-blue-300 border border-slate-600' : ''}">
			Nginx
		</div>
		<div class="skill-badge bg-blue-100 text-blue-800 text-xs md:text-sm px-4 py-2 rounded-lg font-medium {$theme === 'dark' ? 'bg-slate-700 text-blue-300 border border-slate-600' : ''}">
			Svelte
		</div>
	</div>
</section>

<!-- Experience Section -->
<section class="section-card" class:animate-slide-up={mounted}>
	<h3 class="text-heading text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center {$theme === 'light' ? 'text-slate-900' : 'text-white'}">
		<svg
			class="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'}"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
			></path>
		</svg>
		Professional Experience
	</h3>
	
	<!-- Professional Timeline -->
	<div class="timeline space-y-8 timeline-single-column">
		<div class="timeline-item max-w-full">
			<div class="mb-4">
				<h4 class="text-xl font-semibold {$theme === 'light' ? 'text-slate-900' : 'text-white'} mb-2">
					Tech Consultant
				</h4>
				<span class="text-base font-medium {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'}">
					Jan 2022 - Current
				</span>
			</div>
			<p class="font-semibold mb-3 {$theme === 'light' ? 'text-slate-800' : 'text-slate-200'}">
				Filotech (PT. Filosofi Teknologi Indonesia)
			</p>
			<p class="text-base mb-6 {$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
				Implementing technology strategies for the company and ensuring technological resources
				meet company needs and budget:
			</p>
			<ul class="space-y-4 text-base">
				<li class="flex items-start {$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
					<svg
						class="w-4 h-4 mr-3 mt-1 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'} flex-shrink-0"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						></path>
					</svg>
					<span>Create, manage, and configure servers using Google Cloud Compute Engine Platform with LEMP (Linux, Nginx, MySQL, PHP) stack, and set up self-hosted VPN with OpenVPN for secure access</span>
				</li>
				<li class="flex items-start {$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
					<svg
						class="w-3 h-3 md:w-4 md:h-4 mr-3 mt-1 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'} flex-shrink-0"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						></path>
					</svg>
					<span>Integrate payment gateway and E-wallet APIs to create virtual accounts, disbursements, virtual wallets, and QRIS for payment processing with KYC approval</span>
				</li>
				<li class="flex items-start {$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
					<svg
						class="w-3 h-3 md:w-4 md:h-4 mr-3 mt-1 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'} flex-shrink-0"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						></path>
					</svg>
					<span>Develop API Gateway for our system so others can easily integrate our payment solutions</span>
				</li>
				<li class="flex items-start {$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
					<svg
						class="w-3 h-3 md:w-4 md:h-4 mr-3 mt-1 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'} flex-shrink-0"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						></path>
					</svg>
					<span>Create several products from scratch: Write technical specifications (SRS, ERD, etc.), manage timelines for each product using agile methodology, and develop using PHP Laravel with JavaScript/jQuery</span>
				</li>
				<li class="flex items-start {$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
					<svg
						class="w-3 h-3 md:w-4 md:h-4 mr-3 mt-1 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'} flex-shrink-0"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						></path>
					</svg>
					<span>Products include: Filotech HR/Attendance, Filotech Koperasi, Filotech School System, Filotech FnB System, Filotech Custom Solution</span>
				</li>
				<li class="flex items-start {$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
					<svg
						class="w-3 h-3 md:w-4 md:h-4 mr-3 mt-1 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'} flex-shrink-0"
						fill="currentColor"
						viewBox="0 0 20 20"
					>
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						></path>
					</svg>
					<span>Meet with clients to understand requirements, collect data, deliver analysis, and provide problem resolution</span>
				</li>
			</ul>
		</div>

		<div class="timeline-item max-w-full">
			<div class="mb-4">
				<h4 class="text-xl font-semibold {$theme === 'light' ? 'text-slate-900' : 'text-white'} mb-2">
					Full Stack Developer
				</h4>
				<span class="text-base font-medium {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'}">
					Oct 2018 - Dec 2021
				</span>
			</div>
			<p class="font-semibold mb-3 {$theme === 'light' ? 'text-slate-800' : 'text-slate-200'}">
				Worktrees (PT. Putra Tekno Asia)
			</p>
			<p class="text-base mb-6 {$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
				Managed the overall operation of IT systems and software, including:
			</p>
			<ul class="space-y-4 text-base">
				<li class="flex items-start {$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
					<svg
					class="w-4 h-4 mr-3 mt-1 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'} flex-shrink-0"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						></path>
					</svg>
					<span>Translated wireframes and rapid prototyping designs into accurate, functional code</span>
				</li>
				<li class="flex items-start {$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
					<svg
					class="w-3 h-3 md:w-4 md:h-4 mr-3 mt-1 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'} flex-shrink-0"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						></path>
					</svg>
					<span>Designed interactive elements in an agile development environment</span>
				</li>
				<li class="flex items-start {$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
					<svg
					class="w-3 h-3 md:w-4 md:h-4 mr-3 mt-1 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'} flex-shrink-0"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						></path>
					</svg>
					<span>Executed UI and UX design projects that improved load times, site stickiness, and user engagement</span>
				</li>
				<li class="flex items-start {$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
					<svg
					class="w-3 h-3 md:w-4 md:h-4 mr-3 mt-1 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'} flex-shrink-0"
					fill="currentColor"
					viewBox="0 0 20 20"
				>
						<path
							fill-rule="evenodd"
							d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
							clip-rule="evenodd"
						></path>
					</svg>
					<span>Developed applications using HTML5, CSS3, JavaScript, jQuery, PHP Laravel/CodeIgniter frameworks, and integrated third-party APIs (WhatsApp, Midtrans, RajaOngkir, Typeform, etc.)</span>
				</li>
			</ul>
		</div>
	</div>
</section>

<!-- Navigation to Portfolio and Blog -->
<section class="section-card" class:animate-slide-up={mounted}>
	<h3 class="text-heading text-xl md:text-2xl font-bold mb-4 md:mb-6 text-center {$theme === 'light' ? 'text-slate-900' : 'text-white'}">
		Explore More
	</h3>
	<p class="text-center mb-6 {$theme === 'light' ? 'text-slate-600' : 'text-slate-300'} max-w-2xl mx-auto">
		Discover my projects and technical insights through my portfolio and blog
	</p>
	<div class="flex flex-col sm:flex-row gap-4 justify-center">
		<a
			href="/portfolio"
			class="btn btn-primary inline-flex items-center justify-center text-sm md:text-base"
		>
			<svg class="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
			</svg>
			View Portfolio
		</a>
		<a
			href="/blog"
			class="btn btn-secondary inline-flex items-center justify-center text-sm md:text-base"
		>
			<svg class="w-4 h-4 md:w-5 md:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
			</svg>
			Read Blog
		</a>
	</div>
</section>

<!-- Contact Section -->
<section class="section-card" class:animate-slide-up={mounted}>
	<h3 class="text-heading text-xl md:text-2xl font-bold mb-4 md:mb-6 flex items-center {$theme === 'light' ? 'text-slate-900' : 'text-white'}">
		<svg
			class="w-5 h-5 md:w-6 md:h-6 mr-2 md:mr-3 {$theme === 'light' ? 'text-blue-600' : 'text-blue-400'}"
			fill="none"
			stroke="currentColor"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
			></path>
		</svg>
		Let's Connect
	</h3>
	<p class="text-sm md:text-base leading-relaxed mb-6 md:mb-8 {$theme === 'light' ? 'text-slate-700' : 'text-slate-300'}">
		Ready to collaborate on your next project? Let's discuss how we can work together to bring your
		ideas to life.
	</p>
	<div class="flex flex-col sm:flex-row gap-3 md:gap-4">
		<a
			href="mailto:bonifasiuskhris@gmail.com"
			class="btn btn-primary text-sm md:text-base"
		>
			<svg
				class="w-4 h-4 md:w-5 md:h-5 mr-2"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
				></path>
			</svg>
			Send Email
		</a>
		<a
			href="https://wa.me/6282112572485"
			target="_blank"
			rel="noreferrer"
			class="btn btn-secondary text-sm md:text-base"
		>
			<svg class="w-4 h-4 md:w-5 md:h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
				<path
					d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
				/>
			</svg>
			WhatsApp
		</a>
	</div>
</section>

</main>