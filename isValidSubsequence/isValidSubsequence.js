function isValidSubsequence(array, sequence) {
  // Write your code here.
	let index = 0;
	let count = 0;

	if (JSON.stringify(array) === JSON.stringify(sequence)) {
		return true;
	}

	if (sequence.length === 1 && array.indexOf(sequence[0]) > -1) {
		return true;
	}

	while (count < sequence.length) {
		if (index === array.length) {
			return false;
		}
		if (array[index] === sequence[count]) {
			count++;
		}
		index++;
	}
	if (count !== sequence.length) {
		return false
	} else {
		return true;
	}

}
// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
