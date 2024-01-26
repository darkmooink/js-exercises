export function findSmallNums(nums) {
	if (!nums) throw new Error('nums is required');
	let smallNums = nums.filter(number => {
		return number<1
	})
	return smallNums
}

export function findNamesBeginningWith(names, char) {
	if (!names) throw new Error('names is required');
	if (!char) throw new Error('char is required');
	return names.filter(name => {
		return name[0] === char
	})
}

export function findVerbs(words) {
	if (!words) throw new Error('words is required');
	return words.filter(word => {
		if (word.startsWith("to ")) return true
	})
}

export function getIntegers(nums) {
	if (!nums) throw new Error('nums is required');
	return nums.filter(num => {
		return Number.isInteger(num)
	})
}

export function getCities(users) {
	if (!users) throw new Error('users is required');
	return users.map(user => {
		return user.data.city.displayName
	})
}

export function getSquareRoots(nums) {
	if (!nums) throw new Error('nums is required');
	return nums.map(number => {
		const squareRoot = Math.sqrt(number)
		//the + in the following removes any trailing 0.
		return +squareRoot.toFixed(2)
	})
}

export function findSentencesContaining(sentences, str) {
	if (!sentences) throw new Error('sentences is required');
	if (!str) throw new Error('str is required');
	return sentences.filter(sentence => {
		console.log(sentence.includes(str))
		if(sentence.toLowerCase().includes(str.toLowerCase())) return true
	})
}

export function getLongestSides(triangles) {
	if (!triangles) throw new Error('triangles is required');
	// Your code here
}
