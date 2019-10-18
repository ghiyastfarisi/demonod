// const express = require('express')
const m = require('./middleware')

module.exports = express => {
  const router = new express.Router()
  const user = require('./router/user')(express)
  
  router.get('/', (req, res) => {
    res.send('Ok')
  })
  
  router.use(m())
  
  router.use('/user', user)
  
  router.use(m())

  return router
}