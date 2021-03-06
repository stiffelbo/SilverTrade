import React from 'react';
import PropTypes from 'prop-types';

import Flipper from '../../common/Flipper/Flipper';

import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getSpot } from '../../../redux/spotRedux.js';

import styles from './ProductItem.module.scss';

const Component = ({id, name, country, year, alloy, purity, premium, images, spot }) => {
  
  const unitPrice = (Number(premium.usd) + Number(spot.spot)).toFixed(2);

  return (
    <div className={styles.root}>
      <div className={styles.images}>
        <Flipper images={images} />
      </div>      
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
          <p className={styles.premium}>Premium per piece: <b>$ {premium.usd}</b></p>          
        </div>
        <div className={styles.priceGrid}>
          <p className={styles.unitPrice}>Price per piece: <b>$ {unitPrice}</b></p>          
        </div>
      </div>
      <Link to={`/product/${id}`} className={styles.link}>Get Coin</Link>  
    </div>
  );
}

Component.propTypes = {  
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  spot: getSpot(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps, null)(Component);

export {
  // Component as ProductItem,
  Container as ProductItem,
  // Component as ProductItemComponent,
};
