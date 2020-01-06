const express = require("express")
const router = express.Router()
const Order = require("../models/Order.js")


//Gets back all the posts
router.get("/", async (req, res) => {
    try{
        const orders = await Order.find()
        res.json(orders)
    }catch(err){
        res.json({message: err})
    }
})

//Submits a post
router.post("/", async (req, res) => {
    const order = new Order({
        name: req.body.name,
        price: req.body.price,
        sandwitchType: req.body.sandwitchType,
        toppings: req.body.toppings,
        spice: req.body.spice,
        cheese: req.body.cheese
    })

    try{
        const savedOrder = await order.save()
        res.json(savedOrder)
    }catch(err){
        res.json({message: err})
    }
    
})

//Get specific post
router.get("/:orderId", async (req, res) => {
    try{
        const post = await Order.findById(req.params.orderId)
        res.json(post)
    }catch(err){
        res.json({message: err})
    }
    
})

//Delete specific post
router.delete("/:orderId", async (req, res) => {
    try{
        const removedPost = await Order.deleteOne({ _id: req.params.orderId })
        res.json(removedPost)
    }catch(err){
        res.json({message: err})
    }
    
})

module.exports = router