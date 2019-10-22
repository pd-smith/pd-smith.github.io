<style>
	
	.title h1 {
		margin: 5px 0;
		line-height: 1;
	}
	.overlay {
		margin-left: -284px;
    	margin-top: 6px;
	}
	.title h2 {
		font-size: 30px;
		margin: 5px 0;
		opacity: .75;
	}
	main {
		display: flex;
		max-width: 1200px;
		margin: 0 auto;
		overflow:hidden;
	}
	.master-plan {
		height: 600px;
		width: 850px;
		background-size: cover;
		background-image: url(/svg/online_page.svg);
	}
	@media (max-width: 1150px) {
		main {
			flex-direction: column;
			flex-direction: column-reverse;
		}
		.overlay {
			display: inline-block;
			margin-left: 0;
			margin-top: 0;
		}
	}
	@media (max-width: 900px) {
		.master-plan {
			height: 300px;
			width: 425px;
		}
	}
	
</style>

<svelte:head>
	<title>Pat Smith</title>
</svelte:head>

<section class="title">
	<main>		
		<div class="master-plan" role="img" aria-label="Person standing in front of board" title="Person standing in front of board"/>
		<div class="overlay">
			<h1>Pat Smith</h1>
			<h2>Frontend Engineer | New York, NY</h2>
		</div>
	</main>
</section>
