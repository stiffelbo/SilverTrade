import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getCoins = ({ coins }) => coins.data;
export const getCoin = ({ coins }, id) => coins.data.filter(coin => coin._id == id);
export const getSale = ({ coins }) => coins.data.filter(coin => coin.sale == true);
export const getRequest = ({ coins }) => coins.request;

/* ACTIONS */

// action name creator
const reducerName = 'coins';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_COINS = createActionName('LOAD_COINS');
const LOAD_COIN_BY_ID = createActionName('LOAD_COIN_BY_ID');


export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const loadCoins = payload => ({ payload, type: LOAD_COINS });
export const loadCoinById = payload => ({ payload, type: LOAD_COIN_BY_ID });

/* THUNKS */

/*akcja złożona, moze być async*/
export const loadCoinsRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/coins/`);      
      dispatch(loadCoins(res.data));
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};

export const loadCoinByIdRequest = (id) => {
  console.log('loadCoinByIdRequest', id); 

  return async dispatch => {
    dispatch(startRequest());
    try {      
      let res = await axios.get(`${API_URL}/coins/${id}`);      
      dispatch(loadCoinById(res.data));
      dispatch(endRequest());

    } catch(e) {
      dispatch(errorRequest(e.message));
    }
  };

}


/* INITIAL STATE */

const initialState = {
  data: [],
  coinById : {},
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

/* REDUCER */

export default function reducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_COINS: 
      return { ...statePart, data: [...action.payload] };
    case LOAD_COIN_BY_ID: 
      return { ...statePart, coinById: action.payload };
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
