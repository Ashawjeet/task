var express = require("express");
var router = express.Router();

const locationController = require("../controller/location.controller");
const { upload_locationCara  } = require("../middleware/upload");
router.get("/", (req, res, next) => {
     res.send("respond with a locations resource");
});
router.post("/add", upload_locationCara, locationController.add);
router.get("/getByState/:state", locationController.getByState);
router.get("/getall", locationController.getAll);
// router.put("/update/:id", upload_locationCara,locationController.update);


router.put("/updatelocation", upload_locationCara, locationController.updatelocation);
 
router.get("/getByLocation/:location",locationController.getByLocation);
 
router.delete("/deletelocation/:location", locationController.deletelocation);
module.exports = router;  