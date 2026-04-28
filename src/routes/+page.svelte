<script>
	import profile_img from '$lib/images/profile.jpg';
	import SEO from '$lib/components/SEO.svelte';
</script>

<SEO
	title="Home | Bonifasius Khrisna Wicaksono"
	description="Personal website of Bonifasius Khrisna Wicaksono, Full-stack Web Developer"
/>

<section class="hero min-h-[60vh] bg-base-100 rounded-3xl shadow-xl overflow-hidden mb-12">
	<div class="hero-content flex-col lg:flex-row-reverse gap-8 p-8">
		<img
			src={profile_img}
			class="max-w-sm rounded-lg shadow-2xl w-64 h-64 object-cover object-top mask mask-squircle"
			alt="Bonifasius Khrisna Wicaksono"
		/>
		<div>
			<h1 class="text-5xl font-bold">Hi, I'm <span class="text-primary">Boni</span></h1>
			<h2 class="text-2xl font-semibold mt-4 opacity-80">Full-stack Web Developer</h2>
			<p class="py-6 text-lg opacity-90">
				I enjoy solving problems, troubleshooting issues, and coming up with solutions in a timely
				manner. I thrive in team settings and love building creative web applications.
			</p>
			<div class="flex gap-4">
				<a href="/resume" class="btn btn-primary">View My Resume</a>
				<a href="/projects" class="btn btn-outline">See My Work</a>
			</div>
		</div>
	</div>
</section>

<section class="mb-12 px-4">
	<h2 class="text-3xl font-bold mb-6 text-center">What I Do</h2>
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
		<div class="card bg-base-200 shadow-xl hover:-translate-y-2 transition-transform duration-300">
			<div class="card-body items-center text-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-12 w-12 text-primary mb-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
					/>
				</svg>
				<h3 class="card-title">Frontend Development</h3>
				<p>
					Building responsive and interactive user interfaces using modern frameworks like SvelteKit
					and React.
				</p>
			</div>
		</div>
		<div class="card bg-base-200 shadow-xl hover:-translate-y-2 transition-transform duration-300">
			<div class="card-body items-center text-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-12 w-12 text-secondary mb-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
					/>
				</svg>
				<h3 class="card-title">Backend Development</h3>
				<p>Developing robust APIs and server-side logic using PHP, Laravel, and Node.js.</p>
			</div>
		</div>
		<div class="card bg-base-200 shadow-xl hover:-translate-y-2 transition-transform duration-300">
			<div class="card-body items-center text-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-12 w-12 text-accent mb-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
					/>
				</svg>
				<h3 class="card-title">Database Management</h3>
				<p>
					Designing and optimizing database schemas primarily using MySQL to ensure data integrity
					and performance.
				</p>
			</div>
		</div>
		<div class="card bg-base-200 shadow-xl hover:-translate-y-2 transition-transform duration-300">
			<div class="card-body items-center text-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-12 w-12 text-info mb-2"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
					/>
				</svg>
				<h3 class="card-title">AI Agents</h3>
				<p>
					Installing, configuring, and running AI Agents like OpenClaw and Hermes for automated
					workflows.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="bg-primary text-primary-content rounded-3xl p-8 text-center shadow-xl">
	<h2 class="text-3xl font-bold mb-4">Let's Work Together</h2>
	<p class="mb-6 text-lg max-w-xl mx-auto">
		I'm currently open to new opportunities and collaborations. If you have a project in mind or
		just want to say hi, feel free to reach out!
	</p>
	<a href="/resume" class="btn btn-neutral btn-lg">Contact Me</a>
</section>
