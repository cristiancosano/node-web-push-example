require('dotenv').config()
const express = require('express')
const webpush = require('web-push')
const app = express()
const path = require('path')
const registerRoutes = require('./routes')

const port = process.env.PORT || 3000

// Middlewares

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
registerRoutes(app)

// View engine

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
  
// VAPID keys should be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();

webpush.setVapidDetails(
  'mailto:'+process.env.MAIL,
  process.env.PUBLIC_KEY,
  process.env.PRIVATE_KEY
);

app.listen(port, () => {
    console.log('Server listening at http://localhost:'+ port)
})

module.exports = app