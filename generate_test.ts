import { assertEquals } from 'https://deno.land/std@0.86.0/testing/asserts.ts'

import { validate } from './validate.ts'
import { generate } from './generate.ts'

Deno.test('generate() returns valid CPFs formatted', () => {
	assertEquals(validate(generate()), true)
	assertEquals(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$/.test(generate()), true)
})
