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
    test('returns correct result if numbers are multiple of both 3 and 5', () => {
		expect(sumMultiples([15, 30, 45, 8, 23])).toBe(90);
	});

})

describe('isValidDNA', () =>{
    const dna = 'tatgactgcatgcgggagggtgattcgttagccgcatggagacgta'
    const notdna = 'thisisnotadnasequence'

    
    test('Returns true with string of only TGAC', () => {
        expect(isValidDNA(dna)).toBe(true)
    })
    test('Returns false with string containging a letter other than TGAC', () => {
        expect(isValidDNA(notdna)).toBe(false)
    })
    test('Returns correct result regardless of case', () => {
        
        expect(isValidDNA(dna.toLowerCase())).toBe(true)
        expect(isValidDNA(dna.toUpperCase())).toBe(true)
        expect(isValidDNA(notdna.toLowerCase())).toBe(false)
        expect(isValidDNA(notdna.toUpperCase())).toBe(false)
    })
})