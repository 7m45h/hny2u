<script lang="ts">
	import Partying from './partying.svelte';
	import Wish from './wish.svelte';

	export let name: string;
</script>

<section>
	<Wish {name} />
	<Partying />
	<iframe
		title="jazzz"
		src="https://www.youtube-nocookie.com/embed/Vmwx8pHB2Fw?autoplay=1"
		allow="autoplay"
		frameborder="0"
	></iframe>
	<div id="beat" class="club-elem"></div>
</section>

<style>
	@keyframes -global-Beat {
		80% {
			background-color: white;
		}
	}

	@keyframes -global-Move {
		0% {
			transform: rotateZ(10deg);
		}

		50% {
			transform: rotateZ(-5deg);
		}
	}

	@keyframes -global-Rave {
		0% {
			filter: drop-shadow(-10px 0px 5px red);
		}

		25% {
			filter: drop-shadow(0px 10px 5px #0bff01);
		}

		50% {
			filter: drop-shadow(10px 0px 5px blue);
		}

		75% {
			filter: drop-shadow(0px -10px 5px #ab20fd);
		}
	}

	section {
		background-color: black;

		iframe {
			animation: Rave 400ms steps(1, end) 26s infinite;
		}

		#beat {
			pointer-events: none;
			position: absolute;
			top: 0px;
			left: 0px;
			width: 100dvw;
			height: 100dvh;
			animation: Beat 200ms steps(1, end) 109s infinite;
		}
	}
</style>
