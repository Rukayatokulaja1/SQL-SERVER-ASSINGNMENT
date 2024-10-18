const Book = require("../models/bookModel")

async function listAllBooks(req,res) {
    try {
       const output = await Book.findAll();
       res.status(200).json(output)
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
       
    }
}
 
module.exports = listAllBooks;


