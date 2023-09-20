var express = require("express");
var router = express.Router();
const stateDataController = require("../controller/stateData.controller");
const { upload_stateDataCara  } = require("../middleware/upload");
router.get("/", (req, res, next) => {
     res.send("respond with a stateDatas resource");
});
router.post("/add", upload_stateDataCara, stateDataController.add);
router.get("/getByState/:state", stateDataController.getByState);
router.get("/getall", stateDataController.getAll);
// router.put("/update/:id", upload_stateDataCara,stateDataController.update);


router.put("/updateStateData", upload_stateDataCara, stateDataController.updateStateData);
 
 router.delete("/deletestateData/:state", stateDataController.deletestateData);

 
module.exports = router;    