<label class="flex items-center gap-2 bg-white/20 border border-neutral-200 rounded-md px-1">
	{#if label}
		<span>{label}</span>
	{/if}

	<select class="grow text-center" on:change={change}>
		{#each options as value, i}
			<option {value} selected={i === $digits - 1}>
				{value}
			</option>
		{/each}
	</select>
</label>

<script lang="ts">
	import { digits } from './Converter.svelte'

	export let
		label: string,
		options: string[]

	function change(e: Event) {
		$digits = (e.target as HTMLSelectElement).selectedIndex + 1
	}
</script>
