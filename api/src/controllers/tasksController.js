const { response } = require('express')
const tasksModel = require('../models/tasksModel')

const getAll = async (__, res) => {
  const tasks = await tasksModel.getAll()

  return res.status(200).json(tasks)
}

const createTask = async (req, res) => {
  // const createdTask= await tasksModel.createTask(req)
  return response.status(201).json({ message: 'ok' })
}

module.exports = {
  getAll,
  createTask,
}
