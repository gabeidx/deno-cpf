import { cleanup, getVerifyingDigits } from './utils.ts'

/**
 * Validates a CPF
 *
 * @param cpf The CPF to be validated
 *
 * ```ts
 * validate(12345678900) // false
 * validate(10049552600) // true
 * ```
 */
export function validate(cpf: number | string): boolean {
	const value = cleanup(cpf)

	if (
		// Must be 11 non-digit characters
		value.length !== 11 ||
		// Must be non-repeating digits
		/^(\d)\1+$/.test(value)
	) {
		return false
	}

	// First 9 digits calculation…
	const [y, z] = getVerifyingDigits([...value.slice(0, 9)])

	// …matches the last 2 verifying digits
	return `${y}${z}` === value.slice(-2)
}
