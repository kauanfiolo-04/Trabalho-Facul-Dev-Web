const connection = require('./connection')

const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM projects')
  return tasks
}

const createTask = async (task) => {
  const { cnpj, orcamento, name, projectId } = task

  const query='INSERT INTO projects(cnpj, orcamento, name, projectId, status, conclusionDate) VALUES (?, ?, ?, ?, ?, ?)'

  const createdTask=await connection.execute(query,[cnpj, orcamento, name, projectId, 'pendente',conclusionDate])
}

module.exports = {
  getAll,
  createTask,
}
