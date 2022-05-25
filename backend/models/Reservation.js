const mongoose = require('mongoose');

// autoIncrement = require('mongoose-auto-increment');
// autoIncrement.initialize(connection);
// const uniqueValidator = require('mongoose-unique-validator');
// const refValidator = require('mongoose-ref-validator');
// const randomstring = require("randomstring");


const reservations = new mongoose.Schema(
    {    
      date: {
            type: String,
            required: true},  

      destination: {
              type: String,
              required: true}, 

      bookingdate: {
              type: String,
              
              
      },

      // luggage:{
      //       type: String,
      //       // required:true,
      // },

      // name:{
      //       type:String,
      //       // required:true
      //     },
         
      // email:{
      //       type:String,
      //       // required:true,
      //       unique:true
      //     },
   
      // seat_number:{
      //         type:String,
      //         // required:true,
      //         unique:true,
      //         ref:"seats",
      //         conditions: {} // Enables ref validation
          
          // seat_quantity: {
          //   type: Number,
          //   // required:true,

          // },

          // totalPayment: {
          //   type: Number,
          //   // required:true,

          // },
      
            }
)


//Model Register



// //reservation plugins
// reservations.plugin(autoIncrement.plugin, {
//     model: 'reservations',
//     startAt: 1001,
// });
// reservations.plugin(uniqueValidator);
// mongoose.plugin(require('mongoose-ref-validator'));




// var ReservationModel = {};

// ReservationModel.model = mongoose.model("reservations");

// ReservationModel.add =  (reservation, callback)=> {
//     reservation.created_at = Date.now();
//     //
//     reservation.ticket_id = randomstring.generate(10);
//     reservationObj = new ReservationModel.model(reservation);
//     reservationObj.save((error, doc)=>{
//       callback(error, doc);
//     });
// };

// ReservationModel.getAllReservations =  (callback)=> {
//   ReservationModel.model.find({},(error, doc)=>{
//       callback(error, doc)
//     });
// };

module.exports = mongoose.model(`Reservations`,reservations);
