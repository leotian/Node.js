const express = require('express')
const app = express()

app.use(async function middleware1(req, res, next) {
  console.log('middleware1 开始')
  await next()
  res.set({
    'Content-Type': 'text/plain',
    'Content-Length': '321',
    'ETag': '54321'
  });
  res.send('aaa')
  console.log('middleware1 结束')
})

app.use(async function middleware2(req, res, next) {
  const p = new Promise((resolve, reject) => {
    resolve('middleware2 开始')
  })
  p.then(res => {
    console.log(res)
  })
  await next()
  console.log('middleware2 结束')
})

app.use(async function middleware3(req, res, next) {
  console.log('middleware3 开始')
  await next()
  res.set({
    'Content-Type': 'text/plain',
    'Content-Length': '123',
    'ETag': '12345'
  });
  console.log('middleware3 结束')
})

// app.get('/', function (req, res, next) {
//   res.end('hello express')
// })

app.listen(3000, function () {
  console.log('express server listening on port 3000!')
})
