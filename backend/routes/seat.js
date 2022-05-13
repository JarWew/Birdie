const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const fs = require("fs");

const SeatModel = require('../models/Seat');

router.get("/dashboard",(req,res)=>{
    SeatModel.getAllSeats(
        (err,result)=>{
            if(!err){
                res.json(result);
            }else{
                res.json(err);
            }
        }
    )
});

router.get("/dashboard/reserved",(req,res)=>{
    SeatModel.getReservedSeats(
        (err,result)=>{
            if(!err){
                res.json(result);
            }else{
                res.json(err);
            }
        }
    )
});
module.exports = router;