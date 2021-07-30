export const API_URL = (process.env.NODE_ENV === 'production') ? '/api' : 'http://localhost:8000/api';
export const spotUpdateTimeOut = 30*1000;
export const freeShipping = 1000;
export const shippings = [
  'UPS', 'FEDEX', 'US POST', 'DHL'
];
export const payments = [
  'VISA', 'PAYPAL', 'BANK TRANSFER', 'BTC', 'ETH', 'XRP'
];
export const billDataCheck = {
  name: 2,     
  phone: 9,     
  email: 5,      
  address: 4,
  city: 4,
  zip: 4,
  country: 4,
  payment: 3,
  shipping: 3, 
}