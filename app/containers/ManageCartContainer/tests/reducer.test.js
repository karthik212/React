import { fromJS } from 'immutable';
import manageCartContainerReducer from '../reducer';

describe('manageCartContainerReducer', () => {
  it('returns the initial state', () => {
    expect(manageCartContainerReducer(undefined, {})).toEqual(fromJS({}));
  });
});
