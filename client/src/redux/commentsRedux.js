import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getItemToComment = ({ comments }) => comments;
/* ACTIONS */

// action name creator
const reducerName = 'comments';
const createActionName = name => `app/${reducerName}/${name}`;


const SET_ITEM_ID = createActionName('SET_ITEM_ID');
const COMMENT_ITEM = createActionName('COMMENT_ITEM');

export const setItemID = payload => ({ payload, type: SET_ITEM_ID });
export const commentItem = payload => ({ payload, type: COMMENT_ITEM });

/* THUNKS */

export const commentItemRequest = (data) => {
  return async dispatch => {    
    try {
      let res = await axios.post(`${API_URL}/comments/?name=${data.name}&lastName=${data.lastName}&email=${data.email}&comment=${data.comment}&coinId=${data.coinId}`);      
      console.log(data);
    } catch(e) {
      console.log(e.message);
    }
  };
};


/* INITIAL STATE */

const initalState = {
  comments : {
    itemId: '',
    itemDescription: '',
    name: '',
    lastName: '',
    email: '',
    comment: '',

  }
}

export const commentsReducer = (state = initalState, action) => {
  switch(action.type) {
    case SET_ITEM_ID:      
      const {id, itemDescription} = action.payload;      
      if(id === state.comments.itemId){
        return {
          ...state,
          comments : {
            itemId: '',
            itemDescription: '',
            name: '',
            lastName: '',
            email: '',
            comment: '',
          },
        }
      }else{
        return {
          ...state,
          comments : {
            itemId: id,
            itemDescription: itemDescription,
            name: '',
            lastName: '',
            email: '',
            comment: '',
          },
        }
      }      
    case COMMENT_ITEM:
      return state;
  default:
    return state;
  }
}