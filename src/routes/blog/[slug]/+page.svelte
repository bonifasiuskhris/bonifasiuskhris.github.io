<script>
	import { theme } from "$lib/stores/theme.js";
	import { onMount } from "svelte";
	import { fade, slide } from "svelte/transition";

	export let data;
	
	let mounted = false;
	let readingProgress = 0;
	let articleContent;

	$: currentPost = data.post;

	onMount(() => {
		mounted = true;
		
		const handleScroll = () => {
			if (typeof window !== "undefined" && articleContent) {
				const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
				const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
				const progress = Math.min((scrollTop / scrollHeight) * 100, 100);
				readingProgress = progress;
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	});

	function formatDate(dateString) {
		if (!dateString) return "";
		const date = new Date(dateString);
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric"
		});
	}

	function scrollToSection(id) {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: "smooth", block: "start" });
		}
	}
</script>

<svelte:head>
	<title>{currentPost?.title || 'Blog Post'} - Bonifasius Khrisna Wicaksono</title>
	<meta name="description" content={currentPost?.excerpt || 'Technical blog post'} />
</svelte:head>

{#if currentPost}
	<!-- Reading Progress Bar -->
	<div class="fixed top-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-700 z-50">
		<div class="h-full bg-blue-600 transition-all duration-300" style="width: {readingProgress}%"></div>
	</div>

	<!-- Blog Post Header -->
	<section class="section-card animate-fade-in" class:animate-slide-up={mounted}>
		<div class="mb-8">
			<!-- Breadcrumb -->
			<div class="flex items-center text-sm mb-6 {$theme === 'light' ? 'text-slate-600' : 'text-slate-400'}">
				<a href="/blog" class="hover:text-blue-600 {$theme === 'dark' ? 'hover:text-blue-400' : ''} transition-colors duration-200">Blog</a>
				<svg class="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
				</svg>
				<span class="truncate">{currentPost.title}</span>
			</div>

			<!-- Title and Meta -->
			<h1 class="text-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 {$theme === 'light' ? 'text-slate-900' : 'text-white'}">
				{currentPost.title}
			</h1>
			
			<div class="flex flex-wrap items-center gap-4 mb-6">
				<div class="flex items-center">
					<div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold mr-3">
						BK
					</div>
					<div>
						<div class="font-medium {$theme === 'light' ? 'text-slate-900' : 'text-white'}">{currentPost.author}</div>
						<div class="text-sm {$theme === 'light' ? 'text-slate-600' : 'text-slate-400'}">
							{formatDate(currentPost.date)} • {currentPost.readTime}
						</div>
					</div>
				</div>
				
				<!-- Category Badge -->
				<span class="px-3 py-1 text-sm font-semibold rounded-full {$theme === 'light'
					? 'bg-green-100 text-green-800'
					: 'bg-green-900 text-green-200'}">
					{currentPost.category}
				</span>
			</div>

			<!-- Tags -->
			<div class="flex flex-wrap gap-2 mb-6">
				{#each currentPost.tags as tag}
					<span class="px-3 py-1 text-sm font-medium rounded {$theme === 'light'
						? 'bg-blue-100 text-blue-800'
						: 'bg-blue-900 text-blue-200'}">
						{tag}
					</span>
				{/each}
			</div>

			<!-- Share Buttons -->
			<div class="flex items-center gap-4">
				<span class="text-sm font-medium {$theme === 'light' ? 'text-slate-600' : 'text-slate-400'}">Share:</span>
				<button
					on:click={() => {
						if (typeof window !== 'undefined') {
							navigator.clipboard.writeText(window.location.href);
						}
					}}
					class="p-2 rounded-lg {$theme === 'light' ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-700 hover:bg-slate-600 text-slate-300'} transition-colors duration-200"
					title="Copy link"
					aria-label="Copy link to clipboard"
				>
					<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
					</svg>
				</button>
				{#if typeof window !== 'undefined'}
					<a
						href="https://twitter.com/intent/tweet?text={encodeURIComponent(currentPost.title)}&url={encodeURIComponent(window.location.href)}"
						target="_blank"
						rel="noopener noreferrer"
						class="p-2 rounded-lg {$theme === 'light' ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-700 hover:bg-slate-600 text-slate-300'} transition-colors duration-200"
						title="Share on Twitter"
						aria-label="Share on Twitter"
					>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
						</svg>
					</a>
					<a
						href="https://www.linkedin.com/sharing/share-offsite/?url={encodeURIComponent(window.location.href)}"
						target="_blank"
						rel="noopener noreferrer"
						class="p-2 rounded-lg {$theme === 'light' ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-700 hover:bg-slate-600 text-slate-300'} transition-colors duration-200"
						title="Share on LinkedIn"
						aria-label="Share on LinkedIn"
					>
						<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
							<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
						</svg>
					</a>
				{/if}
			</div>
		</div>
	</section>

	<!-- Table of Contents -->
	{#if currentPost.toc && currentPost.toc.length > 0}
		<section class="section-card animate-fade-in" style="animation-delay: 0.1s" class:animate-slide-up={mounted}>
			<h3 class="text-lg font-semibold mb-4 {$theme === 'light' ? 'text-slate-900' : 'text-white'}">Table of Contents</h3>
			<nav class="space-y-2">
				{#each currentPost.toc as item}
					<a
						href="#{item.id}"
						class="block text-sm hover:text-blue-600 {$theme === 'light' 
							? 'text-slate-600 hover:text-blue-600' 
							: 'text-slate-400 hover:text-blue-400'} transition-colors duration-200 {item.level === 3 ? 'ml-4' : ''}"
						on:click|preventDefault={(e) => {
							document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
						}}
					>
						{item.title}
					</a>
				{/each}
			</nav>
		</section>
	{/if}

	<!-- Blog Post Content -->
	<article 
		bind:this={articleContent}
		class="section-card animate-fade-in" 
		style="animation-delay: 0.2s" 
		class:animate-slide-up={mounted}
	>
		<div class="prose prose-lg max-w-none {$theme === 'light' ? 'prose-slate' : 'prose-invert prose-slate'}">
			{@html currentPost.content.split('\n').map(line => {
				// Enhanced markdown-like parsing with ID support for TOC
				return line
					.replace(/^### (.*$)/gm, '<h3 id="$1.toLowerCase().replace(/\\s+/g, \'-\')">$1</h3>')
					.replace(/^## (.*$)/gm, '<h2 id="$1.toLowerCase().replace(/\\s+/g, \'-\')">$1</h2>')
					.replace(/^# (.*$)/gm, '<h1 id="$1.toLowerCase().replace(/\\s+/g, \'-\')">$1</h1>')
					.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
					.replace(/\*(.*?)\*/g, '<em>$1</em>')
					.replace(/\`([^`]+)\`/g, '<code>$1</code>')
					.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
					.replace(/^- (.*$)/gm, '<li>$1</li>')
					.replace(/^\d+\. (.*$)/gm, '<li>$1</li>');
			}).join('\n')}
		</div>
	</article>

	<!-- Previous/Next Post Navigation -->
	{#if previousPost || nextPost}
		<section class="section-card animate-fade-in" style="animation-delay: 0.3s" class:animate-slide-up={mounted}>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				{#if previousPost}
					<a
						href="/blog/{previousPost.slug}"
						class="flex items-center p-4 rounded-lg border {$theme === 'light' 
							? 'border-slate-200 bg-white hover:bg-slate-50' 
							: 'border-slate-700 bg-slate-800 hover:bg-slate-700'} transition-colors duration-200"
					>
						<svg class="w-5 h-5 mr-3 {$theme === 'light' ? 'text-slate-400' : 'text-slate-500'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
						</svg>
						<div class="flex-1 min-w-0">
							<div class="text-xs font-medium {$theme === 'light' ? 'text-slate-500' : 'text-slate-400'} mb-1">Previous Article</div>
							<div class="text-sm font-medium truncate {$theme === 'light' ? 'text-slate-900' : 'text-white'}">{previousPost.title}</div>
						</div>
					</a>
				{/if}
				{#if nextPost}
					<a
						href="/blog/{nextPost.slug}"
						class="flex items-center p-4 rounded-lg border {$theme === 'light' 
							? 'border-slate-200 bg-white hover:bg-slate-50' 
							: 'border-slate-700 bg-slate-800 hover:bg-slate-700'} transition-colors duration-200 md:justify-end"
					>
						<div class="flex-1 min-w-0 md:text-right">
							<div class="text-xs font-medium {$theme === 'light' ? 'text-slate-500' : 'text-slate-400'} mb-1">Next Article</div>
							<div class="text-sm font-medium truncate {$theme === 'light' ? 'text-slate-900' : 'text-white'}">{nextPost.title}</div>
						</div>
						<svg class="w-5 h-5 ml-3 {$theme === 'light' ? 'text-slate-400' : 'text-slate-500'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
						</svg>
					</a>
				{/if}
			</div>
		</section>
	{/if}

	<!-- Related Posts Section -->
	{#if relatedPosts.length > 0}
		<section class="section-card animate-fade-in" style="animation-delay: 0.4s" class:animate-slide-up={mounted}>
			<h3 class="text-xl font-bold mb-6 {$theme === 'light' ? 'text-slate-900' : 'text-white'}">Related Articles</h3>
			<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
				{#each relatedPosts as post}
					<a
						href="/blog/{post.slug}"
						class="group p-4 rounded-lg border {$theme === 'light' 
							? 'border-slate-200 bg-white hover:bg-slate-50' 
							: 'border-slate-700 bg-slate-800 hover:bg-slate-700'} transition-colors duration-200"
					>
						<div class="flex items-center justify-between mb-2">
							<span class="text-xs font-medium {$theme === 'light' ? 'text-slate-500' : 'text-slate-400'}">{post.category}</span>
							<span class="text-xs {$theme === 'light' ? 'text-slate-400' : 'text-slate-500'}">{post.readTime}</span>
						</div>
						<h4 class="font-medium mb-2 group-hover:text-blue-600 {$theme === 'light' ? 'text-slate-900' : 'text-white'} transition-colors duration-200">
							{post.title}
						</h4>
						<p class="text-sm {$theme === 'light' ? 'text-slate-600' : 'text-slate-400'} line-clamp-2">
							{post.excerpt}
						</p>
					</a>
				{/each}
			</div>
		</section>
	{/if}

	<!-- Comments Section -->
	<section class="section-card animate-fade-in" style="animation-delay: 0.5s" class:animate-slide-up={mounted}>
		<h3 class="text-xl font-bold mb-6 {$theme === 'light' ? 'text-slate-900' : 'text-white'}">Comments</h3>
		<div class="text-center py-8">
			<div class="mb-4">
				<svg class="w-12 h-12 mx-auto {$theme === 'light' ? 'text-slate-400' : 'text-slate-600'}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
				</svg>
			</div>
			<h4 class="text-lg font-medium mb-2 {$theme === 'light' ? 'text-slate-900' : 'text-white'}">Comments are coming soon!</h4>
			<p class="{$theme === 'light' ? 'text-slate-600' : 'text-slate-400'} mb-4">
				I'm working on implementing a comment system. In the meantime, feel free to reach out on social media or via email with your thoughts!
			</p>
			<div class="flex justify-center gap-4">
				<a
					href="https://twitter.com/bonifasiuskhris"
					target="_blank"
					rel="noopener noreferrer"
					class="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
				>
					<svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
						<path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
					</svg>
					Twitter
				</a>
				<a
					href="mailto:bonifasiuskhris@gmail.com"
					class="inline-flex items-center px-4 py-2 {$theme === 'light' ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-700 hover:bg-slate-600 text-slate-300'} rounded-lg transition-colors duration-200"
				>
					<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
					</svg>
					Email
				</a>
			</div>
		</div>
	</section>

	<!-- Final Navigation -->
	<section class="section-card animate-fade-in" style="animation-delay: 0.6s" class:animate-slide-up={mounted}>
		<div class="flex flex-col sm:flex-row justify-between items-center gap-4">
			<a
				href="/blog"
				class="inline-flex items-center px-4 py-2 {$theme === 'light' ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-700 hover:bg-slate-600 text-slate-300'} rounded-lg transition-colors duration-200"
			>
				<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
				</svg>
				Back to Blog
			</a>
			
			<div class="flex gap-2">
				<a
					href="/"
					class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
				>
					<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
					</svg>
					Home
				</a>
				<a
					href="/portfolio"
					class="inline-flex items-center px-4 py-2 {$theme === 'light' ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-700 hover:bg-slate-600 text-slate-300'} rounded-lg transition-colors duration-200"
				>
					Portfolio
					<svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
					</svg>
				</a>
			</div>
		</div>
	</section>
{:else}
	<!-- 404 - Post Not Found -->
	<section class="section-card text-center animate-fade-in" class:animate-slide-up={mounted}>
		<div class="mb-8">
			<svg class="w-24 h-24 mx-auto {$theme === 'light' ? 'text-slate-400' : 'text-slate-600'} mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
			</svg>
			<h1 class="text-2xl md:text-3xl font-bold {$theme === 'light' ? 'text-slate-900' : 'text-white'} mb-4">Article Not Found</h1>
			<p class="{$theme === 'light' ? 'text-slate-600' : 'text-slate-400'} mb-8">The blog post you're looking for doesn't exist or has been moved.</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a
					href="/blog"
					class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
				>
					<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
					</svg>
					Back to Blog
				</a>
				<a
					href="/"
					class="inline-flex items-center px-4 py-2 {$theme === 'light' ? 'bg-slate-100 hover:bg-slate-200 text-slate-700' : 'bg-slate-700 hover:bg-slate-600 text-slate-300'} rounded-lg transition-colors duration-200"
				>
					<svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
					</svg>
					Home
				</a>
			</div>
		</div>
	</section>
{/if}

<style>
	.animate-fade-in {
		opacity: 0;
		animation: fadeIn 0.6s ease-out forwards;
	}

	.animate-slide-up {
		transform: translateY(20px);
		animation: slideUp 0.6s ease-out forwards;
	}

	@keyframes fadeIn {
		to {
			opacity: 1;
		}
	}

	@keyframes slideUp {
		to {
			transform: translateY(0);
		}
	}

	/* Custom prose styles for better readability */
	:global(.prose h1) {
		font-size: 2.25rem;
		font-weight: 700;
		margin-top: 2rem;
		margin-bottom: 1rem;
	}

	:global(.prose h2) {
		font-size: 1.875rem;
		font-weight: 600;
		margin-top: 1.5rem;
		margin-bottom: 0.75rem;
	}

	:global(.prose h3) {
		font-size: 1.5rem;
		font-weight: 600;
		margin-top: 1.25rem;
		margin-bottom: 0.5rem;
	}

	:global(.prose p) {
		margin-bottom: 1rem;
		line-height: 1.75;
	}

	:global(.prose code) {
		padding: 0.25rem 0.5rem;
		border-radius: 0.375rem;
		font-size: 0.875rem;
	}

	:global(.prose pre) {
		padding: 1rem;
		border-radius: 0.5rem;
		overflow-x: auto;
		margin-bottom: 1rem;
	}

	:global(.prose pre code) {
		padding: 0;
		background: none;
	}

	:global(.dark .bg-card) {
		background: rgba(30, 41, 59, 0.95);
	}

	:global(.light .bg-card) {
		background: rgba(255, 255, 255, 0.95);
	}
</style>