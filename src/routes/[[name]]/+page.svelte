<script lang="ts">
	import type { PageData } from './$types';
	import Countdown from '$lib/countdown.svelte';
	import Party from '$lib/party.svelte';
	import { onMount } from 'svelte';

	const { data }: { data: PageData } = $props();
	const name: string = data.name ? data.name : 'anon';

	let is_portrait = $state(true);

	function handle_orientation(check: MediaQueryList | MediaQueryListEvent) {
		is_portrait = check.matches;
	}

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
		const portrait_check = window.matchMedia('(orientation: portrait)');
		const crnt_month = new Date().getMonth();

		if (crnt_month == 11 || crnt_month == 0) {
			window.setInterval(() => (party_time = is_partytime()), 1000);
		}

		handle_orientation(portrait_check);
		portrait_check.addEventListener('change', handle_orientation);
	});
</script>

<svelte:head>
	<meta property="og:description" content="new year wish for {name}" />
</svelte:head>

{#if is_portrait}
	<div id="portrait-warn">
		<img src="./images/please_landscape.avif" alt="viwe in landscape mode please" />
	</div>
{:else if party_time}
	<Party {name} />
{:else}
	<Countdown />
{/if}

<style>
	:global(section) {
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
		width: 100%;
		height: 100%;
	}

	:global(iframe) {
		width: 50%;
		height: 20%;
	}

	#portrait-warn {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
		background-color: black;

		> img {
			width: 90vmin;
		}
	}
</style>
