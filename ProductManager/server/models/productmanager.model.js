const mongoose = require('mongoose');

const ProductManagerSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, '{PATH} is required.'],
            minLength: [10, '{PATH} must be at least {MINLENGTH} characters.'],
        },
        price: {
            type: Number,
            required: [true, '{PATH} is required.'],
            min: [1, '{PATH} must be at least 1.'],
        },
        description: {
            type: String,
            required: [true, '{PATH} is required.'],
            minLength: [10, '{PATH} must be at least {MINLENGTH} characters.'],
        }
    }
)

const ProductManager = mongoose.model('ProductManager', ProductManagerSchema);
module.exports = {ProductManager: ProductManager};