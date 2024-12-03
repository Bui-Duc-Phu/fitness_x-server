const userController = require("../controller/userController");

const route = require("express").Router();

//register
route.post('/register', userController.registerUser)

//login
route.post('/login', userController.login)

module.exports = route

