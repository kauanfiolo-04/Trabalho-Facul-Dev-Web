const express= require('express')
const router = express.Router()

const projectController=require('./controllers/projectController')

router.get('/projects', projectController.getAll)
router.get('/projects/:id',projectController.getProject)
router.post('/project',projectController.createProject)
router.put('/project/:id',projectController.updateProject)
router.delete('/project/:id',projectController.deleteProject)

module.exports=router