import * as types from './../types';

const initialState = {
  data: []
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case types.ADD_TODO:
      return {
        ...state,
        data: state.data.concat(action.payload)
      };
    default:
      return state
  }
}