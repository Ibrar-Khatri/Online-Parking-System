const express = require('express');
const route = express.Router()
const userController = require('./userController')



route.post('/signup', userController.signupWithDetails)
route.post('/signin', userController.signinWithDetails)




module.exports = route