let express = require('express')
let cors = require('cors')
let app = express()



require('./config/dbConfig')

const userRouter = require('./routes/userRoutes')
const bookRouter = require('./routes/bookRoutes')

app.use(express.json())
app.use(cors())

// app.use('/user', userRouter)
app.use('/book', bookRouter)



app.listen(3000, () => {
    console.log('serer connected');
})