const express = require('express');
const { getCartProducts, addToCart } = require('../controllers/cart.controller');
const { protect } = require('../middlewares/auth.middleware')

const router = express.Router();

router
    .route("/")
    .get(protect,getCartProducts)
    .post(protect,addToCart)


    // post request (for adding products)
    // put request ( to change quantities)
    

    module.exports = router

