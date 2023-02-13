import {readable, writable} from 'svelte/store'

export const currentPage = writable('')
export const menuVisible = writable(false)
export const screenNav = readable(597)