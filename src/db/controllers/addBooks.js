const Book = require("../models/bookModel")

async function addBook(req,res) {
    try {
      const output = await Book.create(
        {
            title:req.body.title,
            author: req.body.author,
            genre :req.body.genre
        }
       )
       console.log(output);
        res.status(200).json({msg:`Book ${req.body.title} has been added`})
    } catch (error) {
        console.log(error);
        res.status(500).json(error)
    
       
    }
}
 
module.exports = addBook;


