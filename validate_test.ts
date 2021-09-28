import { assertEquals } from 'https://deno.land/std@0.108.0/testing/asserts.ts'

import { validate } from './validate.ts'

Deno.test('validate() returns true on valid formatted CPFs', () => {
	assertEquals(validate('363.552.510-30'), true)
	assertEquals(validate('784.128.565-54'), true)
	assertEquals(validate('411.466.057-73'), true)
	assertEquals(validate('386.000.358-56'), true)
})

Deno.test('validate() returns true on valid unformatted CPFs', () => {
	assertEquals(validate('36355251030'), true)
	assertEquals(validate('78412856554'), true)
	assertEquals(validate(41146605773), true)
	assertEquals(validate(38600035856), true)
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
