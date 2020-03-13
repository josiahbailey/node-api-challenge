const express = require('express')

const router = express.Router()

const Actions = require('../data/helpers/actionModel')

// router.post('/', (req, res) => {
//   const action = req.body
//   Actions.insert(action)
//     .then(id => {
//       res.status(201).json({ message: `Successfully added action, new action id ${id}` })
//     })
//     .catch(() => {
//       res.status(500).json({ message: `Unable to add new action` })
//     })
// })

router.get('/', (req, res) => {
  Actions.get()
    .then(actions => {
      res.status(200).json(actions)
    })
    .catch(() => {
      res.status(500).json({ message: `Unable to fetch actions` })
    })
})

router.get('/:id', (req, res) => {
  const id = req.params.id
  Actions.get(id)
    .then(action => {
      res.status(200).json(action)
    })
    .catch(() => {
      res.status(500).json({ message: `Unable to fetch action of id ${id}` })
    })
})

router.put('/:id', (req, res) => {
  const action = req.body
  const id = req.params.id
  Actions.update(id, action)
    .then(x => {
      res.status(203).json({ message: `Successfully updated action of id ${id}`, status: x })
    })
    .catch(() => {
      res.status(500).json({ message: `Unable to update action of id ${id}` })
    })
})

router.delete('/:id', (req, res) => {
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