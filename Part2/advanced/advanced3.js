function practice_3(input) {
  const groupedFinal = input.reduce((acc, item) => {
    const itemKey = item.key;
    if (acc[itemKey] == null) acc[itemKey] = [];
    acc[itemKey].push(item.value);
    return acc;
  }, {});
  return groupedFinal;
}
const input3 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
console.log("advanced3 :", practice_3(input3));
