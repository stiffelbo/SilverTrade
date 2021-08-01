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
};

export const checkMode = resolution => {
  return resolution <= 767 ? 'mobile' : resolution <= 960 ? 'tablet' : resolution <= 1280 ? 'small-desktop' : 'desktop';
};

export const cartsInMode = {
  'mobile' : 4,
  'tablet' : 2,
  'small-desktop' : 3,
  'desktop' : 4,
};

export const featuresInMode = {
  'mobile' : 1,
  'tablet' : 2,
  'small-desktop' : 3,
  'desktop' : 4,
};

export const homePageSlides = [
  {
    image: "https://images.unsplash.com/photo-1595206133361-b1fe343e5e23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
    title: "",
    subtitle: "",
    alt: "Welcome",
  },
  {
    image: "https://images.unsplash.com/photo-1621862623900-832ef4dd24aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Get best silver ounces on the market.",
    subtitle: "More than 100 positions on stock.",
    alt: "Coins image",
  },
  {
    image: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    title: "Live silver spot and unit prices update.",
    subtitle: "No need to search, its here.",
    alt: "Price chart image",
  },
  {
    image: "https://images.unsplash.com/photo-1493135637657-c2411b3497ad?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80",
    title: "Fast deliveries worldwide.",
    subtitle: "Orders placed before 11 CET shipped out same day.",
    alt: "Delivery image",
  },
  {
    image: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    title: "Pay with cryptocurrencies.",
    subtitle: "We accept BTC, ETH, XRP.",
    alt: "Cryptocurrencies image",
  },
];