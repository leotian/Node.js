const Koa = require('koa')
const route = require('koa-route')
const app = new Koa()

app.use(async function middleware1(ctx, next) {
  console.log('middleware1 开始')
  await next()
  console.log('middleware1 结束')
})

app.use(async function middleware2(ctx, next) {
  const p = new Promise((resolve, reject) => {
    resolve('middleware2 开始')
  })
  p.then(res => {
    console.log(res)
  })
  await next()
  console.log('middleware2 结束')
})

app.use(async function middleware3(ctx, next) {
  console.log('middleware3 开始')
  await next()
  console.log('middleware3 结束')
})

app.use(route.get('/', (ctx, next) => {
  ctx.body = 'hello koa'
}))

app.on('error', function (err, ctx) {
  console.log(err.message)
  console.log(err)
})

app.listen(3001, function () {
  console.log('koa server is listening on port 3001')
})
