const {
    createProductManager,
    getAllProductManager,
    getProductManagerById,
    deleteProductManagerById,
    updateProductManagerById,
} = require('../services/productmanager.service');

const handleCreateProductManager = async (req, res) => {
    console.log('controller: handleCreateProductManager req.body: ', req.body);
    try {
        const productmanager = await createProductManager(req.body);
        return res.json(productmanager)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllProductManager = async (req, res) => {
    try {
        const productmanager = await getAllProductManager();
        return res.json(productmanager)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetProductManagerById = async (req, res) => {
    try {
        const productmanager = await getProductManagerById(req.params.id);
        return res.json(productmanager)
    } catch (error) {
        return res.status(400).json(error);
    }
}
const handleDeleteProductManagerById = async (req, res) => {
    try {
        const productmanager = await deleteProductManagerById(req.params.id);
        return res.json(productmanager)
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateProductManagerById = async (req, res) => {
    try {
        const productmanager = await updateProductManagerById(req.params.id, req.body);
        return res.json(productmanager)
    } catch (error) {
        return res.status(400).json(error);
    }
}
module.exports = {
    handleCreateProductManager: handleCreateProductManager,
    handleGetAllProductManager: handleGetAllProductManager,
    handleGetProductManagerById: handleGetProductManagerById,
    handleDeleteProductManagerById: handleDeleteProductManagerById,
    handleUpdateProductManagerById: handleUpdateProductManagerById,
}