module.exports = express => 
  new express.Router()
    .get('/', (req, res, next) => {
      res.json({
        path: '/deeplink'
      })
    })
    .get('/route/:target', (req, res, next) => {
      const type = req.query.type
      const target = req.params.target
      res.redirect(`${type}://${target}`)
    })