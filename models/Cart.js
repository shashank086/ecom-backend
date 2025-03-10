const mongoose=require('mongoose');

const cartSchema=new mongoose.Schema({
    userID:String,
    items:[{productID:String,name:String,price:Number,quantity:Number}]
})
module.exports=mongoose.model('Cart',cartSchema);