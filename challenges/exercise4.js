export const findNextNumber = (nums, n) => {
	if (nums === undefined) throw new Error('nums is required');
	if (n === undefined) throw new Error('n is required');
	const indexOfGivenNumber = nums.findIndex((num => num === n))
	if (indexOfGivenNumber < 0 || indexOfGivenNumber === nums.length - 1) return null;
	return nums[indexOfGivenNumber+1]
};

export const count1sand0s = (str) => {
	if (str === undefined) throw new Error('str is required');
	let count = {0:0, 1:0,}
	Array.from(str).forEach(number => {
		count[number]++
	})
	return count
};

export const reverseNumber = (n) => {
	if (n === undefined) throw new Error('n is required');

	return +Array.from(n.toString()).reverse().join('')
};

export const sumArrays = (arrs) => {
	if (arrs === undefined) throw new Error('arrs is required');
	let total = 0
	arrs.forEach(arr => {
		arr.forEach(num => {
			total += num
		})
	})
	return total
};

export const arrShift = (arr) => {
	if (arr === undefined) throw new Error('arr is required');
	if (arr.length < 2) return arr
	let first = arr[0], last = arr[arr.length-1]
	arr[0] = last
	arr[arr.length] = first
	return arr
};

export const findNeedle = (haystack, searchTerm) => {
	if (haystack === undefined) throw new Error('haystack is required');
	if (searchTerm === undefined) throw new Error('searchTerm is required');
	// Your code here!
};

export const getWordFrequencies = (str) => {
	if (str === undefined) throw new Error('str is required');
	// Your code here!
};
