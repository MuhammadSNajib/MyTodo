import { combineReducers } from 'redux';
import { createNavigationReducer } from 'react-navigation-redux-helpers';

import RootNavigation from './../../navigations/RootNavigation';
import todos from './todos';

const reducerRouter = createNavigationReducer(RootNavigation);

const appReducer = combineReducers({
  router: reducerRouter,
  todos
})

export default appReducer

