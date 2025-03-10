const { json } = require("express")
const Cart=require("../models/Cart")

exports.addToCart=async(req,res)=>{
    const{productID,name,price}=req.body
    if(!productID){
        return res.status(400).json({message:"ProductID is missing"})
    }
    let cart=await Cart.findOne({userID:req.user.id})
    if(!cart){
        cart=new Cart({userID:req.user.id,item:[]})
    }
    const existingItem=cart.items.find((item)=>item.productID && item.productID.toString() === productID.toString())

    if(existingItem){
        existingItem.quantity +=1
    }
    else{
        cart.items.push({productID,name,price,quantity:1})
    }
    await cart.save()
    res.json({cart,message:"Item added to cart"})
}

exports.getCart=async(req,res)=>{
    const cart=await Cart.findOne({userID: req.user.id})
    res.json(cart ? cart.items:[])
}

exports.removeFromCart=async(req,res)=>{
    const {productID}=req.body
    let cart=await Cart.findOne({userID:req.user.id})
    if(!cart) return res.status(400).json({message:"Cart not found"})

    cart.items =cart.items.filter((item)=>item.productID !== productID)
    await cart.save()
    res.json({cart,message:"Item removed from cart"})
}