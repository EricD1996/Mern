const express = require('express');
const {
    handleCreateAuthor,
    handleGetAllAuthor,
    handleGetAuthorById,
    handleDeleteAuthorById,
    handleUpdateAuthorById,
} = require('../controllers/author.controller');
const router = express.Router();

router.post('/', handleCreateAuthor);
router.get('/', handleGetAllAuthor);
router.get('/:id', handleGetAuthorById);
router.delete('/:id', handleDeleteAuthorById);
router.put('/:id', handleUpdateAuthorById);

module.exports = {authorRouter: router};



