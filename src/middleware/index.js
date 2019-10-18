const { log } = console 

module.exports = options => {
    return (req, res, next) => {
        log(`:: ${new Date()} - ${req.method} - ${req.path} - ${JSON.stringify(req.query)}`)
        next()
    }
}
  