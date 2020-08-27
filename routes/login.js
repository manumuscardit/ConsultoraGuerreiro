var express = require('express');
var router = express.Router();

router.get('/', async (req,res)=>{
    try {
        res.render("login");
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;