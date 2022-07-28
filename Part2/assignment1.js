function max(numbers) {
    const max_num = numbers.reduce((the_bigger,current_value)=>{
        if(the_bigger>current_value){
            return the_bigger;
        }else{
            return current_value;
        }
    },0)   
    return max_num
}

console.log('asg1 :',max([1,2,4,5]));
console.log('asg1 :',max([5,2,7,1,6]));