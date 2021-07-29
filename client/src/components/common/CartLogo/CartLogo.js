import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartLogo.module.scss';

/* Components */


/* Redux */

import { connect } from 'react-redux';
import { getCartItems } from '../../../redux/cartRedux.js';



const Component = ({cart}) => {

  if(cart.length){
    
    let items = 0;
    cart.map(item => {
      items += Number(item.quantity);     
    });

    return (
      <div className={styles.root}>
        <i className="fas fa-shopping-cart"></i>
        <h2 className={styles.title}>Cart</h2>
        <span>{items}</span>      
      </div>
    );

  }else{
    return (
      <div className={styles.root}>
        <i className="fas fa-shopping-cart"></i>
        <h2 className={styles.title}>Cart</h2>
        <span>x</span>      
      </div>
    )
  }

  
}

Component.propTypes = {  
  dark: PropTypes.bool,
};

const mapStateToProps = state => ({
  cart: getCartItems(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps, null)(Component);

export {  
  Container as CartLogo,  
};
