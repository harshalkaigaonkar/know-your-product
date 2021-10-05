const express = require('express')
const router = express.Router()


router.get('product/:key',getProducts)


module.exports = router;