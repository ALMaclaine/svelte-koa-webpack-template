const koa = require('koa')
const koaRouter = require('@koa/router')

const app = new koa()
const router = new koaRouter()

router.get('/', (ctx) => {
  ctx.body = {
    data: 'success'
  };
})

app.use(router.routes())
  .use(router.allowedMethods())

app.listen(3000, () => console.log('running on port 3000'))
