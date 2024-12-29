<script lang="ts">
	import type { PageData } from './$types';
	import Timer from '$lib/timer.svelte';
	import Waiting from '$lib/waiting.svelte';
	import Wish from '$lib/wish.svelte';
	import Partying from '$lib/partying.svelte';
	import { onMount } from 'svelte';

	const { data }: { data: PageData } = $props();
	const name: string = data.name ? data.name : 'anon';

	const crnt_date = new Date();

	function is_partytime(): boolean {
		const crnt = new Date();
		const crnt_date = crnt.getDate();
		const crnt_hour = crnt.getHours();

		if (crnt_date == 1) {
			if (crnt_hour == 0 || crnt_hour > 0) {
				return true;
			}

			if (crnt_hour == 12 || crnt_hour > 12) {
				return false;
			}
		}

		return false;
	}

	let party_time: boolean = $state(is_partytime());

	onMount(() => {
		const crnt_month = crnt_date.getMonth();

		if (crnt_month == 11 || crnt_month == 0) {
			window.setInterval(() => (party_time = is_partytime()), 1000);
		}
	});
</script>

<svelte:head>
	<meta property="og:description" content="new year wish for {name}" />
</svelte:head>

<div>
	{#if party_time}
		<Wish {name} />
		<Partying />
		<iframe
			title="jazzz"
			src="https://www.youtube-nocookie.com/embed/Vmwx8pHB2Fw?autoplay=1"
			allow="autoplay"
			frameborder="0"
		></iframe>
	{:else}
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
	{/if}
</div>

<style>
	div {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		width: 100%;
		height: 100%;

		span {
			font-size: 8em;
		}

		iframe {
			width: 50%;
			height: 25%;
			filter: drop-shadow(10px 10px 5px black);
		}
	}
</style>
