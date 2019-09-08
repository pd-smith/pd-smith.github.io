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
	.animation-container {
		position: absolute;
		width: 100%;
		max-width: 20rem;
		height: 15rem;
		
	}
	.animation-container :nth-child(even) {
		background-color: #218796;
	}
	.delay-1 {
		animation-delay: -3s;
	}
	.delay-2 {
		animation-delay: -6s;
	}
	.delay-3 {
		animation-delay: -9s;
	}
	.boing {
		position: relative;
		height: 50px;
		width: 50px;
		animation-name: horizontal-boing;
		border-radius: 50%;
		background: rgb(247, 184, 207);
		animation-duration: 12s;
		animation-iteration-count: infinite;
		opacity: .5;
	}
	.align-center {
		display: flex;
		justify-content: center;
	}
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
	@keyframes horizontal-boing {
		0% { top: 25%; left: 25%; }
		25% { top: 25%; left: 75%; }
		50% { top: 75%; left: 75%; }
		75% { top: 75%; left: 25%; }
		100% { top: 25%; left: 25%; }
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
<div class="align-center">
	<div class="animation-container">
		<div class="boing"></div>
		<div class="boing delay-1"></div>
		<div class="boing delay-2"></div>
		<div class="boing delay-3"></div>
	</div>
</div>
