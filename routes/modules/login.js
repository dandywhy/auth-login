const express = require('express')
const router = express.Router()
const userData = require('../../models/user')
const auth = require('../../public/javascripts/auth')


// 定義首頁路由
// 當執行 req.session 時，瀏覽器 cookie 內的 sessionID 會隨著 request 送去伺服器，搜尋伺服器 session store 對應 sessionID 的內容
router.get('/', (req, res) => {
  if (req.session.user_id) {
    return res.redirect('/loggedIn')
  }
  res.render('index')
})

router.post('/login', (req, res) => {
  const { email, password } = req.body

  userData.findOne({ email, password })
  .then(data => {
    if (data) {
      req.session.user_id = data.firstName
      return res.redirect('/loggedIn')
    } else {
      res.render('index', { loginError: 'Email 或 Password 輸入錯誤' })
    }
    })
  .catch(error => console.error(error))
})

router.get('/loggedIn', auth, (req, res) => {
  // console.log(req.session)
  // console.log('Cookies: ', req.cookies)
  // console.log('req.sessionID: ', req.sessionID)
  return res.render('logged', { data: req.session.user_id })
})

router.get('/logout', (req, res) => {
  // clear req.session.user_id
  req.session.destroy(() => console.log('logout'))
  return res.redirect('/')
})



module.exports = router