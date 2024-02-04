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
  const { body } = req; // sama dengan req.body

  try {
    modelUsers.createUser(body)

    res.json({
      message: 'CREATE Users Success',
      data: body
    })
  } catch (error) {
    res.json({
      message: 'Data Error',
      serverMessage: error
    })
  }
}

const updateUsers = async (req, res) => {
  const { id } = req.params;
  const { body } = req;

  try {
    await modelUsers.updateUser(body, id)

    res.json({
      message: 'UPATE Users success',
      data: {
        id: id,
        ...body
      }

    })
  } catch (error) {
    res.json({
      message: 'Data Error',
      serverMessage: error
    })
  }
}

const deleteUsers = (req, res) => {
  const { id } = req.params;

  try {
    modelUsers.deleteUser(id);

    res.json({
      message: 'DELETE Users success',
      data: null
    })
  } catch (error) {
    res.json({
      message: 'Data Error',
      serverMessage: error
    })
  }
}

module.exports = {
  getAllUsers,
  createUsers,
  updateUsers,
  deleteUsers
}