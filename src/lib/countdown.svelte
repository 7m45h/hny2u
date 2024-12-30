<script>
	import Timer from './timer.svelte';
	import Waiting from './waiting.svelte';

	const crnt_date = new Date();
</script>

<section style="background-image: url('./images/background.avif')">
	<span>
		{crnt_date.getFullYear()} &hyphen;&hyphen;&GT; {crnt_date.getFullYear() + 1}
	</span>
	<Timer />
	<Waiting />
	<iframe
		title="jazzz"
		src="https://www.youtube-nocookie.com/embed/pDfJuS8OksM?autoplay=1"
		allow="autoplay"
		frameborder="0"
	></iframe>
</section>

<style>
	section {
		background-repeat: repeat;

		span {
			font-size: 8em;
		}

		iframe {
			filter: drop-shadow(10px 10px 5px black);
		}
	}
</style>
