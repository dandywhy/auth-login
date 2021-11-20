const mongoose = require('mongoose')
const Schema = mongoose.Schema

const preset = {
  type: String,
  require: true
}

const userSchema = new Schema({
  firstName: preset,
  email: preset,
  password: preset
})

module.exports = mongoose.model('UserData', userSchema)