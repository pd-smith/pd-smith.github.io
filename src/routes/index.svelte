<style>
	.title h1 {
		font-size: 60px;
		margin: 5px 0;
		line-height: 1;
		animation-name: glitch;
		animation-duration: 10s;
		animation-iteration-count: infinite;
		animation-fill-mode: backwards;
		animation-direction: alternate;	}
	.title h2 {
		font-size: 30px;
		margin: 5px 0;
		opacity: .75;
	}
	main {
		color: rgb(255, 214, 229);
		max-width: 800px;
		padding: 40px 40px 40px 40px;
		margin: 0 auto;
	}
	.title {
    	background-color: #218796;
	}
	@keyframes glitch {
		from {text-shadow: 5px 2px 1px #442986}
		to {text-shadow: 4px 2px 3px rgb(160, 12, 245)}
	}
	
</style>

<svelte:head>
	<title>Pat Smith</title>
</svelte:head>

<section class="title">
  <script src="particles.js"></script>

	<main>
		<h1 data-glitch="Software Engineer">Software Engineer</h1>
		<h2>
			Frontend | New York, NY
		</h2>
	</main>
</section>

