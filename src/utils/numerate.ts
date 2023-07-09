import { mode } from './store'

export const NUM_EN = [
	'one',
	'ten',
	'one hundred',
	'one thousand',
	'10 thousand',
	'100 thousand',
	'1 million',
	'10 million',
	'100 million',
	'1 billion',
	'10 billion',
	'100 billion',
	'1 trillion',
	'10 trillion',
	'100 trillion',
]

export const NUM_JA = [
	'一',
	'十',
	'百',
	'千',
	'1万',
	'10万',
	'100万',
	'1000万',
	'1億',
	'10億',
	'100億',
	'1000億',
	'1兆',
	'10兆',
	'100兆',
	'1000兆',
	'1京',
]

export default (number: number | string, locale: 'en' | 'ja') => {
	const digits = String(number).replace(/\D/, '').length

	let offset = 0
	mode.subscribe(m => {
		offset = m === 'currency' ? 2 : 0
	})

	switch(locale) {
		case 'en': return NUM_EN[digits - 1]
		case 'ja': return NUM_JA[digits - 1 + offset]

		default: return Number(number)
	}
}
