export function getSquares(nums) {
	if (nums === undefined) throw new Error('nums is required');
	let output = []
	for(const num of nums){
		output.push(num * num)
	}
	return output
}

export function camelCaseWords(words) {
	if (words === undefined) throw new Error('words is required');

	let outputStr = words[0]
	for (const word of words.slice(1, words.length+1)){
		outputStr += word[0].toUpperCase()+word.slice(1, word.length+1)
	}
	return outputStr
}

export function getTotalSubjects(people) {
	if (people === undefined) throw new Error('people is required');
	if (!Array.isArray(people)) throw new Error('people is not array')
	let subjectCount = 0;
	people.forEach(person => {
		subjectCount += person.subjects.length
	});
	return subjectCount;
	
}

export function checkIngredients(menu, ingredient) {
	if (menu === undefined) throw new Error('menu is required');
	if (!ingredient) throw new Error('ingredient is required');
	
	for (const dish of menu) {
		for (const dishIngredient of dish.ingredients) {
			if (dishIngredient === ingredient) {
				return true;
			}
		}
	}
	return false
}

export function duplicateNumbers(arr1, arr2) {
	if (arr1 === undefined) throw new Error('arr1 is required');
	if (arr2 === undefined) throw new Error('arr2 is required');
	let duplicateNumbers = []
	arr1.forEach((num1)=> {
		if (!duplicateNumbers.includes(num1) && arr2.includes(num1)) duplicateNumbers.push(num1)
	})
	return duplicateNumbers.sort()
}
