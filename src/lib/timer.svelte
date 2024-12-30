<script lang="ts">
	import { onMount } from 'svelte';

	const crnt_year = new Date();
	const next_year = new Date(`${crnt_year.getFullYear() + 1}-01-01 00:00:00`);

	let diff = $state(next_year.getTime() - Date.now());
	let in_seconds = $derived(Math.floor(diff / 1000));
	let in_minutes = $derived(Math.floor(in_seconds / 60));
	let in_hours = $derived(Math.floor(in_minutes / 60));

	let days = $derived(
		Math.floor(in_hours / 24)
			.toString()
			.padStart(2, '0')
	);
	let hours = $derived((in_hours % 24).toString().padStart(2, '0'));
	let minutes = $derived((in_minutes % 60).toString().padStart(2, '0'));
	let seconds = $derived((in_seconds % 60).toString().padStart(2, '0'));

	function update_time() {
		diff = next_year.getTime() - Date.now();
	}

	onMount(() => {
		window.setInterval(update_time, 1000);
	});
</script>

<div>
	<span>{days}</span>
	<span>:</span>
	<span>{hours}</span>
	<span>:</span>
	<span>{minutes}</span>
	<span>:</span>
	<span>{seconds}</span>
</div>

<style>
	div {
		display: grid;
		grid-template-columns: 1fr 0.25fr 1fr 0.25fr 1fr 0.25fr 1fr;
		grid-template-rows: 100%;
		width: 80%;
		font-size: 25vmin;
		filter: drop-shadow(1vmin 1vmin 1vmin black);

		span {
			justify-self: center;
			width: min-content;
			height: min-content;
		}
	}
</style>
