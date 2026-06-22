const Book = require("../models/bookModel");

const jwt = require('jsonwebtoken');

let createBook = async (req, res) => {
    console.log(req.body);
    console.log(req.file);

    let { title, author, description, price } = req.body
    let { filename } = req.file

    

    try {
        await Book.create({
            title, author, description, price, filename
        })

        res.status(200).json({
            success: true,
            message: 'book created successfully'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }


}
let getAllBooks = async (req, res) => {


    try {
        let data = await Book.find()
        res.status(200).json({
            success: true,
            message: 'read all data',
            data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }




}
let getBookDetails = async (req, res) => {
    let { id } = req.params

    try {
        let data = await Book.findOne({ _id: id })
        res.status(200).json({
            success: true,
            message: 'data read successfully',
            data
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }


}

let updateBook = async (req, res) => {
    let { id } = req.params
    let { title, author, description, price } = req.body

    try {
        let data = await Book.updateOne({ _id: id }, {
            title, author, description, price
        })
        res.status(200).json({
            success: true,
            message: 'book updated successfully'
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }


}



let deleteBook = async (req, res) => {

    let { id } = req.params

    try {
        let data = await Book.deleteOne({ _id: id })
        res.status(200).json({
            success: true,
            message: 'book deleted successfully',

        })
    } catch (error) {
        res.status(500).json({
            success: false,
            error
        })
    }

}

module.exports = { createBook, getAllBooks, getBookDetails, deleteBook, updateBook }