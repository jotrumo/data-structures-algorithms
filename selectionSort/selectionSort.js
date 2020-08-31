//FUNCTION DEFINITIONS
function selectionSort(arr) {
  let sortedIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    sortedIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[sortedIndex]) {
        sortedIndex = j
      }
    }
    let temp = arr[i];
    arr[i] = arr[sortedIndex];
    arr[sortedIndex] = temp;
  }
  return arr;
}

//ASSERTIONS
function assertEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`${testName} [PASSED]`);
  } else {
    console.log(`${testName} [FAILED]\nEXPECTED [${expected}]\nACTUAL [${actual}]`)
  }
}

//TEST CASES
let testOutput = selectionSort([2, 3]);
let expectedOutput = [2, 3];

console.log(assertEqual(testOutput, expectedOutput, 'Array outputs are equal'))