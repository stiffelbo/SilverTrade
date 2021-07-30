const Order = require('../models/order.model');

exports.getAll = async (req, res) => { 
  try {
    res.json(await Order.find().populate('coins'));
  } catch (err) {
    res.status(500).json({ message : err.message });
  }
};

exports.postOne = async (req, res) => { 
  const { billingData, items, spot } = req.body;  
  console.log(billingData, items, spot);
  try{
    const newDoc = new Order({ billingData, items, spot });
    await newDoc.save();
    res.json(newDoc);   
  }catch(err) {
    res.status(500).json({ message: err });
  }
}