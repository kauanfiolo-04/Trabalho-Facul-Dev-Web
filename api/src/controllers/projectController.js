const projectService = require('../services/projectService')

const getAll = async (req, res) => {
  let json = { error: '', result: [] }

  let projects = await projectService.getAll()

  for (let i in projects) {
    json.result.push({
      id: projects[i].id,
      projectType: projects[i].projectType,
      cnpj: projects[i].cnpj,
      price: projects[i].price,
      status: projects[i].status,
      conclusionDate: projects[i].conclusionDate,
    })
  }
  res.json(json)
}

const getProject = async (req, res) => {
  let json = { error: '', result: {} }

  let id = req.params.id
  let project = await projectService.getProject(id)

  if (project) {
    json.result = project
  }

  res.json(json)
}

const createProject = async(req,res) =>{
  let json = { error: '', result: {} }

  let projectType=req.body.projectType
  let cnpj=req.body.cnpj
  let price=req.body.price
  let conclusionDate=req.body.conclusionDate

  if (projectType && cnpj && price && conclusionDate) {
    let id = await projectService.createProject(projectType, cnpj, price, conclusionDate)
    json.result = {
      id: id,
      projectType,
      cnpj,
      price,
      conclusionDate
    }
  }else{
    json.error= 'Campos não enviados'
  }

  res.json(json)
}

const updateProject = async(req,res) =>{
  let json = { error: '', result: {} }

  let id=req.params.id
  let projectType=req.body.projectType
  let cnpj=req.body.cnpj
  let price=req.body.price
  let status=req.body.status
  let conclusionDate=req.body.conclusionDate

  if (id && projectType && cnpj && price && status && conclusionDate) {
    await projectService.updateProject(id ,projectType, cnpj, price, status, conclusionDate)
    json.result = {
      id,
      projectType,
      cnpj,
      price,
      status,
      conclusionDate
    }
  }else{
    json.error= 'Campos não enviados'
  }
  res.json(json)
}

const deleteProject= async(req,res)=>{
  let json = { error: '', result: {} }

  await projectService.deleteProject(req.params.id)

  res.json(json)
}

module.exports = {
  getAll,
  getProject,
  createProject,
  updateProject,
  deleteProject
}
