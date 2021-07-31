import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { CartItem } from '../../features/CartItem/CartItem';
import { CartSummary } from '../../features/CartSummary/CartSummary';

import { connect } from 'react-redux';
import { getCartItems, clearCart } from '../../../redux/cartRedux.js';
import { getSpot } from '../../../redux/spotRedux.js';
import { getConfirmation, getRequest } from '../../../redux/orderRedux.js';

import styles from './Cart.module.scss';

class Comp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity : 0,
      total: 0,      
    };
    this.handleClear = this.handleClear.bind(this);
  }

  componentDidUpdate(){
    const {request, clearCart} = this.props;
    if(request.success){
      clearCart();
    }
  }

  handleClear(){ 
    this.props.clearCart();    
  }

  render() {
    const {cart, confirmation, request } = this.props;

    if(!cart.length && !confirmation._id){
      return (
        <div className={styles.empty}>
          <h2>Cart is empty!</h2>
          <h2><Link to="/">Back to shop</Link></h2>
        </div>
      );
    }else if(!confirmation._id && !request.success){

      return (<div className={styles.root}>
        
        <div className={styles.items}> 
          <h3 className={styles.title}>Cart items:</h3>
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
          comment={prod.comment}   
          
          />
          
          )}
          <button className={styles.clearCart} onClick={this.handleClear}>Clear Cart</button>
          </div>
          <div className={styles.summary}>
          <CartSummary />
          </div>

      </div>)     

    }else{

      return (
      <div className={styles.root}>
        <div className={styles.confirmation}>
          <h3 className={styles.title}>{`Dear ${confirmation.billingData.name},`}</h3>
          <h3 className={styles.title}>{`Thank you for purchase at Silver Trader!`}</h3>
          <h3 className={styles.title}>{`Your order has been placed with ID: ${confirmation._id}`}</h3>  
          <h3 className={styles.title}>{`Cart is clear! Please proceed to `}<Link to={'/'}>SHOP</Link></h3>          
        </div>        
      </div>
      );
    }
  }
}

Comp.propTypes = {  
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  cart: getCartItems(state),
  spot: getSpot(state),
  confirmation: getConfirmation(state), 
  request: getRequest(state), 
});

const mapDispatchToProps = dispatch => ({
  clearCart: () => dispatch(clearCart()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

export {
  // Component as Cart,
  Container as Cart,
  // Component as CartComponent,
};
