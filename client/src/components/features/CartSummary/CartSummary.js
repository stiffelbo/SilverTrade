import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartSummary.module.scss';
import { Link } from 'react-router-dom';

/* Components */


/* Redux */

import { connect } from 'react-redux';
import { getCartItems } from '../../../redux/cartRedux.js';
import { getSpot } from '../../../redux/spotRedux.js';



const Component = ({cart, spot, link}) => {

  if(cart.length){
    // tu cos nie poszło ale sie dobrze zapowiada
    // const {items, total} = cart.reduce( (res, item) => ({items: Number(res.items) + Number(item.quantity), total: res.total + (Number(item.quantity) * (Number(spot) + item.premium))}));

    let items = 0;
    let total = 0;

    cart.map(item => {
      items += Number(item.quantity);
      total += (item.premium + Number(spot.spot)) * Number(item.quantity);
    });

    total = total.toFixed(2);

    return (
      <div className={styles.root}>      
        <div className={styles.row}>
          <div className={styles.label}>
            <i className="fas fa-tag"></i>
            <span>Total: </span>
          </div>
          <div className={styles.value}>
            <p>
              {`${total} $`}
            </p>
          </div>       
        </div>
        <div className={styles.row}>
          <div className={styles.label}>
            <i className="fas fa-shopping-basket"></i>
            <span>Items: </span>
          </div>
          <div className={styles.value}>
            <p>{items}</p>
          </div>       
        </div>
        {link && 
        <Link to="/checkout" >
          <button>Checkout <i className="fas fa-wallet"></i></button> 
        </Link> }                   
      </div>
    );


  }  
}

Component.propTypes = {  
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  cart: getCartItems(state),
  spot: getSpot(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps, null)(Component);

export {

  Container as CartSummary,

};
