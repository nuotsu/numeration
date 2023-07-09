import { writable } from 'svelte/store'

export const mode = writable<App.Mode>('number')

mode.subscribe(m => {
	if (typeof document === 'undefined') return
	document.body.dataset.mode = m
})
