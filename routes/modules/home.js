const express = require('express')
const router = express.Router()

// 定義首頁路由
router.get('/', (req, res) => {
  res.render('index')
})



module.exports = router