const { default: mongoose } = require('mongoose');
const stateDataModel = require('../model/stateDataModel');
const { findOne, findOneAndDelete, findOneAndUpdate } = require('../model/location.model');


// new add state api :-
exports.add = async (req, res) => {

     const { state  , firstPara , secondPara } = req.body;
console.log("body:", req.body);
console.log("files:", req.files);

if (!req.files || req.files.length === 0) {
  return res.json({
    status: false,
     
    message: `Please select image(s)`,  
  });   
}

console.log("18", req.files , "19" , req.body)

    const displayPhotosCara = req.files['caraImgstateData']?.map(file => file.filename);  
    // const displayPhotosLocation = req.files['locationImg']?.map(file => file.filename);  

    
    console.log("displayPhotosCara:", displayPhotosCara);
// console.log("displayPhotosLocations:", displayPhotosLocation[0]);
const datas = await stateDataModel.find({ state: state });
if (datas[0] ) {
    
     

  try {
    const { state, firstPara, secondPara } = req.body;
    
    const fileFields = Object.keys(req.files);
    const numberOfFiles = fileFields.length;
    console.log("Number of files uploaded:", numberOfFiles);
    if(firstPara.trim().length <= 0 && secondPara.trim().length <= 0 && fileFields.length <=0 ) return res.status(400).send({message:'you sended nothing to add'})

    const updatedData = {};

    if (firstPara && firstPara.trim().length>0) updatedData.firstPara = firstPara;
    if (secondPara && secondPara.trim().length>0) updatedData.secondPara = secondPara;

    if (fileFields.length>0) {
      const displayPhotosCara = req.files['caraImgstateData'].map((file) => file.filename);
      updatedData.caraImgstateData = displayPhotosCara;
    }

    const updated = await stateDataModel.findOneAndUpdate({ state: state }, updatedData, { new: true });

    if (!updated) {
      return res.status(404).json({ status:false, msg: 'Data not found' });
    }

    return res.status(200).json({status:true, msg: 'state added ', data: updated });
  } catch (error) {
    return res.status(500).json({ status:false ,msg: 'Error updating data', error: error.message });
  }

   }
   

const newstateData = new stateDataModel({    

 
     state ,
     caraImgstateData: displayPhotosCara , 
     
      firstPara ,
       secondPara
      //  exactLocation:[{
      //  locationType ,
      //   locationImg :  displayPhotosLocation[0],
      //    locationDescription,
      //    locationTitle
      //  }]
});

newstateData.save()
  .then(() => {
    return res.json({
      status: true,
      message: `stateData saved successfully`,
    });
  })
  .catch((error) => {
    console.error(error);
    return res.status(500).json({
      status: false,
      message: `Error saving stateData`,
    });
  });

};

// new get data by stae api
exports.getByState = async (req, res) => {
     const  {state}  = req.params;
     console.log(state)
     await stateDataModel.find({ state: state })
          .then((success) => {
               return res.json({
                    status: true,
                    message: "all locations",
                    data: success
               })
          })
          .catch((error) => {
               return res.json({
                    status: true,
                    message: "something went wrong",
                    data: error
               })
          })
}

// new getall data api
exports.getAll = async (req, res) => {
     await stateDataModel.find()
          .then((success) => {
               return res.json({
                    status: true,
                    message: "all locations",
                    data: success
               })
          })
          .catch((error) => {
               return res.json({
                    status: true,
                    message: "something went wrong",
                    data: error
               })
          })
}


// new state data update Api
exports.updateStateData = async (req, res) => {
  try {
    const { state, firstPara, secondPara } = req.body;
    

    const fileFields = Object.keys(req.files);
    const numberOfFiles = fileFields.length;
    console.log("Number of files uploaded:", numberOfFiles);
    if(firstPara.trim().length <= 0 && secondPara.trim().length <= 0 && fileFields.length <=0 ) return res.status(400).send({message:'you sended nothing to update'})

    const updatedData = {};

    if (firstPara && firstPara.trim().length>0) updatedData.firstPara = firstPara;
    if (secondPara && secondPara.trim().length>0) updatedData.secondPara = secondPara;

    if (fileFields.length>0) {
      const displayPhotosCara = req.files['caraImgstateData'].map((file) => file.filename);
      updatedData.caraImgstateData = displayPhotosCara;
    }

    const updated = await stateDataModel.findOneAndUpdate({ state: state }, updatedData, { new: true });

    if (!updated) {
      return res.status(404).json({ msg: 'Data not found' });
    }

    return res.status(200).json({ msg: 'Updated', data: updated });
  } catch (error) {
    return res.status(500).json({ msg: 'Error updating data', error: error.message });
  }
};

   

  
         
      
        
          


// new delete state data api
exports.deletestateData = async (req, res) => {
     try {
          const { state } = req.params; 
          const datas = await stateDataModel.find({ state: state });
          
          if(datas.length >= 0 ){
            const deleteData = {}; 

            deleteData.firstPara = "";
            deleteData.secondPara = "";
            deleteData.caraImgstateData = [] ;


            const clear = await stateDataModel.findOneAndUpdate({state:state} , deleteData , {new:true} )
            return res.status(200).send({message:'this state data is clear now'})
          }
          return res.status(400).json({ msg: 'not found' });
        } catch (error) {
          console.error(error);
          return res.status(500).json({ msg: 'Internal server error' });
        }
        
}
