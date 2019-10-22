<script>
    export let segment;
</script>

<style>
    footer {
        color: whitesmoke;
        text-align: center;
        font-size: 35px;
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50px;
        padding: 20px 0;
    }
    a:hover {
        opacity: .8;
    }
    .logo {
        transition: 100ms;
        height: 40px;
        width: 40px;
        display: inline-block;
        text-indent: -9999px;
        background-size: 40px;
        background-color: #f2f2f2;
    }
    @media (prefers-color-scheme: light) {
        .logo {
            background-color: #0B0C10;
        }
    }
    .linkedin {
        -webkit-mask-image: url(/svg/linkedin.svg);
        mask-image: url(/svg/linkedin.svg);
    }
    .github {
        -webkit-mask-image: url(/svg/github.svg);
        mask-image: url(/svg/github.svg);
    }
</style>

<footer>
    <a class="logo linkedin" target="_blank" href="https://www.linkedin.com/in/patrsmith/">Linkedin</a>
    <a class="logo github" target="_blank" href="https://github.com/pd-smith">Github</a>
</footer>
