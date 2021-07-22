import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */

/* ACTIONS */

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

const ADD_TO_CARD = createActionName('ADD_TO_CARD');
const REMOVE_FROM_CARD = createActionName('REMOVE_FROM_CARD');


//actions

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`${API_URL}/products/${id}`); 

  dispatch({
    type: ADD_TO_CARD,
    payload: {
      id: data._id,
      name: data.name,
      images: data.images,
      premium: data.premium.usd,
      stock: data.stock,
      quantity,
    }
  });

  //zapisuje koszyk w localStorage
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCard = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CARD,
    payload: id,
  });

  //zapisuje koszyk w localStorage
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}


/* INITIAL STATE */

const initalState = {
  cartItems : [],
}

/* REDUCER */

export const cartReducer = (state = initalState, action) => {
  switch(action.type) {
    case ADD_TO_CARD:

    // payload jest objektem { id: 7373737, quantity: 3}
      const item = action.payload;
      const existItem = state.cartItems.find(prod => prod.id === item.id);

      if(existItem){
        // jeśli produkt już jest w koszyku to przepisujemy stan (map -> oddaje nową tablice) i nadpisujemy nową wartością istniejący produkt.
        // dzieki temu koszyk się bedzie odswieżał a aktualną ilością danego produktu.
        return {
          ...state,
          cartItems : state.cartItems.map( prod => prod.id === existItem.id ? item : prod),
        }
      }else{
        // jeśli produktu nie ma to przepisujemy istniejący stan i dpisujemy payload
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        }
      }
    case REMOVE_FROM_CARD:
      // payload to string z watosć id produktu po którym odfiltujemy istnijące w koszyku produkty
      return {
        ...state,
        cartItems: state.cartItems.filter( prod => prod.id !== action.payload ),
      } 
      
  default:
    return state;
  }
}