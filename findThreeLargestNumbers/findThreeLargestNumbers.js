function findThreeLargestNumbers(array) {
	// Write your code here.
	if (array.lenght < 3) {
		return "Array length must be greater than or equal to 3"
	}

	let firstHighestNum = null;
	let secondHighestNum = null;
	let thirdHighestNum = null;

	for (let i = 0; i < array.length; i++) {
		if (array[i] >= firstHighestNum || firstHighestNum === null) {
			thirdHighestNum = secondHighestNum;
			secondHighestNum = firstHighestNum;
			firstHighestNum = array[i];
		}
		if (array[i] >= secondHighestNum && array[i] < firstHighestNum || array[i] < firstHighestNum && secondHighestNum === null) {
			thirdHighestNum = secondHighestNum;
			secondHighestNum = array[i];
		}
		if (array[i] >= thirdHighestNum && array[i] < secondHighestNum || array[i] < secondHighestNum && thirdHighestNum === null) {
			thirdHighestNum = array[i];
		}
	}

	return [thirdHighestNum, secondHighestNum, firstHighestNum ];
}

// Do not edit the line below.
exports.findThreeLargestNumbers = findThreeLargestNumbers;