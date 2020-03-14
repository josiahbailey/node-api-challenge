module.exports = function validateProject(req, res, next) {
  const project = req.body
  if (!project) {
    res.send(400).json({ message: `Missing project` })
  } else if (!project.name || !project.description) {
    res.send(400).json({ message: `Missing project name or description field` })
  } else {
    if (!project.id && req.params.id) {
      project.id = req.params.id
    }
    next()
  }
}