const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
        },
    surname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    orders:[{
        number: {
            type: Number,
            unique: true
            },
        name: String
    }]},
    {versionKey : false},
);

module.exports = mongoose.model('users', UserSchema);