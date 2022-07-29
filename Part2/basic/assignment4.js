function twoSum(nums, target) {
  let correctNumArray = [];
  let matchNumIndex = [];
  const arrayIndex = nums.filter((item) => {
    if (item < target) {
      return item;
    }
  });
  arrayIndex.sort();
  arrayIndex.forEach((item) => {
    const minusResult = target - item;
    const matchNum = arrayIndex.find((item) => {
      return item === minusResult;
    });
    if (matchNum != undefined) {
      const notRepeat = correctNumArray.every((item) => {
        return matchNum !== item[0].num1 && matchNum !== item[1].num2;
      });
      if (notRepeat) {
        const currentIndex = nums.findIndex((value) => value === item);
        const matchIndex = nums.findIndex((item) => item === matchNum);
        correctNumArray.push([
          { num1: item, index: currentIndex },
          { num2: matchNum, index: matchIndex },
        ]);
      }
      // nums.forEach((item,index)=>{
      //     if(item === matchNum){
      //         correctNumArray.push(index)
      //     }
      // })
    }
  });
  correctNumArray.forEach((item) => {
    matchNumIndex.push([item[0].index, item[1].index]);
  });

  return matchNumIndex;
}

console.log("asg4 :", twoSum([2, 4, 7, 11, 5, 15], 9));
