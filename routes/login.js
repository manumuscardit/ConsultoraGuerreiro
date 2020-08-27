var express = require('express');
const { logueado } = require('../models/loginModel');
var router = express.Router();

router.get('/', async (req,res)=>{
    try {
        res.render("login");
    } catch (error) {
        console.log(error);
    }
})
router.post("/", async (req,res) =>{ //Configuracion de login
var usuario= req.body.usuario;
var pass= req.body.pass;
const resultado= await logueado(usuario, pass);
if(resultado.length == 1){ 
    console.log('Logueado correctamente');
    if(resultado[0].id == 1){ // Solo el 1er ID es administrador
        req.session.administrador = true;
        console.log('Bienvenido admin!');
        res.redirect('/admin/servicios');
    }
    else{
        req.session.administrador = false;
        console.log('Ups! No sos administrador'); //No habrá cuentas de usuario, es simplemente para probar opciones.
        res.redirect('/');
    }}
else{
    console.log('Usuario o contraseña incorrecta');
    res.render('login',{message: 'Usuario o contraseña incorrecta'});
    
}
});
module.exports = router;