/**
 * Removes non-digit values from a given string
 * @param cpf The string value to be cleaned up
 */
export function cleanup(cpf: number | string): string {
	return cpf.toString().replace(/[^\d]/g, '')
}
