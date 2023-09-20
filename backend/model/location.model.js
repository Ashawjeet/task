const mongoose = require('mongoose')
const locationSchema = new mongoose.Schema({
     
     state: {
       type: String,
       default: "",
     },
     date: {
       type: Date,
     },
     locationImg: {
        type: [String],
        
        default: [],
     },
     locationType: {
        type: String,
        default: "popular place",

        enum: ["popular place" , "hill station" , "religious place" , "museum" , "Adventure Place"],
     },
     locationTitle:{
      type: String ,
      default:''
   },
     locationDescription:{
        type: String , 
        default:''
     }
   
   });
   


var locationModel = mongoose.model('location', locationSchema);
module.exports = locationModel;