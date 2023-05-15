const router = require('express').Router();
const productController = require('../controller/controller');

router.get('/products', productController.getAllProductData);
router.post('/createProduct', productController.creatProductData);
router.get('/product/id', productController.getProductData)
router.put('/updateProduct', productController.updateProduct)
router.delete('/deleteProduct/id', productController.deleteProduct)

module.exports = router;