const login = require('./login/login')

class ControllerInit {
  constructor(app, _) {
    this.app = app
    this._ = _
    this.init(app, _)
  }
  init(app, _) {
    app.use(_.get('/login', login.getCode))
  }
}
console.log("ssss")

module.exports = ControllerInit
