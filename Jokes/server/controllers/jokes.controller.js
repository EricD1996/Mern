const { 
    createJoke,
    getAllJokes,
    getJokeById,
    deleteJokeById,
    updateJokeById, 
} = require('../services/jokes.service');

const handleCreateJoke = async (req, res) => {
    console.log('controller: handleCreateJoke req.body: ', req.body);
    try {
        const joke = await createJoke(req.body);
        return res.json(joke);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetAllJokes = async (req,res) => {
    try {
        const jokes = await getAllJokes();
        return req.json(jokes);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleGetJokeById = async (req,res) => {
    console.log('controller: handleGetJokeById: ', req.body)
    try {
        const joke = await getJokeById(req.params.id);
        return req.json(joke);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleDeleteJokeById = async (req,res) => {
    try {
        const joke = await deleteJokeById(req.params.id);
        return req.json(joke);
    } catch (error) {
        return res.status(400).json(error);
    }
}

const handleUpdateJokeById = async (req,res) => {
    try {
        const joke = await updateJokeById(req.params.id, req.body);
        return res.json(joke);
    } catch (error) {
        return res.status(400).json(error);
    }
}

module.exports = {
    handleCreateJoke: handleCreateJoke,
    handleGetAllJokes: handleGetAllJokes,
    handleGetJokeById: handleGetJokeById,
    handleDeleteJokeById: handleDeleteJokeById,
    handleUpdateJokeById: handleUpdateJokeById,
}