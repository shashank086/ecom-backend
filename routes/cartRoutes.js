const express=require('express');
const authMiddlewear = require('../middlewear/authMiddlewear');
const { addToCart, getCart, removeFromCart } = require('../controllers/cartControllers');

const router=express.Router()
router.post("/add",authMiddlewear,addToCart)
router.get("/",authMiddlewear,getCart)
router.post('/remove',authMiddlewear,removeFromCart)

module.exports=router;