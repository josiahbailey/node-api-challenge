const express = require('express')
const validateAction = require('../middleware/validateAction')
const validateProject = require('../middleware/validateProject')
const validateProjectId = require('../middleware/validateProjectId')

const router = express.Router()

const Projects = require('../data/helpers/projectModel')
const Actions = require('../data/helpers/actionModel')
const Mappers = require('../data/helpers/mappers')

const { projectToBody, actionToBody } = Mappers

router.post('/', validateProject, (req, res) => {
  const project = req.body
  Projects.insert(project)
    .then(newProject => {
      res.status(201).json({ message: `Successfully added project`, project: newProject })
    })
    .catch(() => {
      res.send(500).json({ message: 'Unable to add new post' })
    })
})

router.post('/:id/actions', validateAction, (req, res) => {
  const action = req.body
  Actions.insert(action)
    .then(newAction => {
      res.status(201).json({ message: `Successfully added action`, action: newAction })
    })
    .catch(() => {
      res.status(500).json({ message: `Unable to add new action` })
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

router.get('/:id', validateProjectId, (req, res) => {
  const project = req.project
  res.status(200).json(project)
})

router.get('/:id/actions', validateProjectId, (req, res) => {
  const id = req.params.id
  Projects.getProjectActions(id)
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(() => {
      res.status(500).json({ message: `Unable to fetch actions of project of id ${id}` })
    })
})

router.put('/:id', validateProject, validateProjectId, (req, res) => {
  const project = req.body
  const id = req.params.id
  Projects.update(id, project)
    .then(x => {
      res.status(203).json({ message: `Succesfully updated project of id ${id}`, project: x })
    })
    .catch(() => {
      res.status(500).json({ message: `Unable to update project of id ${id}` })
    })
})

router.delete('/:id', validateProjectId, (req, res) => {
  const id = req.params.id
  Projects.remove(id)
    .then(x => {
      res.status(203).json({ message: `Successfully deleted project of id ${id}`, status: x })
    })
    .catch(() => {
      res.status(500).json({ message: `Unable to delete project of id ${id}` })
    })
})

module.exports = router