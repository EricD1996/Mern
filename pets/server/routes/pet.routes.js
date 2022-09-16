const express = require('express');
const {
    handleCreatePet,
    handleGetAllPet,
    handleGetPetById,
    handleDeletePetById,
    handleUpdatePetById,
} = require('../controllers/pet.controller');

const router = express.Router();

router.post('/', handleCreatePet);
router.get('/', handleGetAllPet);
router.get('/:id', handleGetPetById);
router.delete('/:id', handleDeletePetById);
router.put('/:id', handleUpdatePetById);

module.exports = {petRouter: router};