const Order = require('../models/order.model');
const Coin = require('../models/coin.model');

exports.getAll = async (req, res) => { 
  try {
    res.json(await Order.find().populate('items.product', 'name year faceValue country images'));
  } catch (err) {
    res.status(500).json({ message : err.message });
  }
};

exports.getById = async (req, res) => { //ok
  try {    
    const result = await Order.findById(req.params.id).populate('items.product', 'name year faceValue country images');
    if(!result) res.status(404).json({message: 'Not found'});
    else res.json(result);
  } catch (err) {
    res.status(500).json({message: err});
  }  
}

exports.postOne = async (req, res) => { 
  const { billingData, items, spot } = req.body;  
  try{
    const newDoc = new Order({ billingData, items, spot });
    await newDoc.save();    
    const result = await Order.findById(newDoc._id).populate('items.product', 'name year faceValue country images');
    console.log(result);
    res.json(result);   
  }catch(err) {
    res.status(500).json({ message: err });
  }
}