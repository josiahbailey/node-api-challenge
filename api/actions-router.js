const express = require('express')

const validateAction = require('../middleware/validateAction')
const validateActionId = require('../middleware/validateActionId')

const router = express.Router()

const Actions = require('../data/helpers/actionModel')

router.get('/', (req, res) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(() => {
      res.status(500).json({ message: `Unable to fetch actions` })
    })
})

router.get('/:id', validateActionId, (req, res) => {
  const action = req.action
  res.status(200).json(action)
})

router.put('/:id', validateAction, validateActionId, (req, res) => {
  const action = req.body
  const id = req.params.id
  Actions.update(id, action)
    .then(newAction => {
      res.status(203).json({ message: `Successfully updated action of id ${id}`, action: newAction })
    })
    .catch(() => {
      res.status(500).json({ message: `Unable to update action of id ${id}` })
    })
})

router.delete('/:id', validateActionId, (req, res) => {
  const id = req.params.id
  Actions.remove(id)
    .then(x => {
      res.status(203).json({ message: `Successfully deleted action of id ${id}`, status: x })
    })
    .catch(() => {
      res.status(500).json({ message: `Unable to delete action of id ${id} ` })
    })
})

module.exports = router