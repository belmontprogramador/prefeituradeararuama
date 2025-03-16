const express = require("express");
const helloWorld = require("../Controller/helloWord");

 

const router = express.Router(); 
 

 router.get("/", helloWorld);

 

module.exports = router;

