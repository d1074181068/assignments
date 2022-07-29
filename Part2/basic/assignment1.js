function max(numbers) {
  const maxNum = numbers.reduce((biggerNum, currentValue) => {
    if (biggerNum > currentValue) return biggerNum;
    return currentValue;
  });
  return maxNum;
}

console.log("asg1 :", max([1, 2, 4, 5]));
console.log("asg1 :", max([5, 2, 7, 1, 6]));
console.log("asg1 :", max([-5, -2, -7, -1, -6]));
