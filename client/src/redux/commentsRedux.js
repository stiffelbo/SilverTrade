import axios from 'axios';
import { API_URL } from '../config';

/* SELECTORS */
export const getItemToComment = ({ comments }) => comments;
/* ACTIONS */

// action name creator
const reducerName = 'comments';
const createActionName = name => `app/${reducerName}/${name}`;


const SET_ITEM_ID = createActionName('SET_ITEM_ID');
//const COMMENT_ITEM = createActionName('COMMENT_ITEM');

export const setItemID = payload => ({ payload, type: SET_ITEM_ID });

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
    
  default:
    return state;
  }
}