require('dotenv').config()

const server = require('./server.js')

const PORT = process.env.PORT

server.listen(PORT, () => {
  console.log(`\n** Server Listening on port ${PORT} **\n`)
})
