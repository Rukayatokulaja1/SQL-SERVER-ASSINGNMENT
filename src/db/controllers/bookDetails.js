
const Book = require("../models/bookModel")

async function bookDetails(req,res) {
    try {
       const output = await Book.findOne({where:{title:req.body.title}})
       res.status(200).json(output)
    } catch (error) {
        console.log(error);
       res.status(500).json(error)
    }
}
 
module.exports = bookDetails;


