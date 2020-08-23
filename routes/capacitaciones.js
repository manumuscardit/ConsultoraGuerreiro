const express = require('express');
const router = express.Router(); 
const {getCapacitaciones} = require
('./../models/servicios');

router.get('/', async (req, res) => {
    const capacitaciones= await getCapacitaciones ();
    console.log(capacitaciones);
    res.render('capacitaciones', { title: 'Capacitaciones',
capacitaciones: capacitaciones})});
 
module.exports = router;