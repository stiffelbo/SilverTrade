import React from 'react';
import PropTypes from 'prop-types';

import styles from './Checkout.module.scss';

import { Link } from 'react-router-dom';

/* Components */
import { CartSummary } from '../../features/CartSummary/CartSummary';

/* Redux */

import { connect } from 'react-redux';
import { getCartItems } from '../../../redux/cartRedux.js';

const Component = ({cart}) => {

  if(cart.length){
    return (
      <div className={styles.root}>
        <div className={styles.summary}>
          <CartSummary link={false} className={styles.summary}/>
        </div>
        <div className={styles.form}>
          <div className={styles.bill}>
            <div className={styles.row}>
              <i className="fas fa-user"></i>
              <h3>Billing Address:</h3>
            </div>
            <div className={styles.row}>
              <i className="fas fa-user"></i>
              <h3>Billing Address:</h3>
            </div>

          </div>
          <div className={styles.payment}>

          </div>          
        </div>
        <button className={styles.confirm} />   
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
