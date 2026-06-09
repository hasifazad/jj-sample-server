let express = require('express')
let cors = require('cors')

let app = express()



require('./config/dbConfig')

const userRouter = require('./routes/userRoutes')
const bookRouter = require('./routes/bookRoutes')
const tokenValidate = require('./middlewares/tokenValidate')

app.use(express.json())
app.use(cors())




// public
app.use('/user', userRouter)


// private
app.use('/book', tokenValidate, bookRouter)



app.listen(3000, () => {
    console.log('serer connected');
})