import React from 'react';
import PropTypes from 'prop-types';

import { CartItem } from '../../features/CartItem/CartItem';
import { CartSummary } from '../../features/CartSummary/CartSummary';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Cart.module.scss';

const Component = (props) => {

  return (
    <div className={styles.root}>
      <div className={styles.items}>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
    
      </div>
      <div className={styles.summary}>
      <CartSummary />
      </div>
    </div>
  );
}

Component.propTypes = {  
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Cart,
  // Container as Cart,
  // Component as CartComponent,
};
