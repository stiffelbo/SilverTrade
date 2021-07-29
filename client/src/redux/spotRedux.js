import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getSpot = ({ spot }) => spot;

/* ACTIONS */

// action name creator
const reducerName = 'spot';
const createActionName = name => `app/${reducerName}/${name}`;

const START_REQUEST = createActionName('START_REQUEST');
const END_REQUEST = createActionName('END_REQUEST');
const ERROR_REQUEST = createActionName('ERROR_REQUEST');

const LOAD_SPOT = createActionName('LOAD_SPOT');

export const startRequest = () => ({ type: START_REQUEST });
export const endRequest = () => ({ type: END_REQUEST });
export const errorRequest = error => ({ error, type: ERROR_REQUEST });

export const loadSpot = payload => ({ payload, type: LOAD_SPOT });

/* THUNKS */

export const loadSpotRequest = () => {
  return async dispatch => {

    dispatch(startRequest());
    try {

      let res = await axios.get(`${API_URL}/spot/xagusd/`);      
      dispatch(loadSpot(res.data));      
      dispatch(endRequest());      
    } catch(e) {
      dispatch(errorRequest(e.message));
    }

  };
};

/* INITIAL STATE */

const initialState = {
  spot: 0,
  change: 0,
  //w reducerze akcja prosta porówna state i action.payload i ustawi -1 0 lub 1
};

/* REDUCER */

export default function spotReducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case LOAD_SPOT: 
      const change = statePart.spot > action.payload.spot ? -1 : statePart.spot == action.payload.spot ? 0 : 1;
      return { ...statePart, spot: action.payload.spot, change };
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