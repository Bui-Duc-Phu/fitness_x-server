const userController = require("../controller/userController");
const authenticateToken = require("../middleware/authenticateToken");

const route = require("express").Router();

//register
route.post('/register', userController.registerUser)

//login
route.post('/login', userController.login)

//user-info
route.get('/user-info', authenticateToken, userController.getUserInfo)

module.exports = route

