import React from 'react';
import PropTypes from 'prop-types';

import Flipper from '../../common/Flipper/Flipper';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { removeFromCart, addToCart, addComment } from '../../../redux/cartRedux.js';
import { setItemID } from '../../../redux/commentsRedux.js';
import { getSpot } from '../../../redux/spotRedux.js';
import {removeUnderscore} from '../../../utils/removeUnderscore';

import styles from './CartItem.module.scss';

class Comp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quantity : 0,
      comment: '',      
    };

    this.handleQtyChange = this.handleQtyChange.bind(this);
    this.handleAddComment = this.handleAddComment.bind(this);
    this.handleClickDelete = this.handleClickDelete.bind(this);
  }

  componentDidMount(){
    const {quantity, comment, stock, premium, spot} = this.props
    const unitPrice = (Number(premium) + Number(spot.spot)).toFixed(2); 
    const total = (unitPrice * quantity).toFixed(2);
    if(this.state.quantity !== quantity){
      const qty = quantity <= stock ? quantity : stock;
      this.setState( ()=> ({
        quantity: qty,
        comment: comment ? comment : '',
        total,
      }));
    }    
  }

  handleQtyChange = (e) => {
    const {addToCart, stock, premium, spot, id} = this.props
    const quantity = e.target.value;
    const unitPrice = (Number(premium) + Number(spot.spot)).toFixed(2);  
    const total = (unitPrice * quantity).toFixed(2);
    if(quantity <= stock){
      this.setState(()=>({
        quantity,        
        total,
      }));
      addToCart(id, quantity);
    }   
  }

  handleClickDelete = () => {
    const {removeFromCart, setItemID, id} = this.props;
    removeFromCart(id);
    setItemID({id: '', itemDescription: ''});
  }

  handleAddComment = (e) => {
    const comment = e.target.value;
    const data = {
      coinId: this.props.id,
      comment,
    };

    this.setState(()=>({
      comment,
    }));
    this.props.addComment(data);
  }

  render() {

    const {id, name, images, premium, stock, quantity, spot, faceValue, year} = this.props
    const unitPrice = (Number(premium) + Number(spot.spot)).toFixed(2);   
    const total = (unitPrice*quantity).toFixed(2); 
    return (
      <div className={styles.root}>
        <div className={styles.image}>
          <Flipper images={images} />
        </div>        
        
        <Link to={`/product/${id}`} className={styles.link} title="go to product">
          <p>{`${removeUnderscore(name)} ${year} ${faceValue}`}</p>
        </Link>
        <p className={styles.price} title="price for items">$ {total}</p>
        <div className={styles.quantity} title="number of items">
          Pcs.
          <input 
            type="number" 
            className={styles.quantity_input} 
            title="quantity"
            min="1"
            step="1"
            max={stock}           
            value={this.state.quantity}
            onChange={this.handleQtyChange}
            />
        </div>  
        <div className={styles.comment}>
          <textarea 
            className={styles.comment_input} 
            name="comment" rows="6" 
            placeholder="add comment..." 
            defaultValue={this.state.comment} 
            onKeyUp={this.handleAddComment}
          />
        </div>        
        <div className={styles.delete}>
          <button 
            className={styles.delete_btn}
            onClick={
              this.handleClickDelete
            }
            title="remove item"
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

const mapStateToProps = state => ({
  spot: getSpot(state),
});

const mapDispatchToProps = dispatch => ({
  addToCart: (id, quantity) => dispatch(addToCart(id, quantity)),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
  setItemID : (id) => dispatch(setItemID(id)),
  addComment : (data) => dispatch(addComment(data)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

export {
  
  Container as CartItem,

};
