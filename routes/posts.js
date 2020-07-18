const express = require('express');
const router = express.Router();

const Item = require('../models/Item');
const Order = require('../models/Order');
const User = require('../models/User');


//--------------. ORDER --------------
//SUBMITS A ORDER
router.post('/order/Inserimento', async (req, res) => {
    const order = new Order({
       orderItems: [{
            sku: req.body.sku,
            size: req.body.size,
            price: req.body.price}],
       email: req.body.email,
       address: req.body.address,
       billingMethod: req.body.billingMethod
   });
   try{
   const savedOrder = await order.save()
   res.json(savedOrder);
   }catch(err){
       res.json({message:err})
   }
});

//--------------- USER ---------------

//GET BACK ALL THE USERS
router.get('/user/allUsers', async (req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        res.json({message:err});
    }
});

//SPECIFIC USER by email
router.get('/user/RicercaEmail/:userEmail', async (req, res)=> {
    try{
    const user = await User.find({email:req.params.userEmail});
    res.json(user);
    }catch(err){
        res.json({message:err});
    }
});

//SUBMITS A USER
router.post('/user/Inserimento', async (req, res) => {
    const user = new User({
       email: req.body.email,
       name: req.body.name,
       surname: req.body.surname,
       password: req.body.password
   });
   try{
   const savedUser = await user.save()
   res.json(savedUser);
   }catch(err){
       res.json({message:err})
   }
});

//-----------------ITEM-------------
//SUBMTIS ITEM
router.post('/item/Inserimento', async (req, res) => {
    const item = new Item({
       sku: req.body.sku,
       name: req.body.name,
       color: req.body.color,
       gender: req.body.gender,
       tags: req.body.tags,
       price: req.body.price
   });
   try{
   const savedItem = await item.save()
   res.json(savedItem);
   }catch(err){
       res.json({message:err})
   }
});

//SPECIFIC ITEM by sku
router.get('/item/RicercaItem/:itemSku', async (req, res)=> {
    try{
    const item = await Item.find({sku:req.params.itemSku});
    res.json(item);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router;