import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getProducts = ({ products }) => products.data;
export const getRequest = ({ products }) => products.request;
export const getFilteredProducts = ({ products, filters }) => {
  let output = products.data;
  if(filters.countryPhrase){
    
    output = output.filter(item => item.country.toLowerCase().indexOf(filters.countryPhrase.toLowerCase()) > -1);

  }
  if(filters.namePhrase){
    
    output = output.filter(item => item.name.toLowerCase().indexOf(filters.namePhrase.toLowerCase()) > -1);
    
  }
  if(filters.mintPhrase){

    output = output.filter(item => item.mint.toLowerCase().indexOf(filters.mintPhrase.toLowerCase()) > -1);

  }
  if(filters.yearPhrase){
    
    output = output.filter(item => item.year.toLowerCase().indexOf(filters.yearPhrase.toLowerCase()) > -1);

  }
  if(Number(filters.premiumFrom) > 0){
    
    output = output.filter(item => item.premium.usd >= filters.premiumFrom);
  }
  if(Number(filters.premiumTo) > 0){
    
    output = output.filter(item => item.premium.usd <= filters.premiumTo);
  }
  return output;
};
export const getMints = ({products}) => {
  const mints = [];
  products.data.map(item => {
    if(mints.indexOf(item.mint) == -1){
      mints.push(item.mint);
    }
  });
  mints.sort();
  return mints;
}
export const getCountries = ({products}) => {
  const countries = [];
  products.data.map(item => {
    if(countries.indexOf(item.country) == -1){
      countries.push(item.country);
    }
  });
  countries.sort();
  return countries;
}


/* ACTIONS */

// action name creator
const reducerName = 'products';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_PRODUCTS = createActionName('LOAD_PRODUCTS');

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const loadProducts = payload => ({ payload, type: LOAD_PRODUCTS });

/* THUNKS */

export const loadProductsRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/products/`);      
      dispatch(loadProducts(res.data));
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};



/* INITIAL STATE */

const initialState = {
  data: [],
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

/* REDUCER */

export default function productsReducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_PRODUCTS:        
      return { ...statePart, data: [...action.payload] };
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: false } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };
    default:
      return statePart;
  }
}
