function practice_1(input) {
  const totalCount = input.reduce((acc, item) => {
    if (!(item in acc)) {
      acc[item] = 1;
      return acc;
    }
    acc[item] += 1;
    return acc;
  }, {});
  return totalCount;
}

const input1 = ["a", "b", "c", "a", "c", "a"];
console.log("advanced1 :", practice_1(input1));
