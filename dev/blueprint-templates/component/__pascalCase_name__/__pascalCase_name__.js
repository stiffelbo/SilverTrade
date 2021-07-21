import React from 'react';
import PropTypes from 'prop-types';

import styles from './{{pascalCase name}}.module.scss';

/* Components */


/* Redux */

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';



const Component = (props) => {

  return (
    <div className={styles.root}>
      <h2>{{pascalCase name}}</h2>    
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
  Component as {{pascalCase name}},
  // Container as {{pascalCase name}},
  // Component as {{pascalCase name}}Component,
};
