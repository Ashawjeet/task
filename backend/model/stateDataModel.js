const mongoose = require('mongoose')
const stateDataSchema = new mongoose.Schema({
     
     state: {
       type: String,
       default: "",
     },
     date: {
       type: Date,
     },
     caraImgstateData: {
       type: [String]
       
     },
     firstPara: {
        type: String,

        default: "",
     },
   secondPara: {
        type: String,
        default: "",

     },
   //   exactLocation:[{
   //   locationImg: {
   //      type: [String],
        
   //      default: [],
   //   },
   //   locationType: {
   //      type: String,
   //      default: "popular place",

   //      enum: ["popular place" , "hill station" , "religious place" , "museum" , "Adventure Place"],
   //   },
   //   locationTitle:{
   //    type: String ,
   //    default:''
   // },
   //   locationDescription:{
   //      type: String , 
   //      default:''
   //   }
   //   }] 
   });
   


var stateDataModel = mongoose.model('statedata', stateDataSchema);
module.exports = stateDataModel;