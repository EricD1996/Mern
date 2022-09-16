const {Pet} = require('../models/pet.model');

const createPet = async (data) => {
    const pet = await Pet.create(data);
    return pet;
}

const getAllPet = async () => {
    console.log('service, getPet')
    const pet = await Pet.find();
    return pet;
}

const getPetById = async (id) => {
    
    const pet = await Pet.findById(id);
    return pet;
}

const deletePetById = async (id) => {
    const pet = await Pet.findByIdAndDelete(id);
    return pet;
}

const updatePetById = async (id, data) => {
    const pet = await Pet.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true,
    })
    return pet;
}

module.exports = {
    createPet:createPet,
    getAllPet:getAllPet,
    getPetById,
    deletePetById,
    updatePetById,
}