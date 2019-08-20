<script>
    import readings from '../data/readings'
</script>
<style>
    main {
        max-width: 800px;
        margin: 30px auto;
    }
    section {
        max-width: 800px;
        margin-top: 40px;
        background-color: white;
        box-shadow: rgb(211, 220, 236) 0px 3px 7px 0px;
        padding: 40px;
        border-radius: 5px;
    }
    section a {
        cursor: pointer;
        color: rgb(82, 69, 194);
        display: block;
        text-align: right;
        text-decoration: none;
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
</style>
<svelte:head>
	<title>Readings</title>
</svelte:head>

<main>
    <h1>Readings</h1>
    <p>Here's a collection of readings that I've found useful.</p>
    {#each readings as reading}
        <section>
          <h2>{reading.title}</h2>
          {#each reading.links as link}
            <h3>{link.linkTitle}</h3>
            <p>{link.description}</p>
            <a target="_blank" href={link.link.href}>{link.link.title}</a>
            <hr/>
          {/each}
        </section>
    {/each}
</main>