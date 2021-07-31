const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({ 
  billingData: {
    name: { type: String, required: true }, 
    email: { type: String, required: true },
    phone: { type: String, required: true },
    country: { type: String, required: true },
    city: { type: String, required: true },
    zip: { type: String, required: true },
    address: { type: String, required: true },
    payment: { type: String, required: true },
    shipping: { type: String, required: true },
  },
  items: [
    {
      product: {type: String, required: true, ref: 'Coin'},
      quantity: {type: Number, required: true },
      comment: { type: String, required: false },
      premium: {type: Number, required: true },
    },
  ],
  spot: {type: Number, required: true },
});

module.exports = mongoose.model('Order', orderSchema);