const pkgjson = require('./package.json')
const express = require('express') 
const router = require('./src')(express)
const app = express()
const { log } = console

log(`Running on port ${pkgjson.port}`)

app.use(router)
app.listen(pkgjson.port)