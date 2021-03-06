// 引用 Express 與 Express 路由器
const express = require('express')
const router = express.Router()

// 引入模組程式碼
const login = require('./modules/login.js')

// 引入路由模組
// 將網址結構符合 / 字串的 request 導向 login 模組
router.use('/', login)


// 匯出路由器
module.exports = router