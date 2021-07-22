import React from 'react';
import PropTypes from 'prop-types';

import Flipper from '../../common/Flipper/Flipper';
import { AddToCardForm } from '../AddToCardForm/AddToCardForm';

import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './ProductItem.module.scss';

const Component = ({id, name, country, year, alloy, purity, premium, images }) => {
 
  return (
    <div className={styles.root}>
      <Flipper images={images} />
      <div className={styles.info}>
        <p className={styles.title}>{name}</p>
        <div className={styles.infoGrid}>
          <p>{country}</p>
          <p>{year}</p>
        </div>
        <div className={styles.infoGrid}>
          <p>{alloy}</p>
          <p>{purity}</p>
        </div>
        <div className={styles.priceGrid}>
          <p>Premium per piece: <b>{premium.usd} $</b></p>          
        </div>
      </div>
      <Link to={`/product/${id}`} className={styles.link}>Check Coin</Link>  
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
