const express = require('express');
const router = express.router();
const TaskController = require('../controllers/TaskController');

router.get('/', TaskController.getAllTasks);

router.post('/', TaskController.insertTask);

router.patch('/:id',TaskController.updateTask);

router.delete('/:id',TaskController.removeTask);

router.get('/:id', TaskController.getOneTask);

module.exports = router;