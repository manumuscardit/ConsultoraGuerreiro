const express = require('express');
const router = express.Router();
const {getInicio} = require('./../../models/inicio');


router.get('/', async (req,res) =>{ //funcion para mostrar index
    if(req.session.administrador) {
      try { 
        const index= await getInicio();
        console.log(index);
        res.render('admindex', {
          title:'Index',
          index  }) 
         } catch (error) {
           console.log(error)}    
         }
     else{
   res.send("Ups! No tenes permisos para ingresar aquí")
     }
   });

module.exports = router;