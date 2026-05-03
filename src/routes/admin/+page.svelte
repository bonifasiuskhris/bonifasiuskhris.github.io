<svelte:head>
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<meta name="robots" content="noindex" />
	<title>Content Manager</title>

	<!-- Load Sveltia CMS -->
	<!-- eslint-disable-next-line svelte/no-at-html-tags -->
	{@html `<script src="https://unpkg.com/@sveltia/cms/dist/sveltia-cms.js" type="module"></` +
		`script>`}
</svelte:head>

<!-- We don't need any content here, Sveltia CMS will mount itself automatically to the body -->
