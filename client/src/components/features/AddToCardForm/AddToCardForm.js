import React from 'react';
import PropTypes from 'prop-types';

import styles from './AddToCardForm.module.scss';

/* Components */


/* Redux */

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';



const Component = ({stock, price}) => {

  return (
    <div className={styles.root}>
      <div className={styles.row}>
        <div className={styles.label}>
          <i class="fas fa-warehouse"></i>
          <span>Stock: </span>
        </div>
        <div className={styles.value}>
          <p>{stock}</p>
        </div>   
  
      </div>
      <div className={styles.row}>
        <div className={styles.label}>
          <i className="fas fa-tag"></i>
          <span>Price: </span>
        </div>
        <div className={styles.value}>
          <p>{price}</p>
        </div>       
      </div>
      <div className={styles.row}>
        <div className={styles.label}>
          <i class="fas fa-shopping-basket"></i>
          <span>Amount: </span>
        </div>
        <div className={styles.value}>
          <input type="number" step="1" className={styles.input} required/>
        </div>       
      </div>    
      <button>Add To Card <i class="fas fa-check"></i></button> 
    </div>
  );
}

Component.propTypes = {  
  stock: PropTypes.number,
  price: PropTypes.number,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as AddToCardForm,
  // Container as AddToCardForm,
  // Component as AddToCardFormComponent,
};
