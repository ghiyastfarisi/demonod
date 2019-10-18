module.exports = express => 
  new express.Router()
    .get('/', (req, res, next) => {
      res.json({
        path: '/user'
      })
    })