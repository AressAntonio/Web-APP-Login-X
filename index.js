const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

//ruta para acceder a login desde node-server
router.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname + '/templetes/index.html'))
});

//creando register desde node-server
router.post("/", (req, res)=>{
    res.send("El usuario: " + req.body.first_name + " ha sido registrad@");
});

//ruta para acceder a contacto.html desde node-server
router.get("/contacto", (req, res)=>{
    res.sendFile(path.join(__dirname + '/templetes/contacto.html'))
});

//ruta para acceder a perfil.html desde node-server
router.get("/perfil", (req, res)=>{
    res.sendFile(path.join(__dirname + '/templetes/perfil.html'))
});

//activando puerto para servidor
app.use("/", router);
app.listen(process.env.port||8080);

console.log('Activo en el puerto 8080');