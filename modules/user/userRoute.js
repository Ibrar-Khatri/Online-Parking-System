const express = require('express');
const route = express.Router()
const userController = require('./userController')



route.post('/signup', userController.signupWithDetails)
route.post('/signin', userController.signinWithDetails)
route.post('/get-user-details', userController.getUserDetails)
route.post('/update-user-details', userController.updateUserDetals)




module.exports = route