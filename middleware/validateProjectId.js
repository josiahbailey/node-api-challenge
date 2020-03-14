const Projects = require('../data/helpers/projectModel')
module.exports = function validateProjectId(req, res, next) {
  const id = req.params.id
  Projects.get(id)
    .then(project => {
      req.project = project
      next()
    })
    .catch(() => {
      res.status(400).json({ message: `Invalid project id ${id}` })
    })
} 