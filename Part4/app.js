const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const qs = require('qs')

const app = express()

app.set('query parser', function (str) {
  return qs.parse(str, { /* custom options */ })
})

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.send('<h1>Welcome to my server</h1>')
})

app.get('/getData', (req, res) => {
  if (req.query.number !== undefined) {
    if (!(isNaN(Number(req.query.number)))) {
      const numArr = Array.from({ length: req.query.number }, (val, index) => index + 1)
      let total = 0
      numArr.forEach(item => {
        total += item
      })
      res.send(JSON.stringify({ total, number: req.query.number }))
    }
    res.send(JSON.stringify({ error: 'Wrong Parameter' }))
  }
  res.send('<h1>Lack of Parameter</h1>')
})

app.listen(3000)
