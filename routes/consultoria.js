const express = require('express');
const router = express.Router(); 
const {getConsultoria} = require
('./../models/servicios');

router.get('/', async (req, res) => {
    const consultoria= await getConsultoria ();
    console.log(consultoria);
    res.render('consultoria', { title: 'Consultoria',
consultoria : consultoria })});
 
module.exports = router;