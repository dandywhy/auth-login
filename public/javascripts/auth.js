// middleware
// check req.session.user_id
function auth(req, res, next) {
  if (req.session.user_id) {
    console.log('Authenticated')
    next()
  } else {
    console.log('Not authenticated')
    return res.redirect('/')
  }
}


module.exports = auth