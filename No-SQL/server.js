const express = require('express');
const mongoose = require('mongoose');
const PORT = 3000
const TaskRoutes = require('./routes/TaskRoutes');

const server = express();
server.use(express.json());

server.use('/api/v1/tasks');

const mongooseConnect = async () => {
    try{
      await mongoose.connect('mongodb+srv://jrojas14:2ysOqlmgIhKMNUBG@cluster0.bw6tdwu.mongodb.net/TaskApp?retryWrites=true&w=majority')
      console.log('Conexión exitosa')
    }catch(error){
      console.error(error)
    }
  }
  
  mongooseConnect()

server.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`)
})