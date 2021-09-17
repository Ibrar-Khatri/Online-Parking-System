const express = require('express');
const route = express.Router()
const userController = require('./userController')
const multer = require("multer");
let upload = multer({ limits: { fieldSize: 52428800 } });



route.post('/signup', userController.signupWithDetails)
route.post('/signin', userController.signinWithDetails)
route.post('/get-user-details', userController.getUserDetails)
route.post('/update-user-details', upload.single("profileImage"), userController.updateUserDetails)
route.post('/update-password', userController.updateUserPassword)




module.exports = route