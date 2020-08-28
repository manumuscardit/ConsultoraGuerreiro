const express = require('express');
const router = express.Router();
const {getInicio, update} = require('./../../models/inicio');


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

router.post('/', async (req,res) =>{
if(req.session.administrador) {
    try {
      const { titulo, slogan, textabout} = req.body; //recolecto datos de form
      const obj= {
        titulo: titulo,
        slogan: slogan,
        textabout: textabout
      };
      console.log(obj);
      const result1 = await update(obj);
      res.json({success: true}); //AJAX
    } catch (error) {
      console.log(error);
      res.json({success: false});
    }}
  })

module.exports = router;