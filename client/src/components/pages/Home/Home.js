import React from 'react';
import PropTypes from 'prop-types';

import styles from './Home.module.scss';
import {homePageSlides} from '../../../config';

/* Components */
import { Slider } from '../../features/Slider/Slider';

/* Redux */

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';



const Component = (props) => {

  return (
    <div className={styles.root}>     
      <Slider slides={homePageSlides}/>    
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
  Component as Home,
  // Container as Home,
  // Component as HomeComponent,
};
