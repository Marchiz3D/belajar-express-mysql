const dbPool = require('../config/db');

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users';
  return dbPool.execute(SQLQuery)
}

module.exports = {
  getAllUsers,
}


