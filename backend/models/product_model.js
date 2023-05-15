const mongooes = require('mongoose');

const ProductSchema = new mongooes.Schema({
    name: { type: String },
    categary: { type: String }
},
    {
        versionKey: false
    });

module.exports = mongooes.model('ProductData', ProductSchema);