<section class="section text-sm">
	<table class="text-center mx-auto whitespace-nowrap">
		<caption>Examples</caption>
		{#each numbers as number}
			<tr>
				<th>
					{format(number)}
				</th>

				<td>{numerate(number, 'en')}</td>
				{#key $mode}
					<td lang="ja">
						{numerate(number, 'ja')}

						{#if $mode === 'currency'}
							<small>円</small>
						{/if}
					</td>
				{/key}
			</tr>
		{/each}
	</table>
</section>

<style lang="postcss">
	th {
		text-align: right;
	}

	td {
		@apply px-2;
	}
</style>

<script>
	import format from '$utils/format'
	import numerate from '$utils/numerate'
	import { mode } from '$utils/store'

	const numbers = [
		10_000,
		1_000_000,
		100_000_000,
		1_000_000_000,
		1_000_000_000_000,
	]
</script>
