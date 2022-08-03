function ajax (url) {
  return fetch(url).then((response) => {
    return response.json()
  })
}

function render (data) {
  let htmlText = ''
  const productList = document.querySelector('.product_list > tbody')
  data.forEach((item) => {
    htmlText += `
    <tr>
        <td>${item.name}</td>
        <td>${item.price}</td>
        <td>${item.description}</td>
    </tr>
  `
  })
  productList.innerHTML = htmlText
}

ajax('https://appworks-school.github.io/Remote-Assignment-Data/products').then(
  (data) => render(data)
)

/**
 *
 */
