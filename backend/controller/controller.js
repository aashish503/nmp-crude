const productModel = require('../models/product_model');


async function getAllProductData(req, res, next) {
    try {
        let ProductModelData = await productModel.find({});

        if (!ProductModelData) {
            return res.status(400).send({ data: 'Data not found' }).end();
        }

        return res.status(200).json(ProductModelData).end();
    } catch (e) {
        return next(e);
    }
}

async function creatProductData(req, res, next) {
    let { name, categary } = req.body;

    var productData = {
        name: name,
        categary: categary
    };

    try {
        const insertProduct = await productModel.insertMany(productData);
        return res.status(200).json({ data: insertProduct }).end();
    } catch (e) {
        return next(e);
    }
}

async function getProductData(req, res, next) {
    let userId = req.query._id;
    // req.params.abc
    // req.body.abc
    try {
        let ProductModelData = await productModel.find({ _id: userId })

        if (!ProductModelData) {
            return res.status(400).send({ data: 'User Not Found' }).end();
        }

        return res.status(200).json(ProductModelData).end();
    } catch (e) {
        return next(e);
    }
}

async function updateProduct(req, res, next) {
    let userId = req.body._id;

    let { name, categary } = req.body;

    var productData = {
        name: name,
        categary: categary,
    };

    try {
        const updateProduct = await productModel.findOneAndUpdate({ _id: userId }, productData);
        return res.status(200).json({ data: updateProduct }).end();
    } catch (e) {
        next(e);
    }
}

async function deleteProduct(req, res, next) {
    let userId = req.query._id;

    try {
        const deleteProduct = await productModel.findByIdAndDelete(userId);
        return res.status(200).json({ data: deleteProduct }).end();
    } catch (e) {
        next(e);
    }
}


module.exports = { getAllProductData, creatProductData, getProductData, updateProduct, deleteProduct }