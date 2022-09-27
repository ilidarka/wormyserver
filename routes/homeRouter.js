const express = require("express");
const homeController = require("../controllers/homeController.js");
const homeRouter = express.Router();
 
homeRouter.get("/", homeController.index);
homeRouter.get("/registration", homeController.registration);
homeRouter.get("/signin", homeController.signIn);
 
module.exports = homeRouter;