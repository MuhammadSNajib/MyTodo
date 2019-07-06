import axios from 'axios';
import * as types from './../types';

export const getData = () => ({
  type: "GET_DATA",
  payload: axios({
    method: 'GET',
    url: "https://reqres.in/api/user"
  })
})

export const addTodos = value => ({
  type: types.ADD_TODO,
  payload: value
});

export const editTodos = value => ({
  type: types.EDIT_TODOS,
  payload: value
});

export const removeTodos = id => ({
  type: types.REMOVE_TODOS,
  payload: id
})