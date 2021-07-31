import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './AddToCardForm.module.scss';

import clsx from 'clsx';

/* Components */

/* Redux */

import { connect } from 'react-redux';
import { getSpot } from '../../../redux/spotRedux.js';
import { getCartItems, addToCart, removeFromCart } from '../../../redux/cartRedux.js';


class Comp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity : 0,   
    };
  }

  componentDidMount(){
    const {cart, prodID} = this.props;
    const inCart = cart.find( prod => prod.id === prodID);

    if(inCart){
      
      this.setState( ()=> ({
        quantity: inCart.quantity,
      }));
    }
  }

  handleQtyChange = (e) => {
    let quantity = e.target.value;
    if(quantity !== this.state.quantity){
      quantity = quantity <= this.props.stock ? quantity : this.props.stock;
      this.setState( () => ({
        quantity,
      }));
    }    
  }

  handleAddToCard = () => {    
    
    const {addToCart, stock, prodID, removeFromCart} = this.props;
    if(this.state.quantity > stock){
      addToCart(prodID, stock);
    }else if(this.state.quantity > 0){
      addToCart(prodID, this.state.quantity);
    }else{
      removeFromCart(prodID);
    }
    
  }

  render() {
    const {stock, premium, spot} = this.props;
    const disabled = stock > 0 ? false : true;
    const disabledClass = disabled ? styles.disabled : styles.enabled;
    const onStock = disabled ? "Out of stock" : `${stock} pcs`;
    const bntIcon = disabled ? "fas fa-times" : "fas fa-check";
    const unitPrice = (Number(premium) + Number(spot.spot)).toFixed(2);
    const total = ((Number(premium) + Number(spot.spot))*this.state.quantity).toFixed(2);

    return (
      <div className={styles.root}>
        <div className={styles.row}>
          <div className={styles.label}>
            <i className="fas fa-warehouse"></i>
            <span>Stock: </span>
          </div>
          <div className={styles.value}>
            <p>{onStock}</p>
          </div>   
    
        </div>
        <div className={styles.row}>
          <div className={styles.label}>
            <i className="fas fa-tag"></i>
            <span>Price: </span>
          </div>
          <div className={styles.value}>
            <p>$ {unitPrice}</p>
          </div>       
        </div>
        <div className={styles.row}>
          <div className={styles.label}>
          <i className="fas fa-hand-holding-usd"></i>
            <span>Total: </span>
          </div>
          <div className={styles.value}>
            <p>$ {total}</p>
          </div>       
        </div>
        <div className={styles.row}>
          <div className={styles.label}>
            <i className="fas fa-shopping-basket"></i>
            <span>Amount: </span>
          </div>
          <div className={styles.value}>
            <input 
              type="number" 
              step="1" 
              min="0" 
              max={stock} 
              className={styles.input} 
              required 
              disabled={disabled} 
              value={this.state.quantity}
              onChange={
                this.handleQtyChange                              
              }      
              />
              
          </div>       
        </div>    
        <button type="submit"
          className={clsx(disabledClass)} 
          disabled={disabled}
          onClick={
            this.handleAddToCard
          }
          >
            Add To Cart <i className={bntIcon}></i>
        </button>
      </div>
    );
  }
  
}

Comp.propTypes = {  
  stock: PropTypes.number,
  premium: PropTypes.number,
  spot: PropTypes.object,
};

const mapStateToProps = state => ({
  spot: getSpot(state),
  cart: getCartItems(state),
});

const mapDispatchToProps = dispatch => ({
  addToCart: (id, quantity) => dispatch(addToCart(id, quantity)),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

export {
  // Component as AddToCardForm,
  Container as AddToCardForm,
  // Component as AddToCardFormComponent,
};
