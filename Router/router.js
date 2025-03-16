const express = require("express");
const helloWorld = require("../Controller/helloWord");
const webHookRecevied = require("../Controller/controllerWebHookReciveid"); 

const router = express.Router(); 
 

 router.get("/", helloWorld);
 
router.post("/reciviedararuama", webHookRecevied);
 

module.exports = router;

