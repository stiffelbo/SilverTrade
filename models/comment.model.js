const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({ 
  name: { type: String, required: true },  
  lastName: { type: String, required: true }, 
  email: { type: String, required: true },
  comment: { type: String, required: true },
  coinId: {type: String, required: true, ref: 'Coin'},     
});

module.exports = mongoose.model('Comment', commentSchema);