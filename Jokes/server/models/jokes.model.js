const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema(
    {
        setup: {
            type: String,
            required: [true, '{PATH} is required.'],
            minLength: [10, '{PATH} must be at least {MINLENGTH} characters.'],
        },
        punchline: {
            type: String,
            required: [true, '{PATH} is required.'],
            minLength: [3, '{PATH} must be at least {MINLENGTH} characters.'],
        }
    }
)

const Joke = mongoose.model('Joke', JokeSchema);
module.exports = {Joke: Joke};