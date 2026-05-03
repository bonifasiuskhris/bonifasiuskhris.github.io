<script>
	import { page } from '$app/stores';

	export let title = 'Bonifasius Khrisna Wicaksono | Web Developer';
	export let description =
		'Full-stack Web Developer with practical experience in web development, project management, and marketing. AI Agents Enthusiast.';
	// Using the profile image as a default Open Graph image
	export let image = '/profile_1x1.jpg';
	export let type = 'website';
	export let article = null; // Provide an object { publishedTime, tags } if it's an article

	// The production domain of the site
	const siteUrl = 'https://bonifasiuskhris.github.io';

	// Create canonical URL dynamically based on the current page path
	$: canonicalUrl = `${siteUrl}${$page.url.pathname}`;
	$: absoluteImageUrl = image.startsWith('http') ? image : `${siteUrl}${image}`;

	// Create JSON-LD data
	$: jsonLd =
		type === 'article' && article
			? {
					'@context': 'https://schema.org',
					'@type': 'BlogPosting',
					headline: title,
					image: [absoluteImageUrl],
					datePublished: article.publishedTime,
					dateModified: article.publishedTime,
					author: [
						{
							'@type': 'Person',
							name: 'Bonifasius Khrisna Wicaksono',
							url: siteUrl
						}
					]
				}
			: {
					'@context': 'https://schema.org',
					'@type': 'Person',
					name: 'Bonifasius Khrisna Wicaksono',
					url: siteUrl,
					jobTitle: 'Full-stack Web Developer',
					sameAs: [
						'https://www.linkedin.com/in/bonifasiuskhris/',
						'https://github.com/bonifasiuskhris',
						'https://twitter.com/bonifasiuskhris'
					]
				};
</script>

<svelte:head>
	<!-- Standard SEO -->
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={canonicalUrl} />

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content={type} />
	<meta property="og:url" content={canonicalUrl} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:image" content={absoluteImageUrl} />

	<!-- Twitter -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:url" content={canonicalUrl} />
	<meta property="twitter:title" content={title} />
	<meta property="twitter:description" content={description} />
	<meta property="twitter:image" content={absoluteImageUrl} />

	<!-- Article Specific Tags -->
	{#if type === 'article' && article}
		<meta property="article:published_time" content={article.publishedTime} />
		<meta property="article:author" content="Bonifasius Khrisna Wicaksono" />
		{#if article.tags}
			{#each article.tags as tag}
				<meta property="article:tag" content={tag} />
			{/each}
		{/if}
	{/if}

	<!-- Structured Data (JSON-LD) -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</` + `script>`}
</svelte:head>
