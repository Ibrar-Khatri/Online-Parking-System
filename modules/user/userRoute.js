const express = require('express');
const route = express.Router()
const userController = require('./userController')



route.post('/signup', userController.signupWithDetails)




module.exports = route