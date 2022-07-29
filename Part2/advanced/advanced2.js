function practice_2(input, mapping) {
  const mapedArray = input.reduce((acc, item) => {
    if (item in mapping) {
      acc.push(mapping[item]);
    }
    return acc;
  }, []);
  return mapedArray;
}

const arr = ["a", "b", "c", "a", "b"];
const mapping = {
  a: 1,
  b: 2,
  c: 3,
};
console.log("advanced2 :", practice_2(arr, mapping));
