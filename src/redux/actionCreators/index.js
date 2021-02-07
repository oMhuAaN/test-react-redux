import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST
} from "../actionTypes";

import { } from '../actionTypes';

export const getActionChangeInputValue = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})

export const getActionAddTodoItem = () => ({
  type: ADD_TODO_ITEM
})

export const getActionDeleteTodoItem = (index) => ({
  type: DELETE_TODO_ITEM,
  index
})

export const getActionInitList = (list) => ({
  type: INIT_LIST,
  list
})

export const getActionInitListAsync = () => {
  return async (dispatch) => {
    let url = '/api/list';
    try {
      let response = await fetch(url);
      const data = await response.json();
      const action= getActionInitList(data);
      dispatch(action);
    } catch (error) {
      console.log('Request Failed', error);
    }
  }
}


