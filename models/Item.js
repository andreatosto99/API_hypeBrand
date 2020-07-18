const mongoose = require('mongoose');

const itemSchema = mongoose.Schema({
    sku: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    tags: [String],
    
    price: {
        type: Number,
        required: true
    }},
    {versionKey : false},
);

module.exports = mongoose.model('items', itemSchema);