<fieldset class="section">
	<div class="flex flex-wrap gap-4 items-center justify-center">
		<legend>Mode</legend>

		<label>
			<input type="radio" name="mode" value="number" checked on:change={change}>
			🔢 <span>Number</span>
		</label>

		<label>
			<input type="radio" name="mode" value="currency" on:change={change}>
			💰 <span>Currency</span>
		</label>
	</div>
</fieldset>

<style>
	input {
		cursor: pointer;
		accent-color: #000;
	}

	label:hover span {
		text-decoration: dotted underline;
	}
</style>

<script lang="ts">
	import { mode } from '$utils/store'

	function change(e: Event) {
		$mode = (e.target as HTMLInputElement).value as App.Mode
	}
</script>
