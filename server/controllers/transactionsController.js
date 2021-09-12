const mongoose = require('mongoose')

// @desc Get all transactions
// @routes GET /transactions
// @access Public
exports.getTransactions = (req, res, next) => {
    res.send("Get Transactions")
}

// @desc Add a transaction
// @routes POST /transactions/
// @access Public
exports.addTransaction = (req, res, next) => {
    res.send("POST Transaction")
}

// @desc Delete a transaction
// @routes DELETE /transactions/:id
// @access Public
exports.deleteTransaction = (req, res, next) => {
    res.send("DELETE Transaction")
}