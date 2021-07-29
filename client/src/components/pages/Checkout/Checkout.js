import React from 'react';
import PropTypes from 'prop-types';

import styles from './Checkout.module.scss';

import { Link } from 'react-router-dom';
import { freeShipping } from '../../../config';

/* Components */
import { CartSummary } from '../../features/CartSummary/CartSummary';

/* Redux */

import { connect } from 'react-redux';
import { getCartItems } from '../../../redux/cartRedux.js';

class Comp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {      
      name: '',     
      email: '',      
      address: '',
      city: '',
      zip: '',
      country: '',      
    };
  }

  formToState(prop, val){
    this.setState(()=>({
      [prop] : val,
    }));
  }

  render(){
    const {cart} = this.props;

    if(cart.length){
      return (
        <div className={styles.root}>          
          <div className={styles.form}>
            <div className={styles.bill}>           
              <label className={styles.label}>Name:</label>
              <input type="text" name="name" className={styles.name} 
              onChange={ (e)=>{
                this.formToState('name', e.target.value)
              }} required/>          
              <label className={styles.label}>Email:</label>
              <input type="email" name="email" className={styles.name} 
              onChange={ (e)=>{
                this.formToState('email', e.target.value)
              }}
              required/>
              <label className={styles.label}>Phone:</label>
              <input type="phone" name="phone" className={styles.name} 
              onChange={ (e)=>{
                this.formToState('phone', e.target.value)
              }}
              required/>
              <label className={styles.label}>Address:</label>
              <input type="text" name="address" className={styles.name} 
              onChange={ (e)=>{
                this.formToState('address', e.target.value)
              }}
              required/>
              <label className={styles.label}>City:</label>
              <input type="text" name="city" className={styles.name} 
              onChange={ (e)=>{
                this.formToState('city', e.target.value)
              }}
              required/>
              <label className={styles.label}>Zip:</label>
              <input type="text" name="zip" className={styles.name} 
              onChange={ (e)=>{
                this.formToState('zip', e.target.value)
              }}
              required/>
              <label className={styles.label}>Country:</label>
              <input type="text" name="country" className={styles.name} 
              onChange={ (e)=>{
                this.formToState('country', e.target.value)
              }}
              required/>
            </div>
            <div className={styles.payment}>
              <CartSummary link={false} className={styles.summary}/>
              
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
  
}

Comp.propTypes = {  
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  cart: getCartItems(state),
});

// const mapDispatchToProps = dispatch => ({
//   addToCart: (id, quantity) => dispatch(addToCart(id, quantity)),
//   removeFromCart : (id) => dispatch(removeFromCart(id)),
// });

const Container = connect(mapStateToProps, null)(Comp);

export {
  Container as Checkout,
};
