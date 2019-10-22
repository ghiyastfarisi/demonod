const users = [
  {
    name: 'Ghiyast Farisi',
    gender: 'male'
  }
]

module.exports = express => 
  new express.Router()
    .get('/', (req, res, next) => {
      res.json(users)
    })
    .get('/add', (req, res, next) => {
      if (!req.query.name && !req.query.gender) {
        res.status(500).json({ error: 'require query name & gender' })
      }
      users.push({
        name: req.query.name,
        gender: req.query.gender
      })
      res.json(users)
    })