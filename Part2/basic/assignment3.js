function calculate(data) {
  const afterDiscount = data.products
    .map((item) => item.price * (1 - data.discount))
    .reduce((acc, item) => acc + item, 0);
  return afterDiscount;
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
