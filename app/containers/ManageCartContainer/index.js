/**
 *
 * ManageCartContainer
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import makeSelectMainContainer from 'containers/MainContainer/selectors';
import makeSelectManageCartContainer from './selectors';
import reducer from './reducer';
import saga from './saga';
import { getUserInfoAction } from './actions';

/* eslint-disable react/prefer-stateless-function 
   const { manageCartContainer } = this.props;
    const { users } = manageCartContainer;
    const {name, address1, country, phone} = users;
*/
export class ManageCartContainer extends React.Component {
  constructor(props) {
    super(props);
    const { getUserInfo } = props;
    getUserInfo('U10000');
  }

  render() {
    const { manageCartContainer } = this.props;
    const { users } = manageCartContainer;
    const { name, address1, country, phone } = users;
    return (
      <div>
        <h2>this is karthik</h2>
        <h2>{name}</h2>
        <h2>{address1}</h2>
      </div>
    );
  }
}

ManageCartContainer.propTypes = {
  getUserInfo: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  manageCartContainer: makeSelectManageCartContainer(),
});

function mapDispatchToProps(dispatch) {
  return {
    getUserInfo: userId => dispatch(getUserInfoAction(userId)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'manageCartContainer', reducer });
const withSaga = injectSaga({ key: 'manageCartContainer', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ManageCartContainer);
