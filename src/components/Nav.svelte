<script>
	export let segment;
</script>

<style>
	nav {
		width: 100%;
		padding: 30px 0px 0px;
		-webkit-flex-shrink: 0;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		z-index: 10;
		position: absolute;
		top: 0px;
	}
	
	
	ul {
		margin: 0;
		padding: 0;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
	}

	.selected {
		cursor: pointer;
		display: inline-block;
		margin-left: 10px;
		text-decoration: none;
		background-color: #3f3d56;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
		border: 5px solid #3f3d56;
	}
	a:hover {
		background-color: #3f3d56;
	}
	div > .nav {
		height: 100px;
		display: hidden;
	}
	.links {
		max-width: 1200px;
		padding: 0 20px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}
	.name, .name:hover {
		border: none;
		background: none;
	}

</style>

<nav class='{Boolean(segment) === false ? "" : "alt-nav"}'>
	<div class="links">
		{#if Boolean(segment)}
			<a class="name" href=".">Pat Smith</a>
			{:else}
			<div/>
		{/if}
		<ul>
			<li><a class='{segment === "readings" ? "selected" : ""}' href='readings'>readings</a></li>
		</ul>
	</div>
</nav>
<div class='nav {Boolean(segment) === false ? "" : "alt-nav"}'/>