
let express = require('express');
let bookRouter = express.Router()


const { createBook, getAllBooks, getBookDetails, updateBook, deleteBook }
 = require('../controllers/bookControllers');
const upload = require('../config/imageUpload');


bookRouter.post('/', upload.single('image'), createBook)

bookRouter.get('/', getAllBooks)


bookRouter.get('/:id', getBookDetails)


bookRouter.put('/:id', updateBook)


bookRouter.delete('/:id', deleteBook)


module.exports = bookRouter