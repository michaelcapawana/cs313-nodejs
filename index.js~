const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/teach09', (req, res) => res.sendFile(path.join(__dirname, '/practice/public/form.html')))
  .get('/', (req, res) => res.render('pages/index'))
  .get('/helloWorld', (req, res) => res.sendFile(path.join(__dirname, '/public/helloWorld.html')))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
