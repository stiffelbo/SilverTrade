import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { CartItem } from '../../features/CartItem/CartItem';
import { CartSummary } from '../../features/CartSummary/CartSummary';

import { connect } from 'react-redux';
import { getCartItems, addToCart, removeFromCart } from '../../../redux/cartRedux.js';
import { getSpot } from '../../../redux/spotRedux.js';

import styles from './Cart.module.scss';

class Comp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity : 0,
      total: 0,      
    };
  }

  render() {
    const {cart, spot } = this.props;

    if(!cart.length){
      return (
        <div className={styles.empty}>
          <h2>Cart is empty!</h2>
          <h2><Link to="/">Back to shop</Link></h2>
        </div>
      );
    }else{

      return (<div className={styles.root}>
        <div className={styles.items}> 

        {cart.map(prod => 
          <CartItem 
          key={prod.id}
          id={prod.id} 
          name={prod.name} 
          images={prod.images} 
          premium={prod.premium} 
          stock={prod.stock} 
          quantity={prod.quantity} 
          year={prod.year} 
          faceValue={prod.faceValue} 
          spot={spot} 
          
          />
          
          )}
          </div>
          <div className={styles.summary}>
          <CartSummary />
          </div>

      </div>)     

    }
  }
}

Comp.propTypes = {  
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  cart: getCartItems(state),
  spot: getSpot(state),
});

// const mapDispatchToProps = dispatch => ({
//   addToCart: (id, quantity) => dispatch(addToCart(id, quantity)),
//   removeFromCart : (id) => dispatch(removeFromCart(id)),
// });

const Container = connect(mapStateToProps, null)(Comp);

export {
  // Component as Cart,
  Container as Cart,
  // Component as CartComponent,
};
