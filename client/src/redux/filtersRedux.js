/* SELECTORS */

export const getFilters = ({filters}) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const SEARCH_COUNRY = createActionName('SEARCH_COUNRY');
export const SEARCH_NAME = createActionName('SEARCH_NAME');
export const SEARCH_YEAR = createActionName('SEARCH_YEAR');
export const SEARCH_MINT = createActionName('SEARCH_MINT');
export const SEARCH_PREMIUM_FROM = createActionName('SEARCH_PREMIUM_FROM');
export const SEARCH_PREMIUM_TO = createActionName('SEARCH_PREMIUM_TO');

//action creators
export const searchCountry = payload => ({ payload, type: SEARCH_COUNRY });
export const searchName = payload => ({ payload, type: SEARCH_NAME });
export const searchMint = payload => ({ payload, type: SEARCH_MINT });
export const searchYear = payload => ({ payload, type: SEARCH_YEAR });
export const searchPremiumFrom = payload => ({ payload, type: SEARCH_PREMIUM_FROM });
export const searchPremiumTo = payload => ({ payload, type: SEARCH_PREMIUM_TO });

/*Initial state*/

const initialState = {  
  countryPhrase: '',
  namePhrase: '',
  mintPhrase: '',
  yearPhrase: '',
  premiumFrom: 0,
  premiumTo: 0,
};

// reducer

export function filtersReducer(statePart = initialState, action = {}) {
  switch (action.type) {
    case SEARCH_COUNRY:
      console.log(action.type, action.payload);
      return {
        ...statePart,
        countryPhrase: action.payload,
      }
    case SEARCH_NAME:
      console.log(action.type, action.payload);
      return {
        ...statePart,
        namePhrase: action.payload,
      }
    case SEARCH_MINT:
      console.log(action.type, action.payload);
      return {
        ...statePart,
        mintPhrase: action.payload,
      }
    case SEARCH_YEAR:
      console.log(action.type, action.payload);
      return {
        ...statePart,
        yearPhrase: action.payload,
      }
    case SEARCH_PREMIUM_FROM:
      console.log(action.type, action.payload);
      return {
        ...statePart,
        premiumFrom: action.payload,
      }

    case SEARCH_PREMIUM_TO:
      console.log(action.type, action.payload);
      return {
        ...statePart,
        premiumTo: action.payload,
      }

    default:
      return statePart;
  }
}