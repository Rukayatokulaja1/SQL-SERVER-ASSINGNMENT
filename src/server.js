require("dotenv").config();
const Book = require("./db/models/bookmodel");
const bookRouter = require("./db/routes/bookRouter")
const express = require("express");
const app = express();


function syncTables() {
    Book.sync({
   alter: true     
    })
}
app.use(express.json());
app.use(bookRouter);

 
app.get("/health", (req,res) => {
    res.status(200).send("API is healthy")
});
 syncTables()
app.listen(5001, () => {console.log("Server is listening on port 5001")})
 