const User = require('../user')
const userData = require('../../users.json').users

const db = require('../../config/mongoose')



db.once('open', () => {
  userData.forEach(data => User.create(data))
  console.log('Done! data created!')
})