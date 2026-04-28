<script>
	import SEO from '$lib/components/SEO.svelte';

	export let data;
	const { posts } = data;
</script>

<SEO
	title="Blog | Bonifasius Khrisna Wicaksono"
	description="Read the latest articles about web development, AI Agents, project management, and technology."
/>

<div class="mb-12">
	<h1 class="text-4xl font-bold mb-8 text-center">Blog</h1>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
		{#each posts as post}
			<div
				class="card bg-base-100 shadow-xl hover:-translate-y-2 transition-transform duration-300"
			>
				<div class="card-body">
					<h2 class="card-title text-2xl mb-2">
						<a href={`/blog/${post.path}`} class="hover:text-primary transition-colors">
							{post.meta.title}
						</a>
					</h2>
					<p class="text-sm text-base-content/60 mb-4">
						{new Date(post.meta.date).toLocaleDateString('en-US', {
							year: 'numeric',
							month: 'long',
							day: 'numeric'
						})}
					</p>
					{#if post.meta.description}
						<p class="text-base-content/80 mb-4">{post.meta.description}</p>
					{/if}
					<div class="card-actions justify-end mt-auto">
						<a href={`/blog/${post.path}`} class="btn btn-primary btn-sm">Read More</a>
					</div>
				</div>
			</div>
		{/each}
	</div>

	{#if posts.length === 0}
		<div class="text-center py-12 text-base-content/60">
			<p class="text-xl">No posts found.</p>
			<p>Check back later for new articles!</p>
		</div>
	{/if}
</div>
