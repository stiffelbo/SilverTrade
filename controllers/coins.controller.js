const Coin = require('../models/coin.model');

exports.getAll = async (req, res) => {
  try {
    res.json(await Coin.find());
  } catch (err) {
    res.status(500).json({ message : err });
  }
};