const mongoose = require('mongoose');
//Schema = mongoose.Schema,
//autoIncrement = require('mongoose-auto-increment');


const OrderSchema = mongoose.Schema({
    //number: {type: mongoose.Schema.Types.ObjectId},
    email: {
        type: String,
        required: true
        },
    address: {
        type: String,
        required: true
    },
    billingMethod: {
        type: String,
        required: true
    },
    orderDate: {
        type: Date,
        default: Date.now
    }
},
    {versionKey : false},
);

//OrderSchema.plugin(autoIncrement.plugin,'orders');
//var Order = connection.model('orders', OrderSchema);
module.exports = mongoose.model('orderses', OrderSchema);