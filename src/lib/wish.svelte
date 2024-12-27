<script lang="ts">
	export let name: string = 'anon';
	const crnt_date = new Date();
</script>

<div>
	<span>Happy New Year</span>
	<span>! {name} !</span>
	<span>*... {crnt_date.getFullYear()} ...*</span>
</div>

<style>
	div {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		width: 80%;

		span {
			font-size: 8em;
		}
	}
</style>
