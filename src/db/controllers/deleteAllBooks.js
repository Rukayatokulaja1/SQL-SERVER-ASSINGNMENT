const { where } = require("sequelize");
const Book = require("../models/bookModel")

async function deleteAllBooks (req,res) {
   try {
    const output = await Book. destroy ({
        where: {},
        truncate: true,
    });
    res.status(200).json(output)
   } catch (error) {
    console.error('error');
   }
}
   
 
module.exports = deleteAllBooks;


