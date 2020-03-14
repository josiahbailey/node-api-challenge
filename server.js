const express = require('express')
const helmet = require('helmet')
const cors = require('cors')

const logger = require('./middleware/logger')

const projectRouter = require('./api/projects-router')
const actionRouter = require('./api/actions-router')

const server = express()

server.use(logger)
server.use(helmet())
server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
  res.send(`
  <h2>Sprint Challenge Api</h2>
  <h3>By Josiah Bailey</h3>
  `)
})

server.use(`/api/projects`, projectRouter)
server.use(`/api/actions`, actionRouter)

module.exports = server