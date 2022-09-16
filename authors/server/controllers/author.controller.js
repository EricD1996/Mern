const {
    createAuthor,
    getAllAuthor,
    getAuthorById,
    deleteAuthorById,
    updateAuthorById,
} = require('../services/author.service');

const handleCreateAuthor = async (req, res) => {
    console.log('controller: handleCreateAuthor req.body: ', req.body);
    try {
        const author = await createAuthor(req.body);
        return res.json(author);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllAuthor = async (req, res) => {
    try {
        const author = await getAllAuthor();
        return res.json(author);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAuthorById = async (req, res) => {
    try {
        const author = await getAuthorById(req.params.id);
        return res.json(author);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteAuthorById = async (req, res) => {
    try {
        const author = await deleteAuthorById(req.params.id);
        return res.json(author)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateAuthorById = async (req, res) => {
    try {
        const author = await updateAuthorById(req.params.id, req.body);
        return res.json(author)
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreateAuthor: handleCreateAuthor,
    handleGetAllAuthor: handleGetAllAuthor,
    handleGetAuthorById: handleGetAuthorById,
    handleDeleteAuthorById: handleDeleteAuthorById,
    handleUpdateAuthorById: handleUpdateAuthorById,
}