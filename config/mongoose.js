const mongoose = require('mongoose')
const MONGODB_URI = 'mongodb://localhost/login-system'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => console.log('MongoDB connect error!'))

db.once('open', () => console.log('MongoDB connected!'))

module.exports = db