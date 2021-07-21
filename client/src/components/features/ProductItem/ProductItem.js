import React from 'react';
import PropTypes from 'prop-types';

import Flipper from '../../common/Flipper/Flipper';
import { AddToCardForm } from '../AddToCardForm/AddToCardForm';

import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductItem.module.scss';

const Component = (props) => {
  const images = [
    "../coin_img/USA_2021_1oz_AmericanEagle_AW.jpg",
    "../coin_img/USA_2021_1oz_AmericanEagle_REW.jpg",
  ];

  return (
    <div className={styles.root}>
      <Flipper images={images} />
      <div className={styles.info}>
        <p className={styles.title}>American Eagle</p>
        <div className={styles.infoGrid}>
          <p> USA</p>
          <p> 2019</p>
        </div>
        <div className={styles.infoGrid}>
          <p> Silver</p>
          <p> 999</p>
        </div>
        <div className={styles.priceGrid}>
          <p><i class="fas fa-dollar-sign"></i> 5.98</p> 
          <p><i class="fas fa-euro-sign"></i> 5.98</p>  
        </div>
      </div>
      <Link to={`/product/${89990}`} className={styles.link}>Check Coin</Link>
      <div className={styles.form}>
        <AddToCardForm stock={90} price={5.98}  /> 
      </div>
        
    </div>
  );
}

Component.propTypes = {  
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as ProductItem,
  // Container as ProductItem,
  // Component as ProductItemComponent,
};
