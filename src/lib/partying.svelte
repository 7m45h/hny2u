<script>
	import { onMount } from 'svelte';

	let duck_src = $state('duck_still.avif');
	let kermit_src = $state('kermit_still.avif');
	let heart_src = $state('heart_still.avif');
	let patrick_src = $state('patrick_still.avif');
	let polka_src = $state('polka_still.avif');
	let toothless_src = $state('toothless_still.avif');

	function start_dance() {
		duck_src = 'duck.avif';
		kermit_src = 'kermit.avif';
		heart_src = 'heart.avif';
		patrick_src = 'patrick.avif';
		polka_src = 'polka.avif';
		toothless_src = 'toothless.avif';
	}

	onMount(() => window.setTimeout(start_dance, 109000));
</script>

<img id="duck" src="./images/{duck_src}" alt="duck" />
<img id="kermit" src="./images/{kermit_src}" alt="kermit" />
<img id="heart" src="./images/{heart_src}" alt="heart" />
<img id="patrick" src="./images/{patrick_src}" alt="patrick" />
<img id="polka" src="./images/{polka_src}" alt="polka" />
<img id="toothless" src="./images/{toothless_src}" alt="toothless" />

<style>
	img {
		--margin: 8px;

		position: absolute;
		border: 5px solid black;
		height: 30%;
		animation-name: Move, Rave;
		animation-duration: 2s, 400ms;
		animation-timing-function: steps(1, end);
		animation-delay: 71s, 26s;
		animation-iteration-count: infinite;
	}

	#duck {
		top: var(--margin);
		left: var(--margin);
	}

	#kermit {
		left: var(--margin);
	}

	#heart {
		left: var(--margin);
		bottom: var(--margin);
	}

	#patrick {
		top: var(--margin);
		right: var(--margin);
	}

	#polka {
		right: var(--margin);
	}

	#toothless {
		bottom: var(--margin);
		right: var(--margin);
	}
</style>
