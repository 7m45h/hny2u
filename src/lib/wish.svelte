<script lang="ts">
	export let name: string;
	const crnt_date = new Date();
</script>

<div>
	<span>Happy New Year</span>
	<span id="name">! {name} !</span>
	<span id="year">*... {crnt_date.getFullYear()} ...*</span>
</div>

<style>
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 80%;

		span {
			color: white;
			font-size: 20vmin;
			animation: Rave 400ms steps(1, end) 26s infinite;
		}

		#name {
			animation-delay: 26100ms;
		}

		#year {
			animation-delay: 26200ms;
		}
	}
</style>
