const Coin = require('../models/coin.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Coin.find());
  } catch (err) {
    res.status(500).json({ message : err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    res.json(await Coin.findById(req.params.id));
  } catch (err) {
    res.status(500).json({ message : err.message });
  }
};

exports.getSale = async (req, res) => {
  try {
    res.json(await Coin.find({sale : true}));
  } catch (err) {
    res.status(500).json({ message : err.message });
  }
};

exports.deteleById = async (req, res) => {  
  try {
    const result = await Coin.findById(req.params.id);
    if(result){
      await Coin.deleteOne({_id: req.params.id});
      res.json(result);
    }
    else res.status(404).json({message: 'Not found'});
  } catch (err) {
    res.status(500).json({message: err.message});
  }  
};