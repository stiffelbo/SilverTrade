import axios from 'axios';
import { API_URL } from '../config';

// action name creator
const reducerName = 'order';
const createActionName = name => `app/${reducerName}/${name}`;

const PLACE_ORDER = createActionName('PLACE_ORDER');

export const orderSend = payload => ({ payload, type: PLACE_ORDER });

/* THUNKS */

export const orderRequest = (data) => {
  return async dispatch => {    
    try {
      let res = await axios.post(`${API_URL}/orders/`, data);      
      console.log(res.data);
    } catch(e) {
      console.log(e.message);
    }
  };
};

export const ordersReducer = (state = initalState, action) => {
  switch(action.type) {    
    case PLACE_ORDER:
      return state;
  default:
    return state;
  }
}