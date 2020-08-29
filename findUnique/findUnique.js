function findUnique(l1, l2) {
  let result = [];
  let hash = {};

  for (let i = 0; i < l1.length; i++) {
    hash[l1[i]] = "unique";
  }

  for (let j = 0; j < l2.length; j++) {
    if (hash[l2[j]] === "unique") {
      hash[l2[j]] = "!unique";
    } else {
      hash[l2[j]] = "unique";
    }
  }

  for (let key in hash) {
    if (hash[key] === "unique") {
      result.push(key)
    }
  }
  return result;
}

console.log(findUnique([1, 2], [2, 3, 4, 5]));

