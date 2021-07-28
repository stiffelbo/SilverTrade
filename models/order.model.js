const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({ 
  name: { type: String, required: true },  
  lastName: { type: String, required: true },  
  email: { type: String, required: true },
  phone: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  zip: { type: String, required: true },
  address: { type: String, required: true },
  comment: { type: String, required: true },
  shippingMethod : { type: String, required: true },
  items: [
    {
      id: {type: String, required: true, ref: 'Coin'},
      quantity: {type: Number, required: true },
      spot: {type: Number, required: true },
      premium: {type: Number, required: true },
    },
  ],  
});

module.exports = mongoose.model('Order', orderSchema);