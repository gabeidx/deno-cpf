/**
 * Formats a valid CPF
 *
 * @param cpf The CPF value to be formatted
 *
 * ```ts
 * format(10049552600) // returns 100.495.526-00
 * ```
 */
export function format(cpf: number | string): string {
	return (
		cpf
			.toString()
			// Remove non digit characters
			.replace(/[^\d]/g, '')
			// Apply formatting
			.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, '$1.$2.$3-$4')
	)
}

