let express = require('express');
let userRouter = express.Router()


const { signupUser, loginUser } = require('../controllers/userControllers');




userRouter.post('/signup', signupUser)


userRouter.post('/login', loginUser)



module.exports = userRouter