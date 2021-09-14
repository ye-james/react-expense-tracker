const mongoose = require('mongoose')
const Transaction = require('../models/Transaction');

// @desc Get all transactions
// @routes GET /transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
    try {
        const result = await Transaction.find();
        res.status(200).json({
            success: true,
            data: result
        })
    } catch (err) {
        res.send(500).json({
            success: false,
            error: err
        })
    }
}

// @desc Add a transaction
// @routes POST /transactions/
// @access Public
exports.addTransaction = async (req, res, next) => {
    try {
        const { amount, text } = req.body;
        const transaction = await Transaction.create({
            amount,
            text
        })

        res.status(201).json({
            success: true,
            message: "Successfully added transaction",
            data: transaction
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            error: err
        })
    }
}

// @desc Delete a transaction
// @routes DELETE /transactions/:id
// @access Public
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transactionID = req.params.id;
        const result = await Transaction.deleteOne({ id: transactionID });
        res.status(201).json({
            success: true,
            message: "Successfully deleted transaction",
            data: result
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to delete transaction',
            error: err
        })
    }
}