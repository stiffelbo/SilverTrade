import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styles from './{{pascalCase name}}.module.scss';

/* Components */


/* Redux */

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

export class {{pascalCase name}} extends Component {

  constructor(props) {
    super(props);
    this.state = {
      a: '',     
    }

  }

  render() {
    return (
      <div className={styles.root}>
        
      </div>
    )
  }
}

{{pascalCase name}}.propTypes = {  
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)({{pascalCase name}});

export {
  {{pascalCase name}} as {{pascalCase name}},
  // Container as {{pascalCase name}},
};
