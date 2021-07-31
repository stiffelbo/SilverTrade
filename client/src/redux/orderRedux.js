import axios from 'axios';
import { API_URL } from '../config';
import { clearCart } from './cartRedux';

/*SELECTORS */
export const getConfirmation = ({ order }) => order.confirmation;
export const getRequest = ({ order }) => order.request;

// action name creator
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

const PLACE_ORDER = createActionName('PLACE_ORDER');
const CONFIRM_ORDER = createActionName('CONFIRM_ORDER');
const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');
const CLEAR_ORDER = createActionName('CLEAR_ORDER');

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const orderSend = payload => ({ payload, type: PLACE_ORDER });
export const orderConfirm = payload => ({ payload, type: CONFIRM_ORDER });
export const orderClear = () => ({ type: CLEAR_ORDER });

/* THUNKS */

export const orderRequest = (data) => {
  return async dispatch => {    
    dispatch(startRequest());
    try {
      let res = await axios.post(`${API_URL}/orders/`, data);         
      dispatch(orderConfirm(res.data));        
      dispatch(endRequest());
    } catch(e) {
      console.log(e.message);
    }
  };
};

/* INITIAL STATE */

const initialState = {
  confirmation: {},
  request: {
    pending: false,
    error: null,
    success: null,
  },
};

/* REDUCER */

export const orderReducer = (statePart = initialState, action) => {
  switch(action.type) {
    case START_REQUEST:
      return { ...statePart, request: { pending: true, error: null, success: false } };
    case END_REQUEST:
      return { ...statePart, request: { pending: false, error: null, success: true } };
    case ERROR_REQUEST:
      return { ...statePart, request: { pending: false, error: action.error, success: false } };    
    case PLACE_ORDER:
      return state;
    case CONFIRM_ORDER:
      return {...statePart, confirmation : {...action.payload}};
    case CLEAR_ORDER:
      return initialState;
  default:
    return statePart;
  }
}