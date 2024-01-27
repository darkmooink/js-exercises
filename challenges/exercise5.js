/* 
⚠️
⚠️ See exercise5.md - this time you have to write your own tests! ⚠️
⚠️
*/

/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
export const sumMultiples = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	let sum = 0
	arr.forEach(num => {
		if (num % 3 === 0 || num % 5 === 0) sum += num
	})
	return sum
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
export const isValidDNA = (str) => {
	if (str === undefined) throw new Error('str is required');
	return /^[TGACtgac]+$/.test(str);
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
export const getComplementaryDNA = (str) => {
	if (str === undefined) throw new Error('str is required');
	if (!isValidDNA) throw new Error('string is not a valid DNA string');

	return str.toUpperCase().split('').map(base => {
		switch(base){
			case 'T':
				return 'A';
			case 'A':
				return 'T';
			case 'C':
				return 'G';
			case 'G':
				return 'C';
		}
	}).join('')
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
export const isItPrime = (n) => {
	if (n === undefined) throw new Error('n is required');

	//javascript breaks somewhere between 9*10^15 and 9.01*10^15
	if (n > 9000000000000000) new Error("numbers over 9,000,000,000,000,000 cant be checked")
	if (n === 1) return false
	const PRIMES = [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
	if (PRIMES.includes(n)){
		return true
	}
	for(const prime of PRIMES){
		
		if (n % prime === 0) {
			return false
		}
	}
	const rootn = Math.sqrt(n)
	//todo: make this more efficiant
	for(let i = PRIMES[PRIMES.length-1]; i < rootn; i += 2){
		if(n % i === 0) return false
	}

	return true
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. 
 * The parameter "fill" should be used as the filler of the arrays. 
 * For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
export const createMatrix = (n, fill) => {
	if (n === undefined) throw new Error('n is required');
	if (fill === undefined) throw new Error('fill is required');
	let x = [], y = []
	for(let i = 0; i<n; i++){
		x.push(fill)
	}
	for(let i = 0; i<n; i++){
		y.push(x)
	}
	//return [['foo', 'foo', 'foo'], ['foo', 'foo', 'foo'], ['foo', 'foo', 'foo']];
	return y
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
export const areWeCovered = (staff, day) => {
	if (staff === undefined) throw new Error('staff is required');
	if (day === undefined) throw new Error('day is required');
	staff = staff.filter(staffMember => {
		if (staffMember.rota.
			map(word => {return word.toUpperCase()}).
			includes(day.toUpperCase())) return true
	})
	return staff.length >= 3
};
