const express = require("express");
const userController = require("../controllers/userController.js");
const userRouter = express.Router();
 
userRouter.get('/', userController.getUsers);
userRouter.get('/:id', userController.getUserById);
userRouter.put('/updateUser/:id', userController.updateUser);
userRouter.delete('/deleteUser/:id', userController.deleteUser);
 
module.exports = userRouter;