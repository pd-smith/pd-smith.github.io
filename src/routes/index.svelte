<script>
	const coolPeople = [
		{ 
			name: 'Kent C. Dodds',
			imgSrc: 'https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q_400x400.jpg',
			altText: "Kent's Twitter Profile Picture",
			link: 'https://twitter.com/kentcdodds'
		},
		{ 
			name: 'Dan Abramov',
			imgSrc: 'https://pbs.twimg.com/profile_images/1166344766210150401/amRnWzl-_400x400.jpg',
			altText: "Dan's Twitter Profile Picture",
			link: 'https://twitter.com/dan_abramov'
		},
		{ 
			name: 'Tim Neutkens',
			imgSrc: 'https://pbs.twimg.com/profile_images/1198231878383345666/tOW5lHRV_400x400.jpg',
			altText: "Tim's Twitter Profile Picture",
			link: 'https://twitter.com/timneutkens'
		},
		{ 
			name: 'Jared Palmer',
			imgSrc: 'https://pbs.twimg.com/profile_images/892351529348411392/FLQyLnoc_400x400.jpg',
			altText: "Jared's Twitter Profile Picture",
			link: 'https://twitter.com/jaredpalmer'
		}
	]

	const loveSection = [
		{
			link: "https://frontendhappyhour.com/",
			src: "/frontend_happy_hour.jpeg",
			alt: "Front End Happy Hour"
		},
		{
			link: "https://undefined.fm/",
			src: "/undefined_podcast.jpeg",
			alt: "The Undefined Podcast"
		},
		{
			link: "https://kentcdodds.com/chats-with-kent-podcast/",
			src: "/chats_with_kent.jpeg",
			alt: "Chats for Kent"
		}
	]
</script>
<style>
	.interest-section {
		margin: 2em 2em 6em 2em;
	}
	.interest-section a {
		font-size: 1em;
		transition: 175ms;
		text-decoration: underline;
	}
	.interest-section h4 {
		text-align: center;
		font-size: 1.25em;
    	font-weight: 600;
	}
	.interest-section a:hover {
		color: pink;
	}
	.interest-section h3 {
		font-size: 1.75em;
		font-weight: 600;
		margin-bottom: 1.5em;
		text-align: center;
	}
	
	.interest-section p {
		max-width: 400px;
		width: 100%;
		margin: 0 auto;
		text-align: center;
		padding: 0em;
	}

	.people, .people a {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		text-decoration: none;
	}

	.people a:hover {
		transition: 200ms;
		color: black;
		background-color: pink;
	}
	.people a:hover img {
		transition: 200ms;
		box-shadow: 0px 0px 0px 0px white;
	}
	.people a {
		background: white;
		border-radius: 10px 10px 60px 10px;
		color: black;
		margin-bottom: 20px;
	}
	.people:nth-child(even), .people:nth-child(even) a {
		flex-direction: row-reverse;
	}
	.people:nth-child(even) img {
		box-shadow: 3px 0px 4px 0px #b3b3b3;
	}
	.people:nth-child(even) a {
		border-radius: 10px 10px 10px 60px;
	}
	.people img {
		border-radius: 50%;
		height: 100px;
		width: 100px;
		box-shadow: -3px 0px 4px 0px #b3b3b3;
		padding: 5px;
		background-color: pink;
	}

	.people h3 {
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 0;
		padding: 10px;
		font-size: 1.75em;
		font-weight: 600;
	}
	.hero {
		position: relative;
		display: flex;
		height: 120vh;
		margin-bottom: 10vh;
		justify-content: center;
		flex-direction: column;
		text-align: center;
		background: linear-gradient(270deg, lime, transparent),
			linear-gradient(0deg, blue, transparent),
			linear-gradient(150deg, red, transparent);
		background-size: 400% 400%;
		background-blend-mode: screen;
		animation-name: example;
		animation-duration: 30s;
		animation-iteration-count: infinite;
	}
	.fade-overlay {
		position: absolute;
		height: 120vh;
		width: 100%;
		background: linear-gradient(180deg, transparent 0%, transparent 80%, var(--background-color) 100%);
	}
	@keyframes example {
		0%{background-position:0% 50%}
		25%{background-position:0% 0%}
		50%{background-position:100% 50%}
		75%{background-position:100% 100%}
		100%{background-position:0% 50%}
	}
	h2 {
		text-align: center;
		font-size: 2.5em;
		margin-bottom: 4em;
	}
	main {
		margin: 0 auto;
		max-width: 1000px;
	}
	.podcast-pictures {
		display: flex;
		justify-content: center;
	}
	.podcast-pictures img {
		max-width: 400px;
		min-width: 200px;
		width: 100%;
		background: black;
		box-shadow: var(--drop-shadow);
		transition: 175ms;
	}

	.podcast-pictures img:hover {
		box-shadow: none;
		filter: hue-rotate(20deg);
	}
	.personal-projects a {
		text-align: center;
		background: var(--text-color);
		color: var(--background-color);
		text-decoration: none;
		padding: 20px;
	}
</style>

<svelte:head>
	<title>Pat Smith</title>
</svelte:head>
<section class="hero">
	<div class="fade-overlay"/>
	<h1>Pat Smith</h1>
	<h2>Frontend Engineer | New York, NY</h2>
</section>
<main>		
	<div class="overlay">
		<h2>Here are some things that I...</h2>
		<section class="interest-section">
			<h3>Worked On</h3>
			<div class="grid personal-projects">
				<a target="." href="https://github.com/mobilusoss/react-ellipsis-text">react-ellipsis-text</a>
				<a target="." href="https://github.com/hazelcast/hazelcast-nodejs-client">hazelcast-nodejs-client</a>
				<a target="." href="https://github.com/commercehub-oss/gatling-gradle-plugin">gatling-gradle-plugin</a>
			</div>
		</section>
		<section class="interest-section">
			<h3>Am Inspired By</h3>
			<div class="grid grid-cramped">
				<div>
					<h4><a target="." href="https://kentcdodds.com/blog/write-tests">Write tests. Not too many. Mostly integration.</a></h4>
					<p>This article inspires me to write tests that give confidence, instead of focusing on lines covered.</p>
				</div>
				<div>
					<h4><a target="." href="https://overreacted.io/my-decade-in-review/">My Decade in Review</a></h4>
					<p>A personal reminder that those we look up to also face hardships, and those hardships help shape who we are.</p>
				</div>
			</div>
		</section>
		<section class="interest-section">
			<h3>Love</h3>
			<div class="grid">
			{#each loveSection as { link, src, name }}
				<div class="podcast-pictures"><a href="{link}"><img src="{src}" alt="{name}"/></a></div>
			{/each}
			</div>
		</section>
		<section class="interest-section">
			<h3>These People are Awesome!</h3>
			{#each coolPeople as { name, imgSrc, altLink, link }}
				<div class="people">
					<a target="." href="{link}">
						<h3>{name}</h3>
						<img src="{imgSrc}" alt="{altLink}"/>
					</a>
				</div>
			{/each}
		</section>
	</div>
</main>
