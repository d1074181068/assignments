function calculate(data){
    let total_price = 0
    const after_discount = data.products.map(item=>{
        return item.price*(1-data.discount);
    })
    after_discount.forEach(item => {
        total_price+=item;
    });
    return total_price
}

const discountedPrice = calculate({
    discount:0.1,
    products:[
        {
            name:'Product1',
            price:100 //90
        },{
            name:'Product2',
            price:700 //630
        },{
            name:'Product3',
            price:250 //225
        }
    ]
})

console.log('asg3 :',`$${discountedPrice}`);