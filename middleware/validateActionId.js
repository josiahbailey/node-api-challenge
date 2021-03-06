const Actions = require('../data/helpers/actionModel')
module.exports = function validateActionId(req, res, next) {
  const id = req.params.id
  Actions.get(id)
    .then(action => {
      if (action === null) {
        res.status(400).json({ message: `Invalid action id ${id}` })
      }
      req.action = action
      next()
    })
    .catch(() => {
      res.status(400).json({ message: `Invalid action id ${id}` })
    })
}