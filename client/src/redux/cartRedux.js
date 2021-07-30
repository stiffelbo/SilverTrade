import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getCartItems = ({ cart }) => cart.cartItems;
export const getBillingData = ({ cart }) => cart.billingData;
/* ACTIONS */

// action name creator
const reducerName = 'cart';
const createActionName = name => `app/${reducerName}/${name}`;

const CHECK_CART = createActionName('CHECK_CART');
const ADD_TO_CART = createActionName('ADD_TO_CART');
const REMOVE_FROM_CART = createActionName('REMOVE_FROM_CART');
const ADD_COMMENT = createActionName('ADD_COMMENT');
const FILL_BILLING_DATA = createActionName('FILL_BILLING_DATA');

//actions
export const checkCart = () => ({type: CHECK_CART});
export const addComment = payload => ({payload, type: ADD_COMMENT});
export const fillBillingData = payload => ({payload, type: FILL_BILLING_DATA});

export const addToCart = (id, quantity) => async (dispatch, getState) => {
  const { data } = await axios.get(`${API_URL}/products/${id}`); 

  dispatch({
    type: ADD_TO_CART,
    payload: {
      id: data._id,
      name: data.name,
      images: data.images,
      premium: data.premium.usd,
      stock: data.stock,
      year: data.year,
      faceValue: data.faceValue,
      quantity,
    }
  });

  //zapisuje koszyk w localStorage
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });

  //zapisuje koszyk w localStorage
  localStorage.setItem('cart', JSON.stringify(getState().cart.cartItems));
}


/* INITIAL STATE */

const initalState = {
  billingData: {},
  cartItems : [],
}

/* REDUCER */

export const cartReducer = (state = initalState, action) => {
  switch(action.type) {
    case ADD_TO_CART:

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
    case REMOVE_FROM_CART:
      // payload to string z watosć id produktu po którym odfiltujemy istnijące w koszyku produkty
      return {
        ...state,
        cartItems: state.cartItems.filter( prod => prod.id !== action.payload ),
      }
      
    case CHECK_CART:
      const cartInStorage = localStorage.getItem('cart');
      const billingDataInStorage = localStorage.getItem('billingData');
      if(cartInStorage){
        return {
          ...state,
          cartItems: JSON.parse(cartInStorage),
          billingData: JSON.parse(billingDataInStorage),
        }
      }
      return state;
    case ADD_COMMENT:
      const newState = {
        ...state,
        cartItems: state.cartItems.map(item => {
          if(item.id == action.payload.coinId){
            return (
              {
                ...item,
                comment: action.payload.comment
              }
            );
          }
          return item;
        })
      }       
      localStorage.setItem('cart', JSON.stringify(newState.cartItems));    
      return newState;
    case FILL_BILLING_DATA:
      const newBillingData = action.payload;
      localStorage.setItem('billingData', JSON.stringify(newBillingData));
      return (
        {
          ...state,
          billingData: newBillingData,
        }
      );    

  default:
    return state;
  }
}