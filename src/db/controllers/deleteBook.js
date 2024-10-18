const { Sequelize } = require("sequelize");
const Book = require("../models/bookModel")

async function deleteBooks(req,res) {
    try {
       // const rawoutput = await Sequelize.query("select from Books where title = (:reqtitle)",{replacements:{reqtitle:req.body.title}})
        const output = await Book.destroy({where:{title:req.body.title}})
        //console.log (rawoutput)
        res.status(200).json(output)
    } catch (error) {
        console.log(error);
       
    }
}
 
module.exports = deleteBooks;


