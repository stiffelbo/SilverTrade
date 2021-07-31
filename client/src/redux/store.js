import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// import reducers
import productsReducer from './productsRedux';
import productReducer from './productRedux';
import spotReducer from './spotRedux';
import { cartReducer } from './cartRedux';
import { commentsReducer } from './commentsRedux';
import { orderReducer } from './orderRedux';

// define reducers
const reducers = {
  products: productsReducer,
  product: productReducer,
  spot: spotReducer,
  cart: cartReducer,
  comments: commentsReducer,
  order: orderReducer,
};

// combine reducers
const rootReducer = combineReducers(reducers);

const store = createStore(
  rootReducer,
  compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

export default store;
