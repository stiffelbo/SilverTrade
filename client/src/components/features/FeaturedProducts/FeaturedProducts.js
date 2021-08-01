import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeaturedProducts.module.scss';
import { removeUnderscore } from '../../../utils/removeUnderscore';
import { featuresInMode } from '../../../config';

/* Components */
import { ProductItem } from '../../features/ProductItem/ProductItem';

/* Redux */

import { connect } from 'react-redux';
import { getProducts } from '../../../redux/productsRedux.js';
import { getSpot } from '../../../redux/spotRedux.js';
import { getRwdMode } from '../../../redux/configRedux.js';

const Component = ({products, feature, prodID, spot, rwdMode}) => {
  console.log(rwdMode, featuresInMode[rwdMode]);
  const filteredProducts = products.filter( prod => prod[feature.prop] === feature.val && prod._id !== prodID);
  const itemsToDisplay = featuresInMode[rwdMode];

  if(filteredProducts){
    return (
      <div className={styles.root}>
        <h2>Other products from: {removeUnderscore(feature.val)}</h2>
        <div className={styles.products}>
          {filteredProducts.slice(0,itemsToDisplay).map( item => (<ProductItem 
            key={item._id} 
            id={item._id}
            name={removeUnderscore(item.name)}
            country={removeUnderscore(item.country)}
            year={item.year}
            faceValue={item.faceValue}
            alloy={item.alloy}
            purity={item.purity}
            premium={item.premium}
            images={item.images}
            spot={spot.spot}
            />))}
        </div> 
      </div>
    );
  }else{
    return null;
  }
}

Component.propTypes = {  
  products: PropTypes.array,
  feature: PropTypes.object,
  prodID: PropTypes.string,
  spot: PropTypes.object,
  rwdMode: PropTypes.string,
};

const mapStateToProps = state => ({
  products: getProducts(state),
  spot: getSpot(state),
  rwdMode: getRwdMode(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps, null)(Component);

export { 
  Container as FeaturedProducts,
};
