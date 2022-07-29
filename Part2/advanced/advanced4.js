function practice_4(input) {
  const groupedFinal = input.reduce((acc, item) => {
    const itemKey = item.key;
    if (acc[itemKey] == null) acc[itemKey] = 0;
    acc[itemKey] += item.value;
    return acc;
  }, {});
  return groupedFinal;
}

const input4 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log("advanced4 :", practice_4(input4));
