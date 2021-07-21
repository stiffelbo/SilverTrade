import React from 'react';
import PropTypes from 'prop-types';

import Flipper from '../../common/Flipper/Flipper';
import { AddToCardForm } from '../../features/AddToCardForm/AddToCardForm';
import { InfoTable } from '../../common/InfoTable/InfoTable';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Product.module.scss';

const Component = (props) => {

  const data = [
    {
      prop: "Name",
      val: "American Eagle",
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
      prop: "Metal",
      val: "Silver",
    },
    {
      prop: "Purity",
      val: "999",
    },
    {
      prop: "Quality",
      val: "BU",
    },
    {
      prop: "Mint",
      val: "US Mint",
    },
    {
      prop: "Product ID",
      val: "57656jdj73738",
    },
  ];

  const images = [
    "../coin_img/USA_2021_1oz_AmericanEagle_AW.jpg",
    "../coin_img/USA_2021_1oz_AmericanEagle_REW.jpg",
  ];

  return (
    <div className={styles.root}>
        <div className={styles.left}>
          <Flipper images={images} />                   
        </div> 
        <div className={styles.center}>          
         <InfoTable data={data}/>
        </div> 
        <div className={styles.right}>          
         <AddToCardForm price={5,666} stock={70} />
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
  Component as Product,
  // Container as Product,
  // Component as ProductComponent,
};
