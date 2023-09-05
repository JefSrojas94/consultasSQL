const UsersData = require ('../models/UserFakeData');
const users = UsersData.module;
module.exports ={
    getUsers : (req, res) =>{
        res.status(200).send(['Usuario Falso','Usuario Falso'])
    },
    getOneUser: (req, res) =>{
        const idUser = req.params.id;
        const user = users.find(element => element.id === idUser);
        if (user) {
            res.status(200).send(user)
        } else {
            res.status(404).send({message: 'El usuario no existe'});
        }
        
    },
    createUser: (req, res) =>{
        const newUser = req.body
        if (newUser.name.length>2) {
            users.push(newUser);
            res.status(200).send({message: "usuario creado exitosamente!"})  
        }else {
            res.status(400).send({message: 'usuario debe tener mas de 2 caracteres'})
        }
        
    },
    putUser: (req, res) =>{
        const idUser = req.params.id;
        const {name, email, password} = req.body
        users[idUser].name=name;
        users[idUser].email=email;
        users[idUser].password=password;

        res.status(200).send({message: 'Usuario modificado'})
    },
    updateUser: (req, res) =>{},
    deleteUser: (req, res) =>{},
}