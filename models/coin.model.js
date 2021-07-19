const mongoose = require('mongoose');

const coinSchema = new mongoose.Schema({ 
  name: { type: String, required: true },  
  country: { type: String, required: true },  
  year: { type: String, required: true },
  faceValue: { type: String, required: true },
  alloy: { type: String, required: true },
  purity: { type: String, required: true },
  quality: { type: String, required: true },
  mint: { type: String, required: true },
  premium: { 
    eur: {type: Number},
    usd: {type: Number},
 },
  stock: { type: Number, required: true },
  images: { 
    av: {type: String},
    rev: {type: String},
 },
  sale: {type: Boolean},
});

module.exports = mongoose.model('Coin', coinSchema);