/*
 *
 * MainContainer reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION } from './constants';

export const initialState = fromJS({name:'karthik'});

function mainContainerReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state.set('name', action.name);
    default:
      return state;
  }
}

export default mainContainerReducer;
