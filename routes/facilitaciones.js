const express = require('express');
const router = express.Router(); 
const {getFacilitaciones} = require
('./../models/servicios');

router.get('/', async (req, res) => {
    const facilitaciones= await getFacilitaciones ();
    console.log(facilitaciones);
    res.render('facilitaciones', { title: 'Facilitaciones',
facilitaciones : facilitaciones })});
 
module.exports = router;