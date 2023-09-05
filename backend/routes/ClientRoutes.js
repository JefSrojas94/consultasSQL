const express = require('express');
const router = express.Router();
//const ClientController = require('./../controllers/ClientController');
const {ClientController} = require('./../controllers');

router.get('/',ClientController.getClients);

router.get('/',ClientController.getClient);

router.post('/',ClientController.insertClient);

router.put('/',ClientController.updateClient);

router.delete('/',ClientController.deleteClient);



module.exports = router;