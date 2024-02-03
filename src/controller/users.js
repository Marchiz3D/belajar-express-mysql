const modelUsers = require('../models/users')

const getAllUsers = async (req, res) => {
  try {
    const [data, fields] = await modelUsers.getAllUsers();
    res.json({
      message: 'GET Users method success',
      data,
    })
  } catch (error) {
    res.json({
      message: 'Data Error',
      serverMessage: error
    })
  }
}

const createUsers = (req, res) => {
  res.json({
    message: 'CREATE Users Success',
    data: req.body
  })
}

const updateUsers = (req, res) => {
  const { id } = req.params
  console.log(id);
  res.json({
    message: 'UPATE Users success',
    data: req.body
  })
}

const deleteUsers = (req, res) => {
  const { id } = req.params;
  res.json({
    message: 'DELETE Users success',
    data: {
      id,
      name: 'Agung',
      email: 'agung@gmail.com',
      address: 'Jakarta'
    }
  })
}

module.exports = {
  getAllUsers,
  createUsers,
  updateUsers,
  deleteUsers
}