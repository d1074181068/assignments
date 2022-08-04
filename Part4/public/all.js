const input = document.querySelector('.input')
const sendBtn = document.querySelector('.send')
const output = document.querySelector('.outputValue')

const getTotal = () => {
  fetch(`http://localhost:3000/getData?number=${input.value}`)
    .then((res) => {
      return res.json()
    })
    .then((res) => {
      console.log(res)
      if ('error' in res) {
        output.textContent = res.error
        input.value = ''
      } else {
        output.textContent = `1-${res.number}的結果為 :${res.total}`
        input.value = ''
      }
    })
}

sendBtn.addEventListener('click', () => getTotal())
