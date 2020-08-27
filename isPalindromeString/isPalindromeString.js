function isPalindrome(string) {
  // Write your code here.
	if (string.length === 1) {
		return true;
	}

	let reversedString = "";

	for (let i = string.length - 1; i >= 0; i--) {
		reversedString += string[i];
	}

	return string === reversedString;
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
