import { assertEquals } from 'https://deno.land/std@0.86.0/testing/asserts.ts'

import { cleanup } from './utils.ts'

Deno.test('cleanup() removes non-digit values from a given string', () => {
	assertEquals(cleanup('111.222.333-44'), '11122233344')
	assertEquals(cleanup('abcdef1'), '1')
})
