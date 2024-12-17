const userController = require("../controller/userController");
const authenticateToken = require("../middleware/authenticateToken");

const authRouter = require("express").Router();

//register
authRouter.post('/register', userController.registerUser)

//login
authRouter.post('/login', userController.login)

//user-info
authRouter.get('/user-info', authenticateToken, userController.getUserInfo)

module.exports = authRouter

