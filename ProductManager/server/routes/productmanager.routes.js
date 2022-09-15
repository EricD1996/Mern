const express = require('express');
const {
    handleCreateProductManager,
    handleGetAllProductManager,
    handleGetProductManagerById,
    handleDeleteProductManagerById,
    handleUpdateProductManagerById,
} = require('../controllers/productmanager.controller');
const router = express.Router();

router.post('/', handleCreateProductManager);
router.get('/', handleGetAllProductManager);
router.get('/:id', handleGetProductManagerById);
router.delete('/:id', handleDeleteProductManagerById);
router.put('/:id', handleUpdateProductManagerById);

module.exports = {productmanagerRouter: router};