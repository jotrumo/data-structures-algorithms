function isValidSubsequence(array, sequence) {
  // Write your code here.
	let index = 0;
	let count = 0;

	while (count < sequence.length) {
		if (index === array.length) {
			return false;
		}
		if (array[index] === sequence[count]) {
			count++;
		}
		index++;
	}
	return count === sequence.length;
}
// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
