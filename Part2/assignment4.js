function twoSum(nums,target){
    let correct_num_array =[]
    let match_num_index =[]
    const array_index = nums.filter((item)=>{
        if(item < target){
            return item
        }
    })
    array_index.sort()
    array_index.forEach((item) => {
        const minus_result = target - item
        const match_num = array_index.find((item)=>{
            return item === minus_result;
        })
        if(match_num != undefined){
            const not_repeat = correct_num_array.every(item=>{
                return match_num !== item[0].num1 && match_num!==item[1].num2
            })
            if(not_repeat){
                const current_index = nums.findIndex(value=> value ===item)
                const match_index = nums.findIndex(item=>item === match_num)
                correct_num_array.push([{num1:item,index:current_index},{num2:match_num,index:match_index}])
            }
            // nums.forEach((item,index)=>{
            //     if(item === match_num){
            //         correct_num_array.push(index)
            //     }
            // })
        }
        
    });
    correct_num_array.forEach(item=>{
        match_num_index.push([item[0].index,item[1].index])
    })
    
    return match_num_index
}

console.log(twoSum([2,7,11,15],9));
