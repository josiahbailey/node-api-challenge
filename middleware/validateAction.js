module.exports = function validateAction(req, res, next) {
  const action = req.body
  if (!action) {
    res.status(400).json({ message: `Missing action` })
  } else if (!action.description || !action.notes) {
    res.status(400).json({ message: `Missing description or notes field` })
  } else {
    if (!action.project_id && req.params.id) {
      action.project_id = req.params.id
    }
    next()
  }
}