const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

server = app.listen(3333, () => console.log('Example app listening on port 3333!'))
module.exports = server;
