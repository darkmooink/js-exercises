import {
	sumMultiples,
	isValidDNA,
	getComplementaryDNA,
	isItPrime,
	createMatrix,
	areWeCovered,
} from '../challenges/exercise4';


describe('sumMultiples', () => {
	test('returns the sum of numbers that are a multiple of 3 or 5', () => {
		expect(sumMultiples([5, 3, 7, 8, 1, 10], 7)).toBe(8);
		expect(sumMultiples([5, 3, 7, 8, 1, 10], 1)).toBe(10);
		expect(sumMultiples([4, 22, 654, 123, 65, 23, 40, 1], 22)).toBe(654);
	});
	test('returns 0 if there are no numbers that are multiples of 3 or 5 ', () => {
		expect(sumMultiples([5, 3, 7, 8, 1, 10], 7)).toBe(8);
	});
	test('returns 0 if passed an empty string ', () => {
		expect(sumMultiples([5, 3, 7, 8, 1, 10], 7)).toBe(8);
	});
})