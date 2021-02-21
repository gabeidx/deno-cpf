/**
 * Removes non-digit values from a given string
 * @param value The value to be cleaned up
 */
export function cleanup(value: number | string): string {
	return value.toString().replace(/[^\d]/g, '')
}

/**
 * Calculate the verifying digits for a given array of numbers
 *
 * Given a CPF of `abc.def.ghi-yz`, the verifying digits `yz` are calculated in
 * the following way:
 *
 * ### Calculating the value of `y`
 *
 * 1. Sum the multiplication of `a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`
 *    by the weights `10`,`9`,`8`,`7`,`6`,`5`,`4`,`3`,`2` respectively;
 *    ```
 *    sum1 = (a * 10) + (b * 9) + (c * 8) + (d * 7) + (e * 6) + (f * 5) + (g * 4) + (h * 3) + (i * 2)
 *    ```
 * 2. Divide the total by 11 and obtain the rest;
 * 3. If the rest of the division is less then 2, then the value of `y` is 0.
 *    If the rest of the division is greater then or equal to 2, then the value
 *    of `y` is the subtraction of 11 and the rest;
 *
 * ### Calculating the value of `z`
 *
 * 1. Sum the multiplication of `a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i` and `y` by
 *    the by the weights `11`,`10`,`9`,`8`,`7`,`6`,`5`,`4`,`3`,`2` respectively;
 * 2. Divide the total by 11 and obtain the rest;
 * 3. If the rest of the division is less then 2, then the value of `z` is 0.
 *    If the rest of the division is greater then or equal to 2, then the value
 *    of `z` is the subtraction of 11 and the rest;
 *

 * ```
 * sum2 = (a * 11) + (b * 10) + (c * 9) + (d * 8) + (e * 7) + (f * 6) + (g * 5) + (h * 4) + (i * 3) + (y * 2)
 * ```
 *
 * This way, for a hipotetical CPF `844.186.675-yz`, we have:
 *
 * ```
 * sum1 == 288 -> sum1 / 11 == 26, rest 2 -> y == 11-2 -> y == 9
 * sum2 == 267 -> sum2 / 11 == 24, rest 3 -> z == 11-3 -> z == 8
 * ```
 *
 * @param values The values to be calculated
 */
export function getVerifyingDigits(values: string[]): [number, number] {
	const numbers = [...values]
		// Reverse the array so the calculation can use the index as "weight"
		.reverse()
		// Parse all to number
		.map((n) => parseInt(n, 10))

	const calculate = (numbers: number[]): number =>
		numbers
			// Multiply by "weight"
			.map((n, i) => n * (9 - (i % 10)))
			// Then sum everything
			.reduce((a, b) => a + b)

	const y = (calculate(numbers) % 11) % 10
	const z = ((calculate([0, ...numbers]) + y * 9) % 11) % 10

	return [y, z]
}
