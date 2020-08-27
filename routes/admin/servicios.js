const express = require('express');
const router = express.Router();
const { getServicios, create, update} = require('./../../models/servicios');

router.get('/baja/:id', async(req,res)=>{ //para dar de baja servicios
  try {
    const {id} = req.params;
    const result= await update(id,{estado : 0}); //el estado buscado es 0
    res.render("altaservicio")
  } catch (error) {
    console.log(error);
  }
})
router.get('/alta', async (req,res) =>{ //subruta para el formulario
  try {
    res.render('altaservicio',{title: "Alta de servicio"})
  } catch (error) {
    
  }
});
// Para recolectar datos de formulario, para dsps usar create()
router.post('/alta', async(req,res)=>{try {
  console.log(req.body);
  const {nombre, descripcion, texto, icono, imagen} = req.body;
  const object= {
    nombre: nombre,
    descripcion: descripcion,
    texto: texto,
    icono: icono,
    imagen: imagen
  }
  const result = await create(object);
  console.log('Servicio agregado');
  res.end();
} catch (error) {
  console.log(error)
}

});

// Funcion para tabla servicios
router.get('/', async (req,res) =>{try {
const servicios= await getServicios();
console.log(servicios);
res.render('servicios', {
    title:'Servicios',
    servicios  }) 
} catch (error) {
console.log(error)}    
});


module.exports = router;