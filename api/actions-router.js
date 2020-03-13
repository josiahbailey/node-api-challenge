const express = require('express')

const router = express.Router()

const Actions = require('../data/helpers/actionModel')

router.post('/', (req, res) => {
  const action = req.body
})

router.get('/', (req, res) => {

})

router.get('/:id', (req, res) => {
  const id = req.params.id
})

router.put('/:id', (req, res) => {
  const action = req.body
  const id = req.params.id
})

router.delete('/:id', (req, res) => {
  const id = req.params.id
})

module.exports = router