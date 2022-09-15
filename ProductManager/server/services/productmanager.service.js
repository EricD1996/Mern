const {ProductManager} = require('../models/productmanager.model');

const createProductManager = async (data) => {
    console.log('service: createProductManager');
    const productmanager = await ProductManager.create(data);
    return productmanager;
}

const getAllProductManager = async () => {
    console.log('service, getProductManagers')
    const productmanager = await ProductManager.find();
    return productmanager;
}

const getProductManagerById = async (id) => {
    const productmanager = await ProductManager.findById(id);
    return productmanager;
}

const deleteProductManagerById = async (id) => {
    const productmanager = await ProductManager.findByIdAndDelete(id);
    return productmanager;
}

const updateProductManagerById = async (id, data) => {
    const productmanager = await ProductManager.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    })
    return productmanager;
}


module.exports = {
    createProductManager: createProductManager,
    getAllProductManager: getAllProductManager,
    getProductManagerById: getProductManagerById,
    deleteProductManagerById: deleteProductManagerById,
    updateProductManagerById: updateProductManagerById,
}