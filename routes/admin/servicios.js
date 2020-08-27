const express = require('express');
const router = express.Router();
const {getServicio, getServicios} = require('./../../models/servicios');
router.get('/', async (req,res) =>{try {
const servicios= await getServicios();
console.log(servicios);
res.render('servix', servicios) 
} catch (error) {
console.log(error)}    
})
router.post('/', async (req,res) =>{
    
})
module.exports = router;