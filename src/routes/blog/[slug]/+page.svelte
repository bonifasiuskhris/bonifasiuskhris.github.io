<script>
	import SEO from '$lib/components/SEO.svelte';

	export let data;
	const { content, meta } = data;
</script>

<SEO
	title={`${meta.title} | Bonifasius Khrisna Wicaksono`}
	description={meta.description ||
		`Read about ${meta.title} on Bonifasius Khrisna Wicaksono's blog.`}
	type="article"
	article={{
		publishedTime: meta.date,
		tags: meta.tags || []
	}}
/>

<article class="prose prose-lg dark:prose-invert max-w-none mb-16 mt-8">
	<header class="mb-12 border-b border-base-300 pb-8 text-center">
		<h1 class="text-4xl md:text-5xl font-bold mb-4 leading-tight">{meta.title}</h1>
		<div class="text-base-content/60 flex items-center justify-center gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
				/>
			</svg>
			<time datetime={meta.date}>
				{new Date(meta.date).toLocaleDateString('en-US', {
					year: 'numeric',
					month: 'long',
					day: 'numeric'
				})}
			</time>
		</div>
	</header>

	<div
		class="prose-img:rounded-xl prose-img:shadow-lg prose-a:text-primary hover:prose-a:text-primary-focus prose-headings:font-bold"
	>
		<svelte:component this={content} />
	</div>

	<footer class="mt-16 pt-8 border-t border-base-300 text-center">
		<a href="/blog" class="btn btn-outline">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5 mr-2"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M10 19l-7-7m0 0l7-7m-7 7h18"
				/>
			</svg>
			Back to Blog
		</a>
	</footer>
</article>
