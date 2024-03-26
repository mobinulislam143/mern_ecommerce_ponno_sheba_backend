const express = require('express');
const router = express.Router();
const ProductController = require('../Controller/ProductController')
    
router.get('/demo', ProductController.AllProduct)
 
module.exports = router