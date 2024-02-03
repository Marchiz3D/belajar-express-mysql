const express = require('express');
const UserController = require('../controller/users');

const router = express.Router();

// CREATE - POST
router.post('/', UserController.createUsers);

// READ - GET
router.get('/', UserController.getAllUsers);

// UPDATE - PATCH(Menimpa data)
router.patch('/:id', UserController.updateUsers);

// DELETE - DELETE
router.delete('/:id', UserController.deleteUsers);


module.exports = router;