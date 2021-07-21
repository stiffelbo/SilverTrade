import React from 'react';
import PropTypes from 'prop-types';

import { InfoTable } from '../../common/InfoTable/InfoTable';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Product.module.scss';

const Component = (props) => {

  const data = [
    {
      prop: "Product ID",
      val: "57656jdj73738",
    },
    {
      prop: "Country",
      val: "USA",
    },
    {
      prop: "Year",
      val: "2019",
    },
    {
      prop: "Face Value",
      val: "1 Dollar",
    },
  ];

  return (
    <div className={styles.root}>
      
      <section className={styles.data}>
        <div className={styles.left}>
          <ul className={styles.info_list}>
            <li>
              <h5>Product ID:</h5>
              <p>84848030202948</p>
            </li>
            <li>
              <h5>Country:</h5>
              <p>USA</p>
            </li>
            <li>
              <h5>Year:</h5>
              <p>2019</p>
            </li>
            <li>
              <h5>Face Value:</h5>
              <p>1 dollar</p>
            </li>
          </ul>
          <ul className={styles.info_list}>
            <li>
              <h5>Mint:</h5>
              <p>US Mint</p>
            </li>
            <li>
              <h5>Alloy:</h5>
              <p>Silver</p>
            </li>
            <li>
              <h5>Purity:</h5>
              <p>.9999</p>
            </li>
            <li>
              <h5>Quality:</h5>
              <p>BU</p>
            </li>
          </ul>
        </div> 
        <div className={styles.right}>          
         <InfoTable data={data}/>
        </div>    
      </section>
      <section className={styles.images}>
        <div className={styles.image}>
          <img src="../coin_img/USA_2021_1oz_AmericanEagle_AW.jpg" alt="product"/>
        </div>
        <div className={styles.image}>
          <img src="../coin_img/USA_2021_1oz_AmericanEagle_REW.jpg" alt="product"/>
        </div>
      </section>
        
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
  Component as Product,
  // Container as Product,
  // Component as ProductComponent,
};
