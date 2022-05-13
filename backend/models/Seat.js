const mongoose = require("mongoose");
// autoIncrement.initialize(connection);

//ORM Mapping
const Schema = mongoose.Schema;

const seats = new Schema(
  {
    _id:{
      type:String,
      required:true
    },
    available:{
      type:Boolean
    }
  });



//Model Register
mongoose.model("seats",seats);

const SeatsModel = {};

SeatsModel.model = mongoose.model("seats");

SeatsModel.reserveSeat =  (seat_number, callback)=> {
  SeatsModel.model.findOneAndUpdate({_id:seat_number},{available:false},(error, doc)=>{
      callback(error, doc);
    });
};

SeatsModel.getAllSeats =  (callback)=> {
  SeatsModel.model.find({},(error, doc)=>{
      callback(error, doc)
    });
};

SeatsModel.getReservedSeats =  (callback)=> {
  SeatsModel.model.find({available:false},(error, doc)=>{
      callback(error, doc)
    });
};
module.exports = SeatsModel