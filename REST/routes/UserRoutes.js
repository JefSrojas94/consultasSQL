const express = require('express');
const router = express.Router();

const { UserControllers } = require('../controllers')

// users/
router.get('/', UserControllers.getUsers);

  // user/
router.get('/:id', UserControllers.getOneUser);

// users/:id
router.post('/:id', UserControllers.createUser);

router.put('/:id',UserControllers.putUser);

router.delete('/:id', );

module.exports = router;