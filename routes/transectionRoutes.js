const express = require("express");
const { addTransection, getAllTransection } = require("../controllers/transectionController");

//router object
const router = express.Router();

// routes
//add transection Post Method
router.post('/add-transection',addTransection)
// get transection 
router.post('/get-transection',getAllTransection)
module.exports = router;