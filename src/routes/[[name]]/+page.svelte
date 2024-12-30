<script lang="ts">
	import type { PageData } from './$types';
	import Countdown from '$lib/countdown.svelte';
	import Party from '$lib/party.svelte';
	import { onMount } from 'svelte';

	const { data }: { data: PageData } = $props();
	const name: string = data.name ? data.name : 'anon';

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
		const crnt_month = new Date().getMonth();

		if (crnt_month == 11 || crnt_month == 0) {
			window.setInterval(() => (party_time = is_partytime()), 1000);
		}
	});
</script>

<svelte:head>
	<meta property="og:description" content="new year wish for {name}" />
</svelte:head>

<!-- {#if party_time} -->
<Party {name} />

<!-- {:else}
	<Countdown />
{/if} -->

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
		height: 25%;
	}
</style>
