let mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    description: String,
    price: Number,
    filename: String
});

module.exports = mongoose.model('books', bookSchema);


