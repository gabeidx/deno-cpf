import { assertEquals } from 'https://deno.land/std@0.108.0/testing/asserts.ts'

import { format } from './format.ts'

Deno.test('format() returns valid CPFs formatted', () => {
	assertEquals(format('10049552600'), '100.495.526-00')
	assertEquals(format(10049552600), '100.495.526-00')
})
