const express = require("express");
const mongoose = require("mongoose");
const Flights = require("../models/Flights");

const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");



//login and start page
router.get("/", (req, res) =>{
 
  res.render("index" );
});

router.get("/register", (req, res) =>{
  res.render("register");
});


router.get('/form', (req,res) => {

  const sDestination = req.query.destination;
  const sDate = req.query.date;
  const sPassengers = req.query.passengers;

  
  
  console.log(sDate, sDestination);
  Flights.find({date:`${sDate}`, destination:`${sDestination}`, emptySeats:{$gt: `${sPassengers}`}} ).exec((err, data) => {
    if (data == false) {
     
      
     
     } else {
        console.log(data)

      


        res.render('checkflights', {title: "Your flight is available", data, }) ;   
        
      }
        });  
      });    
    

router.get("/dashboard", ensureAuthenticated, (req, res) => {
    res.render("dashboard", { user: req.user});
});

module.exports = router;
