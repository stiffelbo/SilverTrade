import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './AddToCardForm.module.scss';

import clsx from 'clsx';

/* Components */


/* Redux */

import { connect } from 'react-redux';
import { getSpot } from '../../../redux/spotRedux.js';
import { getCartItems, addToCart } from '../../../redux/cartRedux.js';


class Comp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity : 0,
      total: 0,      
    };
  }

  componentDidMount(){
    const {cart, prodID, spot, price} = this.props;
    const inCart = cart.find( prod => prod.id === prodID);

    if(inCart){
      const total = ((Number(price) + Number(spot.spot))*inCart.quantity).toFixed(2);
      this.setState( ()=> ({
        quantity: inCart.quantity,
        total: total,
      }));
    }
  }

  handleChange = (quantity, unitPrice) => {
    
    if(quantity !== this.state.quantity){
      this.setState( () => ({
        quantity : quantity,
        total : (quantity * unitPrice).toFixed(2),
      }));
    }    
  }

  handleAddToCard = (id, quantity) => {    
    const {addToCart} = this.props;
    addToCart(id, quantity);
  }

  render() {
    const {stock, price, prodID, spot, addToCart} = this.props;
    const disabled = stock > 0 ? false : true;
    const disabledClass = disabled ? styles.disabled : styles.enabled;
    const onStock = disabled ? "Out of stock" : `${stock} pcs`;
    const bntIcon = disabled ? "fas fa-times" : "fas fa-check";
    const unitPrice = (Number(price) + Number(spot.spot)).toFixed(2);

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
            <p>{unitPrice} $</p>
          </div>       
        </div>
        <div className={styles.row}>
          <div className={styles.label}>
          <i className="fas fa-hand-holding-usd"></i>
            <span>Total: </span>
          </div>
          <div className={styles.value}>
            <p>{this.state.total} $</p>
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
              onChange={(e) => {this.handleChange(e.target.value, unitPrice)}}
              />
          </div>       
        </div>    
        <button type="submit"
          className={clsx(disabledClass)} 
          disabled={disabled}
          onClick={(e) => {
            e.preventDefault();
            this.handleAddToCard(prodID, this.state.quantity);
          }}
          >
            Add To Cart <i className={bntIcon}></i>
        </button> 
      </div>
    );
  }
  
}

Comp.propTypes = {  
  stock: PropTypes.number,
  price: PropTypes.number,
};

const mapStateToProps = state => ({
  spot: getSpot(state),
  cart: getCartItems(state),
});

const mapDispatchToProps = dispatch => ({
  addToCart: (id, quantity) => dispatch(addToCart(id, quantity)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

export {
  // Component as AddToCardForm,
  Container as AddToCardForm,
  // Component as AddToCardFormComponent,
};
