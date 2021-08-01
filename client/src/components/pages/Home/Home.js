import React from 'react';
import PropTypes from 'prop-types';

import styles from './Home.module.scss';
import {homePageSlides} from '../../../config';

/* Components */
import { Slider } from '../../features/Slider/Slider';
import { Stacker } from '../../features/Stacker/Stacker';
import { Brands } from '../../features/Brands/Brands';

/* Redux */

import { connect } from 'react-redux';
import { getSale, getRequest } from '../../../redux/productsRedux.js';


const Component = ({getSale, request}) => {

  return (
    <div className={styles.root}>     
      <Slider slides={homePageSlides}/>
      <Brands />
      {request.success && <Stacker items={getSale}/>}
    </div>
  );
}

Component.propTypes = {  
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  getSale: getSale(state),
  request: getRequest(state),
});


// const mapDispatchToProps = dispatch => ({
//   loadProducts: arg => dispatch(loadProductsRequest()),
// });

const Container = connect(mapStateToProps, null)(Component);

export {
  // Component as Home,
  Container as Home,
  // Component as HomeComponent,
};
