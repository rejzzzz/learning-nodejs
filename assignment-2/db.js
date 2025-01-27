const authors = [
    {id: 1, name: "rej"},
    {id: 2, name: "anchal"},
    {id: 3, name: "jayanth"},
];

async function getAuthorById(authorId){
    return authors.find(author => author.id === authorId);
};

module.exports = { getAuthorById};

