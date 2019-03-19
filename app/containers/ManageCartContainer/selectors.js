import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the manageCartContainer state domain
 */

const selectManageCartContainerDomain = state =>
  state.get('manageCartContainer', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by ManageCartContainer
 */

const makeSelectManageCartContainer = () =>
  createSelector(selectManageCartContainerDomain, substate => substate.toJS());

export default makeSelectManageCartContainer;
export { selectManageCartContainerDomain };
