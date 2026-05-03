export const load = async ({ params }) => {
	try {
		const post = await import(`../../../content/blog/${params.slug}.md`);

		return {
			content: post.default,
			meta: post.metadata
		};
	} catch (e) {
		throw new Error(`Could not find ${params.slug}`);
	}
};
