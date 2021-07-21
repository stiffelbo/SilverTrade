import React from 'react';
import PropTypes from 'prop-types';

import Flipper from '../../common/Flipper/Flipper';
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

  const images = [
    "../coin_img/USA_2021_1oz_AmericanEagle_AW.jpg",
    "../coin_img/USA_2021_1oz_AmericanEagle_REW.jpg",
  ]

  return (
    <div className={styles.root}>
      
      <section className={styles.data}>
        <div className={styles.left}>
          <InfoTable data={data}/>                   
        </div> 
        <div className={styles.right}>          
         <InfoTable data={data}/>
        </div>    
      </section>
      <section className={styles.images}>
        <Flipper images={images} />
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
