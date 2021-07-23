import React from 'react';
import PropTypes from 'prop-types';

import Flipper from '../../common/Flipper/Flipper';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { removeFromCart, addToCart } from '../../../redux/cartRedux.js';

import styles from './CartItem.module.scss';

class Comp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity : 0,
      total: 0,      
    };
  }

  componentDidMount(){
    const {premium, quantity, spot} = this.props
    const unitPrice = (Number(premium) + Number(spot.spot)).toFixed(2);
    const total = (unitPrice*quantity).toFixed(2);
    if(this.state.total !== total || this.state.quantity !== quantity){
      this.setState( ()=> ({
        quantity: quantity,
        total: total,
      }));
    }
  }

  handleChange = (quantity, unitPrice, id) => {
    const {addToCart} = this.props
    
    if(quantity !== this.state.quantity && quantity > 0){
      this.setState( () => ({
        quantity : quantity,
        total : (quantity * unitPrice).toFixed(2),        
      }));      
      addToCart(id, quantity);
    }else{
      this.setState( () => ({
        quantity : 1,
        total : unitPrice,        
      }));
    }    
  }

  handleClickDelete = (id) => {
    const {removeFromCart} = this.props;
    removeFromCart(id);
  }

  render() {

    const {id, name, images, premium, stock, quantity, spot, faceValue, year, addToCart, removeFromCart} = this.props
    const unitPrice = (Number(premium) + Number(spot.spot)).toFixed(2);
    return (
      <div className={styles.root}>
        <div className={styles.image}>
          <Flipper images={images} />
        </div>        
        
        <Link to={`/product/${id}`} className={styles.link} title="go to product">
          <p>{`${name} ${year} ${faceValue}`}</p>
        </Link>
        <p className={styles.price} title="price for items">{this.state.total} $ <i className="fas fa-dollar-sign"></i></p>
        <div className={styles.quantity}>
          <input 
            type="number" 
            className={styles.quantity_input} 
            title="quantity"
            min="1"
            step="1"
            max={stock}
            defaultValue={quantity}
            onChange={(e) => {this.handleChange(e.target.value, unitPrice, id)}}
            />
        </div>          
        <div className={styles.delete}>
          <button 
            className={styles.delete_btn}
            onClick={(e) => {
              e.preventDefault();
              this.handleClickDelete(id)
            }}
          >
            <i className="fas fa-trash-alt"></i>
          </button>
        </div>        
      </div>
    );
  }
}

Comp.propTypes = {  
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

const mapDispatchToProps = dispatch => ({
  addToCart: (id, quantity) => dispatch(addToCart(id, quantity)),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
});

const Container = connect(null, mapDispatchToProps)(Comp);

export {
  
  Container as CartItem,

};
