import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */

/* ACTIONS */

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

const ADD_TO_CARD = createActionName('ADD_TO_CARD');
const REMOVE_FROM_CARD = createActionName('REMOVE_FROM_CARD');
const RESET_CARD = createActionName('RESET_CARD');




/* REDUCER */

export const cartReducer = (state = { cartItems : []}, action) => {
  switch(action.type) {
    case ADD_TO_CARD:
      const item = action.payload;

      const existItem = state.cartItems.find()

  default:
    return state;
}