import { it, expect, describe } from 'vitest';

import { cleanNumbers, transformToNumber } from './numbers';

describe('transformToNumber()', () => {
	it('should transform a string number to a number of type number', () => {
		const input = '1';

		const result = transformToNumber(input);

		expect(result).toBeTypeOf('number');
	});

	it('should transform a string number to a number of type number', () => {
		const input = '1';

		const result = transformToNumber(input);

		expect(result).toBe(+input);
	});

	it('should yield NaN for non-transformable values', () => {
		const input = 'invalid';
		const input2 = {};

		const result = transformToNumber(input);
		const result2 = transformToNumber(input2);

		expect(result).toBeNaN();
		expect(result2).toBeNaN();
	});
});

describe('cleanNumbers()', () => {
	it('should return array of numbers value if an array of string is provided', () => {
		const numbers = ['1', '2', '3'];
		const cleanedNumbers = cleanNumbers(numbers);

		//expect(cleanedNumbers[0]).toBeTypeOf('number');
		expect(cleanedNumbers).toEqual([1, 2, 3]);
	});

	it('should throw an error if an array with an empty string is provided', () => {
		const numbers = ['', 1];

		//awalys wrapping the function in another function to test throw error
		const cleanFn = () => cleanNumbers(numbers);

		expect(cleanFn).toThrow();
	});
});
