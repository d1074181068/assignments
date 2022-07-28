function calculate(data) {
  let totalPrice = 0;
  const afterDiscount = data.products.map((item) => {
    return item.price * (1 - data.discount);
  });
  afterDiscount.forEach((item) => {
    totalPrice += item;
  });
  return totalPrice;
}

const discountedPrice = calculate({
  discount: 0.1,
  products: [
    {
      name: "Product1",
      price: 100, //90
    },
    {
      name: "Product2",
      price: 700, //630
    },
    {
      name: "Product3",
      price: 250, //225
    },
  ],
});

console.log("asg3 :", `$${discountedPrice}`);
