<script lang="ts">
	import '../app.css';

	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<main class="flex min-h-screen flex-col bg-background font-body">
	<Navbar />

	<section class="flex flex-grow flex-col">
		{@render children()}
	</section>

	<Footer />
</main>
