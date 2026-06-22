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





// app.post('/image', upload.single('image'), (req, res) => {

//     console.log(req.file)
//     console.log(req.body)

//     

// })


// private
app.use('/book', bookRouter)



app.listen(3000, () => {
    console.log('serer connected');
})


