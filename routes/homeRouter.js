const express = require("express");
const homeController = require("../controllers/homeController.js");
const homeRouter = express.Router();
const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({extended: false,});
 
homeRouter.get("/", homeController.index);
homeRouter.get("/registration", urlencodedParser, homeController.registration);
homeRouter.post("/registration", urlencodedParser, homeController.createUser);
homeRouter.get("/signin", homeController.signIn);
homeRouter.post("/signin", homeController.authoriseUser);
 
module.exports = homeRouter;