const mongoose = require('mongoose');
require('dotenv').config();

const connection = process.env.DBURL || ""
mongoose.connect(connection);


mongoose.connection.on('error', () => {
    console.log('DB error');
})

mongoose.connection.once('open', () => {
    console.log('Succesfully Connected');
})