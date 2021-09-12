const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const colors = require('colors');

const connectDB = require('./config/db')

connectDB();
const transactions = require('./routes/transactions');

dotenv.config({path: './config/.env'})

const app = express();

app.use('/transactions', transactions);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.yellow.bold))