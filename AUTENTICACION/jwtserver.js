const express = require('express');
const jwt = require('jsonwebtoken');
const PORT = 3000;
const SECRET_KEY ='la-puerca-esta-en-la-pocilga'

const server = express();

const validateJWT = (req,res,next)=>{
    
}


server.use(express.json());
server.use('/auth',(req, res)=>{
    const {email,password} = req.body;
    
    const token = jwt.sign({email,password},SECRET_KEY, {expiresIn: '3m'});
    res.send({token})
}); 

server.use('/songs',(req, res)=>{
   
}); 

server.listen(PORT,()=>{
    console.log(`Aplicación de ejemplo en el puerto: ${PORT}`);
});