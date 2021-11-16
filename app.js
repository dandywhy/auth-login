// 引用 Express 與 Express 路由器
const express = require('express')
const { engine } = require('express-handlebars')
const routes = require('./routes')
const app = express()
const PORT = 3000




app.engine('handlebars', engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')


app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(PORT, () => console.log(`App is on http://localhost:${PORT}`))