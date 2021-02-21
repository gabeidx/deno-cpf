/**
 * Removes non-digit values from a given string
 * @param value The value to be cleaned up
 */
export function cleanup(value: number | string): string {
	return value.toString().replace(/[^\d]/g, '')
}
