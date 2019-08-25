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
		color: rgb(255, 214, 229);
	}
	nav.alt-nav {
		color: #218796;
	}
	div > .nav.alt-nav {
		background-color: rgb(255, 214, 229);
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
		opacity: 0.8;
		color: rgb(255, 214, 229);
		text-decoration: none;
		border-radius: 5px;
		background:#218796;
	}

	a {
		text-decoration: none;
		padding: 1em 0.5em;
		display: block;
	}
	div > .nav {
		background-color: #218796;
		height: 100px;
		display: hidden;
	}
	.links {
		max-width: 800px;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
	}

</style>

<nav class='{Boolean(segment) === false ? "" : "alt-nav"}'>
	<div class="links">
		<a href=".">Pat Smith</a>
		<ul>
			<li><a class='{segment === "readings" ? "selected" : ""}' href='readings'>readings</a></li>
		</ul>
	</div>
</nav>
<div class='nav {Boolean(segment) === false ? "" : "alt-nav"}'/>