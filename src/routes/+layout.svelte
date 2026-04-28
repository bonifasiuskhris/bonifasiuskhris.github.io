<script>
	import { page } from '$app/stores';
	import '../app.postcss';

	// Check if we are on the admin page
	$: isAdminPage = $page.url.pathname.startsWith('/admin');
</script>

<!-- If we are on the admin page, DO NOT load the layout (navbar, footer, etc.) -->
{#if isAdminPage}
	<slot />
{:else}
	<div class="flex flex-col min-h-screen">
		<!-- Navbar -->
		<div class="navbar bg-base-100 shadow-md sticky top-0 z-50">
			<div class="navbar-start">
				<div class="dropdown">
					<label tabindex="0" class="btn btn-ghost sm:hidden">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/></svg
						>
					</label>
					<ul
						tabindex="0"
						class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li><a href="/">Home</a></li>
						<li><a href="/resume">Resume</a></li>
						<li><a href="/projects">Projects</a></li>
						<li><a href="/blog">Blog</a></li>
					</ul>
				</div>
				<a href="/" class="btn btn-ghost normal-case text-xl font-bold">bonifasiuskhris</a>
			</div>
			<div class="navbar-end hidden sm:flex">
				<ul class="menu menu-horizontal px-1">
					<li><a href="/">Home</a></li>
					<li><a href="/resume">Resume</a></li>
					<li><a href="/projects">Projects</a></li>
					<li><a href="/blog">Blog</a></li>
				</ul>
			</div>
		</div>

		<!-- Main Content -->
		<main class="flex-grow max-w-screen-md mx-auto w-full">
			<div class="my-12 mx-4 lg:mx-0">
				<slot />
			</div>
		</main>

		<!-- Footer -->
		<footer class="footer footer-center p-4 bg-base-200 text-base-content mt-auto">
			<div>
				<p>
					Copyright © {new Date().getFullYear()} - All right reserved by Bonifasius Khrisna Wicaksono
				</p>
			</div>
		</footer>
	</div>
{/if}
