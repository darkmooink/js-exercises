export function getFillings(sandwich) {
	if (sandwich === undefined) throw new Error('ingredients is required');

	return sandwich.fillings;
}

export function isFromManchester(person) {
	if (person === undefined) throw new Error('person is required');

    return person.city.toUpperCase() === "Manchester".toUpperCase()};

export function getBusNumbers(people) {
	if (people === undefined) throw new Error('people is required');
	if (people < 0) throw new Error('You cant have negitive people');
	const MAX_PEOPLE_PER_BUS = 40;
	return Math.ceil( people / MAX_PEOPLE_PER_BUS );
}

export function countSheep(arr) {
	if (arr === undefined) throw new Error('arr is required');

	return countEachInstanceInArray(arr)["sheep"] || 0
}

export function hasMPostCode(person) {
	if (person === undefined) throw new Error('person is required');
	// checks if 2nd char is a number and the first is "M"
	return (/^[0-9]$/.test(person.address.postCode[1]) && 
	person.address.postCode[0] === "M")
}

function countEachInstanceInArray(arr) {
	const counts = {};
	for (const num of arr) {
		counts[num] = (counts[num] || 0) + 1
	  }
	return counts
}