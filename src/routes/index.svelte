<style>
	.title h1 {
		font-size: 30px;
		margin: 5px 0;
    	line-height: 1;
	}
	.title hr {
		width: 100px;
		margin: 20px 0;
		display: inline-block;
	}
	.title h2 {
		font-size: 18px;
		margin: 5px 0;
		font-style: italic;
	}
	main {
		max-width: 600px;
		padding: 40px 40px 40px 40px;
		margin: 0 auto;
		color: #FAFAFA;
	}
	.title {
    	background-color: #47C1C3;
	}
	.box {
		background-color: white;
		max-width: 800px;
		box-shadow: 0px 10px 20px 1px #d3dcec;
		margin: -20px auto 0px;
		border-radius: 5px;
		padding: 40px 80px 60px;
	}
	.box h2 {
		font-size: 26px;
		margin: 30px 0 15px;
		font-weight: bold;
	}
	.box h3 {
		font-size: 22px;
		margin: 30px 0 10px;
	}
	.box hr {
		border-right-width: initial;
		border-bottom-width: initial;
		border-left-width: initial;
		border-right-color: initial;
		border-bottom-color: initial;
		border-left-color: initial;
		margin: 50px 0px;
		border-style: solid none none;
		border-image: initial;
		border-top: 1px solid rgb(211,211,211);
		background: none;	
	}
	.box a {
		cursor: pointer;
		text-decoration: none;
		color: #5245C2;
	}
	.box p {
		font-size: 18px;
		margin: 5px 0;
		font-style: italic;
	}
</style>

<svelte:head>
	<title>Pat Smith</title>
</svelte:head>

<section class="title">
	<main>
		<h1>Pat Smith</h1>
		<h1>Software Engineer</h1>
		<hr/>
		<h2>
			Software Engineer, Tech Enthusiast, Follower of <a href="https://kentcdodds.com/">The Doddfather</a>
		</h2>
	</main>
</section>

<section class="box">
	<h2>Readings</h2>
	<p>
		Check out some of my <a href="readings">recommended readings</a>.
	</p>
	<hr/>
	<h2>Plans</h2>
	<h3>Homepage</h3>
	<p>
		The end goal of this page is to be extendable, accessible, and above all an avenue for learning.
	</p>
</section>

