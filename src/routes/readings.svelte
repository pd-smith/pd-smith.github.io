<script>
    import readings from '../data/readings'
</script>
<style>
    main {
        max-width: 800px;
        margin: 30px auto;
        overflow: hidden;
    }
    section {
        max-width: 800px;
        margin-top: 40px;
    }
    section a {
        cursor: pointer;
        color: #f3ec59;
        float: right;
        text-decoration: none;
    }
    .section-container {
        color: #f2f2f2;
        background-color: #3f3d56;
        padding: 40px;
        border-radius: 5px;
    }
    hr {
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
    .readings {
		height: 190px;
		width: 200px;
		background-size: cover;
		background-image: url(/svg/post.svg);
    }
    h1 {
        margin: 0;
    }
    .flex {
        display: flex;
        justify-content: space-between;
    }
    .section-title {
        align-self: flex-end;
    }
    @media (max-width: 550px) {
		.readings {
			height: 45px;
			width: 50px;
		}
	}
</style>
<svelte:head>
	<title>Readings</title>
</svelte:head>

<main>
    <div class="flex">
        <div class="section-title">
            <h1>Readings</h1>
        </div>
        <div role="img" aria-label="Pieces of paper" title="Pieces of paper" class="readings" />
    </div>
    
    {#each readings as reading}
        <section>
        <h2>{reading.title}</h2>
          <div class="section-container">
            {#each reading.links as link}
                <h3>{link.linkTitle}</h3>
                <p>{link.description}</p>
                <a target="_blank" href={link.link.href}>{link.link.title}</a>
                <hr/>
            {/each}
          </div>
        </section>
    {/each}
</main>