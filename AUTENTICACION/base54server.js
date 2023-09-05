const express = require('express');
const basicAuth = require('basic-auth')
const PORT = 3000;

const server = express();

const usuario = {
    username: 'laura@domain.com',
    password: 'contrasena123'
}
const autenticacion = (req, res, next) =>{
    const credenciales = basicAuth(req);
    if (credenciales && credenciales.name === usuario.username && credenciales.pass === usuario.password) {
        next();   
    } else {
        res.statusCode = 401 
        res.setHeader('WWW-Authenticate', 'Basic realm="example"')
        res.end('Acceso denegado: usuario o contraseña invalida')
    }
};


server.use('/recurso-protegido',autenticacion,(req, res)=>{
    res.send('Hola soy un recurso protegido')
});

server.use('/recurso-publico',(req, res)=>{
    res.send('Hola soy un recurso publico')
}); 

server.listen(PORT,()=>{
    console.log(`Aplicación de ejemplo en el puerto: ${PORT}`);
});