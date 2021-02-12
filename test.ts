import { assertEquals } from 'https://deno.land/std@0.86.0/testing/asserts.ts'

import { format } from './mod.ts'

Deno.test('format() returns valid CPFs formatted', () => {
	assertEquals(format('10049552600'), '100.495.526-00')
	assertEquals(format(10049552600), '100.495.526-00')
})

