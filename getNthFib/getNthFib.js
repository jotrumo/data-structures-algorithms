function getNthFib(n) {
  // Write your code here.
	let base = 0;
	let basePlusOne = base + 1;
	let count = 2;
	let result;

	if (n === 1) {
		return base;
	}

	if (n === 2) {
		return basePlusOne;
	}

	while (count < n) {
		result = base + basePlusOne;
		base = basePlusOne;
		basePlusOne = result;
		count++;
	}

	return result;
}

// Do not edit the line below.
exports.getNthFib = getNthFib;
