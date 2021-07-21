import React from 'react';
import PropTypes from 'prop-types';

import styles from './CartSummary.module.scss';

/* Components */


/* Redux */

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';



const Component = (props) => {

  const price = 9987;
  return (
    <div className={styles.root}>      
      <div className={styles.row}>
        <div className={styles.label}>
          <i className="fas fa-tag"></i>
          <span>Total: </span>
        </div>
        <div className={styles.value}>
          <p>
            {price}
            <i className="fas fa-dollar-sign"></i>
          </p>
        </div>       
      </div>
      <div className={styles.row}>
        <div className={styles.label}>
          <i class="fas fa-shopping-basket"></i>
          <span>Items: </span>
        </div>
        <div className={styles.value}>
          <p>67</p>
        </div>       
      </div>    
      <button>Checkout <i className="fas fa-wallet"></i></button> 
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
  Component as CartSummary,
  // Container as CartSummary,
  // Component as CartSummaryComponent,
};
