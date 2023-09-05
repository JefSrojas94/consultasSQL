const clientModel =require("../models/Client");

const  getClients = (req,res) => {
    clientModel.getAllClients()
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  getClient = (req,res) =>{
    const {id} = req.params
    clientModel
    .getClient(id)
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

const  insertClient = (req,res) => {
    const {first_name, last_name, active} = req.body
    clientModel
    .insertClient({first_name, last_name, active})
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};
const  updateClient = (req,res) => {
    const {id} = req.params
    const {first_name, last_name} = req.body
    clientModel
    .updateClient(id,{first_name, last_name})
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};
const  deleteClient = (req,res) => {
    const {id} = req.params
    
    clientModel
    .deleteClient(id)
    .then(results => res.status(201).json(results))
    .catch(error => res.status(500).json(error));
};

module.exports ={
    getClient,
    getClients,
    updateClient,
    insertClient,
    deleteClient
};