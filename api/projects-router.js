const express = require('express')

const router = express.Router()

const Projects = require('../data/helpers/projectModel')

router.post('/', (req, res) => {
  const project = req.body
  Projects.insert(project)
    .then(id => {
      res.status(201).json({ message: `Successfully added project, id is ${id}` })
    })
    .catch(() => {
      res.send(500).json({ message: 'Unable to add new post' })
    })
})

router.get('/', (req, res) => {
  Projects.get()
    .then(projects => {
      res.status(200).json(projects)
    })
    .catch(() => {
      res.status(500).json({ message: `Unable to fetch projects` })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  Projects.get(id)
    .then(project => {
      res.status(200).json(project)
    })
    .catch(() => {
      res.status(500).json({ message: `Unable to fetch project of id ${id}` })
    })
})

router.get('/:id/actions', (req, res) => {
  const id = req.params.id
})

router.put('/:id', (req, res) => {
  const project = req.body
  const id = req.params.id
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
})



module.exports = router