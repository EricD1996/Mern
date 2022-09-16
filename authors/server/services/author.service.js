const {Author} = require('../models/author.model');

const createAuthor = async (data) => {
    console.log('service: createAuthor');
    const author = await Author.create(data);
    return author;
}

const getAllAuthor = async () => {
    console.log('service, getAuthor')
    const author = await Author.find();
    return author;
}

const getAuthorById = async (id) => {
    const author = await Author.findById(id);
    return author;
}

const deleteAuthorById = async (id) => {
    const author = await Author.findByIdAndDelete(id);
    return author;
}

const updateAuthorById = async (id, data) => {
    const author = await Author.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    })
    return author;
}

module.exports = {
    createAuthor: createAuthor,
    getAllAuthor: getAllAuthor,
    getAuthorById: getAuthorById,
    deleteAuthorById: deleteAuthorById,
    updateAuthorById: updateAuthorById,
}