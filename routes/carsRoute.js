const express = require('express');
const router = express.Router();

const Car = require('../models/car');

router.get("/getallcars", async(req, res)=>{


    try{
        
        const cars = await Car.find({})
        res.send(cars);
    }
    catch{
        return res.status(400).json({ message : error})
    }
});

module.exports = router;