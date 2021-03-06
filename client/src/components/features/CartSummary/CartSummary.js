import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartSummary.module.scss';
import { freeShipping, payments, shippings, billDataCheck as check } from '../../../config';
import clsx from 'clsx';
/* Components */

/* Redux */

import { connect } from 'react-redux';
import { getCartItems, fillBillingData, getBillingData, clearCart } from '../../../redux/cartRedux.js';
import { getSpot } from '../../../redux/spotRedux.js';
import { orderRequest, getRequest, getConfirmation, orderClear } from '../../../redux/orderRedux.js';




class Comp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {            
      name: '',     
      phone: '',     
      email: '',      
      address: '',
      city: '',
      zip: '',
      country: '',
      payment: '',
      shipping: '',            
    }

    this.handleOrder = this.handleOrder.bind(this);
  }

  componentDidMount(){
    const {orderClear, request, billingData} = this.props;
    const newState = {...billingData};
    this.setState(()=>({
      ...newState,
    }));
    if(request.success){
      orderClear();
    }
  }

  checkBillingData(){
    if(this.state.name.length < check.name){return false};
    if(this.state.phone.length < check.phone){return false};
    if(this.state.email.length < check.email && this.state.email.indexOf('@') == -1){return false};
    if(this.state.address.length < check.address){return false};
    if(this.state.city.length < check.city){return false};
    if(this.state.zip.length < check.zip){return false};
    if(this.state.country.length < check.country){return false};
    if(this.state.payment.length < check.payment){return false};
    if(this.state.shipping.length < check.shipping){return false};
    return true;
  }

  isFilled(prop, len){
    if(this.state[prop].length < len){return ''};  
    return styles.filled;
  }

  formToState(prop, val){
    this.setState(()=>(
        {[prop] : val,}
    ));    
    //moze głupie ale nie wiem jak inaczej przekazać cały aktualny stan do reduxa. bez tego leci poprzednia wartość.
    setTimeout(()=>this.props.fillBillingData(this.state), 2000);    
  }
  
  handleOrder(){
    const {billingData, cart, spot, orderRequest } = this.props
    const order = {
      items : [],
      billingData,
      spot: spot.spot,
    };
    cart.map(item => {
      const data = {
        product: item.id,
        quantity: item.quantity,
        comment: item.comment ? item.comment : null,
        premium: item.premium,
      }
      order.items.push(data);
    });
    orderRequest(order);    
  }

  render() {
    const {cart, spot} = this.props;

    if(cart.length){
      
      let items = 0;
      let subtotal = 0;

      cart.map(item => {
        items += Number(item.quantity);
        subtotal += (item.premium + Number(spot.spot)) * Number(item.quantity);
      });
      let shippingCost = subtotal >= freeShipping ? 0 : 35;
      let total = shippingCost + subtotal;

      subtotal = subtotal.toFixed(2);
      total = total.toFixed(2);
      
      const showButton = this.checkBillingData() ? styles.show : '';
      const hideSubTitle = this.checkBillingData() ? styles.hide : '';
      return (
        <div className={styles.root}>
          {/* Summary */}  
          <h3 className={styles.title}>Summary:</h3>
          <div className={styles.row}>
            <div className={styles.label}>
              <i className="fas fa-shopping-basket"></i>
              <span>Items: </span>
            </div>
            <div className={styles.value}>
              <p>{items}</p>
            </div>       
          </div>  
          <div className={styles.row}>
            <div className={styles.label}>
              <i className="fas fa-tag"></i>
              <span>Sub Total: </span>
            </div>
            <div className={styles.value}>
              <p>
                {`$ ${subtotal}`}
              </p>
            </div>       
          </div>        
          <div className={styles.row}>
            <div className={styles.label}>
            <i className="fas fa-shipping-fast"></i>
              <span>Shipping: </span>
            </div>
            <div className={styles.value}>
              <p>$ {shippingCost}</p>
            </div>       
          </div>
          <div className={styles.row}>
            <div className={styles.label}>            
            <i className="fas fa-hand-holding-usd"></i>
              <span>Total: </span>
            </div>
            <div className={styles.value}>
              <p>
                {`$ ${total}`}
              </p>
            </div>       
          </div>       
          {/* Bill Form */} 
          <h3 className={styles.title}>Billing Data:</h3>
          {<h6 className={clsx(styles.subtitle, hideSubTitle)}>Fill all to enable order placement.</h6>}
          <div className={clsx(styles.rowForm, this.isFilled('name', check.name))}>
            <div className={styles.labelForm}>
              <i className="fas fa-user"></i>
              <span>Name: </span>
            </div>
            <div className={styles.valueForm}>
              <input type="name" name="name" 
              value={this.state.name}
              onChange={ (e)=>{
                this.formToState('name', e.target.value)
              }} required/>
            </div> 
          </div>
          <div className={clsx(styles.rowForm, this.isFilled('phone', check.phone))}>
            <div className={styles.labelForm}>
              <i className="fas fa-phone"></i>
              <span>Phone: </span>
            </div>
            <div className={styles.valueForm}>
              <input type="tel" name="phone" 
              value={this.state.phone}
              onChange={ (e)=>{
                this.formToState('phone', e.target.value)
              }} required/>
            </div> 
          </div>
          <div className={clsx(styles.rowForm, this.isFilled('email', check.email))}>
            <div className={styles.labelForm}>
              <i className="fas fa-at"></i>
              <span>Email: </span>
            </div>
            <div className={styles.valueForm}>
              <input type="email" name="email" 
              value={this.state.email}
              onChange={ (e)=>{
                this.formToState('email', e.target.value)
              }} required/>
            </div> 
          </div>         
          <div className={clsx(styles.rowForm, this.isFilled('address', check.address))}>
            <div className={styles.labelForm}>
              <i className="fas fa-home"></i>
              <span>Address: </span>
            </div>
            <div className={styles.valueForm}>
              <input type="text" name="address" 
              value={this.state.address}
              onChange={ (e)=>{
                this.formToState('address', e.target.value)
              }} required/>
            </div> 
          </div>
          <div className={clsx(styles.rowForm, this.isFilled('city', check.city))}>
            <div className={styles.labelForm}>
              <i className="fas fa-city"></i>
              <span>City: </span>
            </div>
            <div className={styles.valueForm}>
              <input type="text" name="city" 
              value={this.state.city}
              onChange={ (e)=>{
                this.formToState('city', e.target.value)
              }} required/>
            </div> 
          </div>
          <div className={clsx(styles.rowForm, this.isFilled('zip', check.zip))}>
            <div className={styles.labelForm}>
              <i className="fas fa-map-pin"></i>
              <span>Zip: </span>
            </div>
            <div className={styles.valueForm}>
              <input type="text" name="zip" 
              value={this.state.zip}
              onChange={ (e)=>{
                this.formToState('zip', e.target.value)
              }} required/>
            </div> 
          </div> 
          <div className={clsx(styles.rowForm, this.isFilled('country', check.country))}>
            <div className={styles.labelForm}>
              <i className="fas fa-flag"></i>
              <span>Country: </span>
            </div>
            <div className={styles.valueForm}>
              <input type="text" name="country" 
              value={this.state.country}
              onChange={ (e)=>{
                this.formToState('country', e.target.value)
              }} required/>
            </div> 
          </div> 
          <div className={clsx(styles.rowForm, this.isFilled('shipping', check.shipping))}>
            <div className={styles.labelForm}>
              <i className="fas fa-shipping-fast"></i>
              <span>Shipping: </span>
            </div>
            <div className={styles.valueForm}>
              <select name="shipping"              
              onChange={ (e)=>{
                this.formToState('shipping', e.target.value)
              }} required>
                <option value="">---</option>
                {shippings.map(item => {
                  if(this.state.shipping == item) return <option key={item} value={item} selected>{item}</option>;
                  return <option key={item} value={item}>{item}</option>
                  })}
              </select>
            </div>            
          </div>
          <div className={clsx(styles.rowForm, this.isFilled('payment', check.payment))}>
            <div className={styles.labelForm}>
              <i className="fas fa-money-bill-wave"></i>
              <span>Payment: </span>
            </div>
            <div className={styles.valueForm}>
              <select name="payment" 
              value={this.state.payment}
              onChange={ (e)=>{
                this.formToState('payment', e.target.value)
              }} required>
                <option value="">---</option>
                {payments.map(item => <option key={item} value={item}>{item}</option>)}
              </select>
            </div>            
          </div> 
          <button className={showButton} onClick={this.handleOrder}>Place Order <i className="fas fa-handshake"></i></button>
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
  billingData: getBillingData(state),
  request: getRequest(state), 
  orderConfirmation: getConfirmation(state),
});

const mapDispatchToProps = dispatch => ({
  fillBillingData: data => dispatch(fillBillingData(data)),
  orderRequest: data => dispatch(orderRequest(data)),
  clearCart: ()=> dispatch(clearCart()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

export {

  Container as CartSummary,

};
