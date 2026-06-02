

let express = require('express')
let userRouter = express.Router()


userRouter.get('/', (req, res) => {
    console.log('hello');

    res.json()

})

userRouter.post('/', (req, res) => {
    console.log('hello');

    res.json()

})
userRouter.put('/', (req, res) => {
    console.log('hello');

    res.json()

})
userRouter.delete('/', (req, res) => {
    console.log('hello');

    res.json()

})

module.exports = userRouter