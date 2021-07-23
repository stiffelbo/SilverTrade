import React from 'react';
import PropTypes from 'prop-types';

import styles from './Checkout.module.scss';

import { Link } from 'react-router-dom';

/* Components */


/* Redux */

import { connect } from 'react-redux';
import { getCartItems } from '../../../redux/cartRedux.js';

const Component = ({cart}) => {

  if(cart.length){
    return (
      <div className={styles.root}>
        <h2>Checkout</h2>    
      </div>
    );
  }else{
    return (
      <div className={styles.empty}>
        <h2>No items for checkout!</h2>
        <h2><Link to="/">Back to shop</Link></h2>
      </div>
    );
  }
}

Component.propTypes = {  
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  cart: getCartItems(state),
});

// const mapDispatchToProps = dispatch => ({
//   addToCart: (id, quantity) => dispatch(addToCart(id, quantity)),
//   removeFromCart : (id) => dispatch(removeFromCart(id)),
// });

const Container = connect(mapStateToProps, null)(Component);

export {
  Container as Checkout,
};
