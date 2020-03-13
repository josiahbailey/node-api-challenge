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
  Projects.getProjectActions(id)
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(() => {
      res.status(500).json({ message: `Unable to fetch actions of project of id ${id}` })
    })
})

router.put('/:id', (req, res) => {
  const project = req.body
  const id = req.params.id
  Projects.update(id, project)
    .then(x => {
      res.status(203).json({ message: `Succesfully updated project of id ${id}`, status: x })
    })
    .catch(() => {
      res.status(500).json({ message: `Unable to update project of id ${id}` })
    })
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
  Projects.delete(id)
    .then(x => {
      res.status(203).json({ message: `Successfully deleted project of id ${id}`, status: x })
    })
    .catch(() => {
      res.status(500).json({ message: `Unable to delete project of id ${id}` })
    })
})

module.exports = router