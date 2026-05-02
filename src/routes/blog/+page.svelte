<script>
	import { theme } from '$lib/stores/theme.js';
	import { onMount } from 'svelte';
	
	let mounted = false;
	
	onMount(() => {
		mounted = true;
	});
	
	const blogPosts = [
		{
			title: "Building Scalable Web Applications with Laravel",
			slug: "building-scalable-web-applications-laravel",
			excerpt: "Explore best practices for building scalable web applications using Laravel, including architecture patterns, performance optimization, and deployment strategies.",
			date: "2024-01-15",
			readTime: "8 min read",
			tags: ["Laravel", "PHP", "Web Development"],
			featured: true,
			image: "https://via.placeholder.com/600x400/4F46E5/ffffff?text=Laravel+Scalability"
		},
		{
			title: "Mastering React Hooks: A Complete Guide",
			slug: "mastering-react-hooks-complete-guide",
			excerpt: "Deep dive into React Hooks including useState, useEffect, useContext, and custom hooks. Learn when and how to use each hook effectively.",
			date: "2024-01-10",
			readTime: "12 min read",
			tags: ["React", "JavaScript", "Frontend"],
			featured: true,
			image: "https://via.placeholder.com/600x400/61DAFB/000000?text=React+Hooks"
		},
		{
			title: "Modern CSS Techniques for Responsive Design",
			slug: "modern-css-techniques-responsive-design",
			excerpt: "Discover modern CSS features like Grid, Flexbox, Container Queries, and CSS Custom Properties for creating responsive layouts.",
			date: "2024-01-05",
			readTime: "10 min read",
			tags: ["CSS", "Web Design", "Frontend"],
			featured: false,
			image: "https://via.placeholder.com/600x400/1572B6/ffffff?text=Modern+CSS"
		},
		{
			title: "API Design Best Practices for RESTful Services",
			slug: "api-design-best-practices-restful-services",
			excerpt: "Learn the principles of good API design including versioning, authentication, rate limiting, and documentation standards.",
			date: "2023-12-28",
			readTime: "15 min read",
			tags: ["API", "REST", "Backend"],
			featured: false,
			image: "https://via.placeholder.com/600x400/FF6B6B/ffffff?text=API+Design"
		},
		{
			title: "Database Optimization Techniques for Web Applications",
			slug: "database-optimization-techniques-web-applications",
			excerpt: "Improve your application's performance with database indexing, query optimization, caching strategies, and proper schema design.",
			date: "2023-12-20",
			readTime: "11 min read",
			tags: ["Database", "MySQL", "Performance"],
			featured: false,
			image: "https://via.placeholder.com/600x400/28A745/ffffff?text=Database+Optimization"
		},
		{
			title: "Getting Started with Docker for Web Development",
			slug: "getting-started-docker-web-development",
			excerpt: "A beginner's guide to using Docker in web development including containerization, docker-compose, and development workflows.",
			date: "2023-12-15",
			readTime: "9 min read",
			tags: ["Docker", "DevOps", "Development"],
			featured: false,
			image: "https://via.placeholder.com/600x400/2496ED/ffffff?text=Docker+Guide"
		}
	];
	
	function formatDate(dateString) {
		const date = new Date(dateString);
		return date.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
	}
</script>

<svelte:head>
	<title>Blog - Bonifasius Khrisna</title>
	<meta name="description" content="Read my latest articles on web development, programming, and technology" />
</svelte:head>

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
						<a href="/" class="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
							Home
						</a>
						<a href="/portfolio" class="text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 transition-colors">
							Portfolio
						</a>
						<a href="/blog" class="text-blue-600 dark:text-blue-400 font-medium">
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
	<section class="py-20 px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto text-center">
			<h1 class="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
				<span class="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
					Tech Blog
				</span>
			</h1>
			<p class="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto animate-fade-in">
				Insights, tutorials, and thoughts on web development, programming, and technology trends.
			</p>
			<div class="flex flex-wrap justify-center gap-4 animate-fade-in">
				<a href="#featured" class="btn btn-primary">
					Featured Posts
				</a>
				<a href="#all-posts" class="btn btn-secondary">
					All Articles
				</a>
			</div>
		</div>
	</section>

	<!-- Featured Posts -->
	<section id="featured" class="py-16 px-4 sm:px-6 lg:px-8">
		<div class="max-w-7xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
				<span class="{$theme === 'light' ? 'text-slate-900' : 'text-white'}">Featured Articles</span>
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
				{#each blogPosts.filter(post => post.featured) as post}
					<article class="section-card group animate-slide-up" class:animate-slide-up={mounted}>
						<div class="relative overflow-hidden rounded-t-xl">
							<img 
								src={post.image} 
								alt={post.title}
								class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
							/>
							<div class="absolute top-4 left-4">
								<span class="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-medium">
									Featured
								</span>
							</div>
						</div>
						<div class="p-6">
							<div class="flex flex-wrap gap-2 mb-3">
								{#each post.tags as tag}
									<span class="skill-badge text-xs px-2 py-1">
										{tag}
									</span>
								{/each}
							</div>
							<h3 class="text-xl font-bold mb-3 {$theme === 'light' ? 'text-slate-900' : 'text-white'}">
								<a href="/blog/{post.slug}" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
									{post.title}
								</a>
							</h3>
							<p class="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
								{post.excerpt}
							</p>
							<div class="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
								<time datetime={post.date}>{formatDate(post.date)}</time>
								<span>{post.readTime}</span>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- All Posts -->
	<section id="all-posts" class="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-slate-800/50">
		<div class="max-w-7xl mx-auto">
			<h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
				<span class="{$theme === 'light' ? 'text-slate-900' : 'text-white'}">All Articles</span>
			</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each blogPosts as post}
					<article class="section-card group animate-slide-up" class:animate-slide-up={mounted}>
						<div class="relative overflow-hidden rounded-t-xl">
							<img 
								src={post.image} 
								alt={post.title}
								class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
							/>
						</div>
						<div class="p-5">
							<div class="flex flex-wrap gap-1 mb-3">
								{#each post.tags as tag}
									<span class="skill-badge text-xs px-2 py-1">
										{tag}
									</span>
								{/each}
							</div>
							<h3 class="text-lg font-bold mb-3 {$theme === 'light' ? 'text-slate-900' : 'text-white'}">
								<a href="/blog/{post.slug}" class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
									{post.title}
								</a>
							</h3>
							<p class="text-slate-600 dark:text-slate-300 text-sm mb-4 line-clamp-3">
								{post.excerpt}
							</p>
							<div class="flex justify-between items-center text-sm text-slate-500 dark:text-slate-400">
								<time datetime={post.date}>{formatDate(post.date)}</time>
								<span>{post.readTime}</span>
							</div>
						</div>
					</article>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20 px-4 sm:px-6 lg:px-8">
		<div class="max-w-4xl mx-auto text-center">
			<h2 class="text-3xl md:text-4xl font-bold mb-6">
				Stay Updated
			</h2>
			<p class="text-xl text-slate-600 dark:text-slate-300 mb-8">
				Follow me for more insights on web development and technology trends.
			</p>
			<div class="flex flex-wrap justify-center gap-4">
				<a href="mailto:bonifasiuskhris@gmail.com" class="btn btn-primary">
					Subscribe to Newsletter
				</a>
				<a href="/" class="btn btn-secondary">
					Back to Home
				</a>
			</div>
		</div>
	</section>
</main>