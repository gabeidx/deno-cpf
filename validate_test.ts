import { assertEquals } from 'https://deno.land/std@0.86.0/testing/asserts.ts'

import { validate } from './validate.ts'

Deno.test('validate() returns true on valid formatted CPFs', () => {
	assertEquals(validate('100.495.526-00'), true)
	assertEquals(validate('608.608.396-72'), true)
	assertEquals(validate('507.657.876-87'), true)
})

Deno.test('validate() returns true on valid unformatted CPFs', () => {
	assertEquals(validate(10049552600), true)
	assertEquals(validate('60860839672'), true)
	assertEquals(validate('50765787687'), true)
})

Deno.test('validate() returns false on invalid formatted CPFs', () => {
	assertEquals(validate('111.222.333-44'), false)
	assertEquals(validate('001.002.003-45'), false)
})

Deno.test('validate() returns false on invalid unformatted CPFs', () => {
	assertEquals(validate(11122233344), false)
	assertEquals(validate('00100200345'), false)
})

Deno.test('validate() returns false on values longer than 11 characters', () => {
	assertEquals(validate(123456789001), false)
	assertEquals(validate(1234567890012), false)
	assertEquals(validate(12345678900123), false)
	assertEquals(validate(123456789001234), false)
	assertEquals(validate(1234567890012345), false)
	assertEquals(validate(12345678900123456), false)
	assertEquals(validate(123456789001234567), false)
})
Deno.test('validate() returns false on values shorter than 11 characters', () => {
	assertEquals(validate(1234567), false)
	assertEquals(validate(123456), false)
	assertEquals(validate(12345), false)
	assertEquals(validate(1234), false)
	assertEquals(validate(123), false)
	assertEquals(validate(12), false)
	assertEquals(validate(1), false)
})

Deno.test('validate() returns false on sequential values', () => {
	assertEquals(validate('00000000000'), false)
	assertEquals(validate(11111111111), false)
	assertEquals(validate(22222222222), false)
	assertEquals(validate(33333333333), false)
	assertEquals(validate(44444444444), false)
	assertEquals(validate(55555555555), false)
	assertEquals(validate(66666666666), false)
	assertEquals(validate(77777777777), false)
	assertEquals(validate(88888888888), false)
	assertEquals(validate(99999999999), false)
})
