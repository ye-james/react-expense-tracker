const mongoose = require('mongoose');


const TransactionSchema = new mongoose.Schema({
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    },
    text: {
        type: String,
        trim: true,
        required: [true, 'Text is required']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Transaction', TransactionSchema)