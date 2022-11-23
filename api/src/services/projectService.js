const db=require('../db')

const getAll= () => {
  return new Promise( (accepted, rejected)=>{
    db.query('SELECT * FROM projects',(error, results)=>{
      if(error){
        rejected(error)
        return
      }
        accepted(results)
    })
  })
}

const getProject=(id)=>{
  return new Promise((accepted, rejected)=>{
    db.query('SELECT * FROM projects WHERE id = ?',[id], (error,results)=>{
      if(error){
        rejected(error)
        return
      }
      if(results.length>0){
        accepted(results[0])
      }else{
        accepted(false)
      }
    })
  })
}

const createProject=(projectType, cnpj, price, conclusionDate)=>{
  return new Promise((accepted, rejected)=>{
    db.query('INSERT INTO projects (projectType, cnpj, price, status, conclusionDate) VALUES (?,?,?,?,?)',
    [projectType, cnpj, price, 'pendente', conclusionDate], (error,results)=>{
      if(error){
        rejected(error)
        return }
      accepted(results.insertId)
    })
  })
}

const updateProject=(id, projectType, cnpj, price, status, conclusionDate)=>{
  return new Promise((accepted, rejected)=>{
    db.query('UPDATE projects SET projectType=?, cnpj=?, price=?, status=?, conclusionDate=? WHERE id=?',
    [projectType, cnpj, price, status, conclusionDate, id], (error,results)=>{
      if(error){
        rejected(error)
        return }
      accepted(results)
    })
  })
}

const deleteProject= (id) => {
  return new Promise( (accepted, rejected)=>{
    db.query('DELETE FROM projects WHERE id=?',[id],(error, results)=>{
      if(error){
        rejected(error)
        return
      }
        accepted(results)
    })
  })
}

module.exports={
  getAll,
  getProject,
  createProject,
  updateProject,
  deleteProject
}