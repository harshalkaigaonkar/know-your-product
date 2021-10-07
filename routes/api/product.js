const express = require('express');
const router = express.Router();
const { getProducts } = require('../../controllers/product');


router.post('/product', getProducts);


module.exports = router;