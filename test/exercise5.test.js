import {
	sumMultiples,
	isValidDNA,
	getComplementaryDNA,
	isItPrime,
	createMatrix,
	areWeCovered,
} from '../challenges/exercise5';


describe('sumMultiples', () => {
	test('returns the sum of numbers that are a multiple of 3 or 5', () => {
		expect(sumMultiples([1, 3, 7, 8, 5])).toBe(8);
		expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
		expect(sumMultiples([5, 22, 654, 123, 65, 23, 40, 1])).toBe(887);
	});
	test('returns 0 if there are no numbers that are multiples of 3 or 5 ', () => {
		expect(sumMultiples([1, 2, 7, 8, 1])).toBe(0);
	});
	test('returns 0 if passed an empty string ', () => {
		expect(sumMultiples([])).toBe(0);
	});
})