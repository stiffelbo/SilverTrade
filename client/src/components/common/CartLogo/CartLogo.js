import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartLogo.module.scss';

/* Components */


/* Redux */

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';



const Component = ({dark}) => {

  return (
    <div className={styles.root}>
      <i className="fas fa-shopping-cart"></i>
      <h2 className={styles.title}>Cart</h2>
      <span>73</span>      
    </div>
  );
}

Component.propTypes = {  
  dark: PropTypes.bool,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as CartLogo,
  // Container as CartLogo,
  // Component as CartLogoComponent,
};
