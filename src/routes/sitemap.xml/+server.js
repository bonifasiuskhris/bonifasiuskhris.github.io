export const prerender = true;

export async function GET({ fetch }) {
	const siteUrl = 'https://bonifasiuskhris.github.io';

	// Define static pages
	const pages = ['', '/resume', '/projects', '/blog'];

	// Fetch dynamic blog posts
	let posts = [];
	try {
		const response = await fetch('/api/posts');
		if (response.ok) {
			posts = await response.json();
		}
	} catch (error) {
		console.error('Error fetching posts for sitemap', error);
	}

	const sitemap = `
		<?xml version="1.0" encoding="UTF-8" ?>
		<urlset
			xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
			xmlns:xhtml="https://www.w3.org/1999/xhtml"
			xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
			xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
			xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
			xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
		>
			${pages
				.map(
					(page) => `
				<url>
					<loc>${siteUrl}${page}</loc>
					<changefreq>daily</changefreq>
					<priority>0.7</priority>
				</url>
			`
				)
				.join('')}
			${posts
				.map(
					(post) => `
				<url>
					<loc>${siteUrl}/blog/${post.path}</loc>
					<lastmod>${new Date(post.meta.date).toISOString().split('T')[0]}</lastmod>
					<changefreq>monthly</changefreq>
					<priority>0.8</priority>
				</url>
			`
				)
				.join('')}
		</urlset>
	`.trim();

	return new Response(sitemap, {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
}
