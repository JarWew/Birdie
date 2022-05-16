const express = require("express");
const mongoose = require("mongoose");
const Flights = require("../models/Flights");
const Reservation = require("../models/Reservation")
// const popupS = require('popups');
const alert = require('alert')

const router = express.Router();
const { ensureAuthenticated } = require("../config/auth");

const isAvailable = "Your flight is available."
const notAvailable = "We are sorry, but we cannot offer you flight in this time. Try again to find another one, please."



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
      console.log('brak takiego lotu');          
     
      alert(notAvailable)

     } else {
        console.log(data)

           
        res.render('checkflights', {isAvailable, data, }) ;   
        
      }
        });  
      });    
    

router.get("/dashboard", ensureAuthenticated, (req, res) => {
    res.render("dashboard", { user: req.user});
});

module.exports = router;
