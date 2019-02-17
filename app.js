const Koa = require('koa')
const cors = require('koa2-cors')
const _ = require('koa-route')
const ControllerInit = require('./controller/init')
const app = new Koa()
app.use(
  cors({
    origin: function() {
      return 'ssss'
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept']
  })
)
new ControllerInit(app, _)
app.listen(3000, () => {
  console.log('server success http://localhost:3000')
})
