import React from 'react';
import PropTypes from 'prop-types';

import styles from './Brands.module.scss';
import { a } from 'react-router-dom';
/* Components */


/* Redux */

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';



const Component = (props) => {

  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h1>Best 1oz silver from:</h1>
      </div>
      <div className={styles.brands}>
        <ul>
          <li>
            <a href={'https://www.perthmint.com/'} target="_blank"><img src={'../logos/perthMint.png'} /></a>
          </li>
          <li>
            <a href={'https://www.royalmint.com/'} target="_blank"><img src={'../logos/royalMint.png'} /></a>
          </li>
          <li>
            <a href={'https://www.muenzeoesterreich.at/'} target="_blank"><img src={'../logos/austrianMint.png'} /></a>
          </li>
          <li>
            <a href={'https://germaniamint.com/'} target="_blank"><img src={'../logos/germaniaMint.png'} /></a>
          </li>
          <li>
            <a href={'https://www.scottsdalemint.com/'} target="_blank"><img src={'../logos/scottsdaleMint.jpg'} /></a>
          </li>
          <li>
            <a href={'https://www.geiger-edelmetalle.de/'} target="_blank"><img src={'../logos/geiger.png'} /></a>
          </li>
          <li>
            <a href={'https://www.komsco.com/eng/contents/104'} target="_blank"><img src={'../logos/komsco.png'} /></a>
          </li>
          <li>
            <a href={'https://hauptmuenzamt.bayern/en/'} target="_blank"><img src={'../logos/bavarianMint.jpg'} /></a>
          </li>
        </ul>
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
  Component as Brands,
  // Container as Brands,
  // Component as BrandsComponent,
};
