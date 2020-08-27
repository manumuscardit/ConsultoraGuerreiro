var express = require('express');
var router = express.Router();
const inicial = require('./../models/inicio'); // Importo funcion de models
const {servIndex} = require('./../models/servicios');
const {getServicio} = require('./../models/servicios');
const {main} = require('./../utils/mail'); //funcion de mail


router.get('/', async (req, res) => { //Router de INDEX
  const inicio= await inicial.getInicio();
  console.log(inicio);
  const serv= await servIndex();
  console.log(serv);
  res.render('index', { 
  title: 'Guerreiro',
  inicio, 
  serv});
});

router.get('/:nombre', async(req,res)=>{ //Router de SERVICIOS
  const nombre = req.params.nombre;
  const servicios = await getServicio(nombre);
  console.log(servicios);
res.render('servicio', servicios);

})

router.post("/", async (req,res) => { //Router de NODEMAILER

const { nombre, mail, phone, serv, texto} = req.body;//info

const to = process.env.ADMIN_MAIL;
const subject = "Nuevo mensaje desde el sitio web";
const html = `${nombre}, de correo ${mail} y teléfono ${phone}, te contactó interesado por el servicio de ${serv} con la siguiente consulta : ${texto}.`;


const prueba = {to, subject, html};
console.log(prueba);
const resultMail= await main ({to, subject, html});
console.log(resultMail);
res.render('index', {message: 'Mensaje enviado'})
});
// Exporto 
module.exports = router;
