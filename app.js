// 引用 Express 與 Express 路由器
const express = require('express')
const session = require('express-session')
const { engine } = require('express-handlebars')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
const app = express()
const PORT = 3000

require('./config/mongoose')

app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(session({
  secret: 'secret',
  name: 'userID',
  saveUninitialized: false,
  resave: true, 
  cookie: {
    maxAge: 600000 // cookie 存在的剩餘毫秒數
  }
}))

app.use(routes)

app.listen(PORT, () => console.log(`App is on http://localhost:${PORT}`))