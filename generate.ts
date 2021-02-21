import { format } from './format.ts'
import { getVerifyingDigits } from './utils.ts'

/**
 * Generates a valid CPF
 *
 * ```ts
 * generate() // randomly generated, valid CPF
 * ```
 */
export function generate(): string {
	let cpf = ''
	let i = 9

	while (i--) {
		cpf += Math.floor(Math.random() * 9)
	}

	const [y, z] = getVerifyingDigits([...cpf])

	return format(`${cpf}${y}${z}`)
}
