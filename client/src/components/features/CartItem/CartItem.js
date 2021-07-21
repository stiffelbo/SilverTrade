import React from 'react';
import PropTypes from 'prop-types';

import Flipper from '../../common/Flipper/Flipper';
import { Link } from 'react-router-dom';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './CartItem.module.scss';

const Component = (props) => {

  const images = [
    "../coin_img/USA_2021_1oz_AmericanEagle_AW.jpg",
    "../coin_img/USA_2021_1oz_AmericanEagle_REW.jpg",
  ];

  return (
    <div className={styles.root}>
      <div className={styles.image}>
        <Flipper images={images} />
      </div>        
      
      <Link to={'/product/9997766'} className={styles.link} >
        <p>Product Name</p>
      </Link>
      <p className={styles.price}>667.43 <i className="fas fa-dollar-sign"></i></p>
      <div className={styles.quantity}>
        <input type="number" className={styles.quantity_input} />
      </div>          
      <div className={styles.delete}>
        <button className={styles.delete_btn}>
          <i className="fas fa-trash-alt"></i>
        </button>
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
  Component as CartItem,
  // Container as CartItem,
  // Component as CartItemComponent,
};
