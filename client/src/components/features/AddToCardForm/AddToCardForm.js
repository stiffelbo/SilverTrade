import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './AddToCardForm.module.scss';

import clsx from 'clsx';

/* Components */


/* Redux */

import { connect } from 'react-redux';
import { getSpot } from '../../../redux/spotRedux.js';


class Comp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      display : false,
      class : styles.hide,
    };

  }

  render() {
    const {stock, price, prodID, spot} = this.props;
    const disabled = stock > 0 ? false : true;
    const disabledClass = disabled ? styles.disabled : styles.enabled;
    const onStock = disabled ? "Out of stock" : `${stock} pcs`;
    const bntIcon = disabled ? "fas fa-times" : "fas fa-check";
    const unitPrice = (Number(price) + Number(spot.spot)).toFixed(2);

    return (
      <div className={styles.root}>
        <div className={styles.row}>
          <div className={styles.label}>
            <i class="fas fa-warehouse"></i>
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
          <i class="fas fa-hand-holding-usd"></i>
            <span>Total: </span>
          </div>
          <div className={styles.value}>
            <p>{unitPrice} $</p>
          </div>       
        </div>
        <div className={styles.row}>
          <div className={styles.label}>
            <i class="fas fa-shopping-basket"></i>
            <span>Amount: </span>
          </div>
          <div className={styles.value}>
            <input type="number" step="1" min="0" max={stock} className={styles.input} required disabled={disabled} />
          </div>       
        </div>    
        <button className={clsx(disabledClass)} disabled={disabled}>Add To Cart <i className={bntIcon}></i></button> 
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
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps, null)(Comp);

export {
  // Component as AddToCardForm,
  Container as AddToCardForm,
  // Component as AddToCardFormComponent,
};
