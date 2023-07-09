<section class="section text-center">
	<label for="digits" class="grid gap-2">
		<big class="text-3xl font-black">
			{format(number)}
		</big>

		<span class="text-xs">
			{$digits}
			{#if $digits === 1}digit{:else}digits{/if}
		</span>

		<input
			id="digits"
			class="w-full sm:max-w-[12em] mx-auto"
			bind:value={$digits}
			type="range"
			min={1} max={15}
		/>
	</label>

	<div class="grid gap-2 justify-center text-xl mt-4">
		{#if $mode === 'currency'}
			<Select label="💵" options={NUM_EN} />
			<Select label="💴" options={NUM_JA.slice(2, NUM_JA.length)} />
		{:else}
			<Select label="🇺🇸" options={NUM_EN} />
			<Select label="🇯🇵" options={NUM_JA.slice(0, NUM_JA.length-2)} />
		{/if}
	</div>
</section>

<script lang="ts">
	import format from '$utils/format'
	import { NUM_EN, NUM_JA } from '$utils/numerate'
	import { mode } from '$utils/store'
	import Select from './Select.svelte'

	$: number = '1'.padEnd($digits, '0')
</script>

<script context="module" lang="ts">
	import { writable } from 'svelte/store'

	export const digits = writable(9)
</script>
