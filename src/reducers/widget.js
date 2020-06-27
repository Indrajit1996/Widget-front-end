import createReducer from '../utils/createReducer';
import actionTypes from '../consts/actionTypes';

const widgetState = {
  data: []
};

const widgetReducer = {};

widgetReducer[actionTypes.data.GET_DATA] = (state, { data }) => {
  return {
  ...state,
  data: data,
  }
};

export default createReducer(widgetReducer, widgetState);
