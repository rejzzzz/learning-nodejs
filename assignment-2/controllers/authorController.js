const db = require("../db");

async function getAuthorById(req, res){
    const { authorId} = req.params;

    const author = await db.getAuthorById(Number(authorId));
}