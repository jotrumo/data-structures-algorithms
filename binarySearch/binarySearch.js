function binarySearch(array, target) {
	return helper(array, target, 0, array.length - 1);
}

function helper(array, target, left, right) {
	if (left > right) {
		return -1;
	}
	let pivot = Math.floor((left + right) / 2);
	let possibleMatch = array[pivot];

	if (possibleMatch === target) {
		return pivot;
	} else if (possibleMatch < target) {
		return helper(array, target, pivot + 1, right);
	} else if (possibleMatch > target) {
		return helper(array, target, left, pivot - 1);
	}
}

// Do not edit the line below.
exports.binarySearch = binarySearch;
