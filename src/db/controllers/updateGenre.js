const Book = require("../models/bookModel")

async function updateGenre(req,res) {
    try {
        const output = await Book.update({genre:req.body.genre},{
            where: { title: req.body.title}
 });
 res.status(200).json(output)
    } catch (error) {
     
        console.log(error);
     res.status(500).json(error)
    } 
 }

 
module.exports = updateGenre;


