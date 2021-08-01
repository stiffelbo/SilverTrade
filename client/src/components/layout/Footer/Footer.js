import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
/* Components */


/* Redux */

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';



const Component = (props) => {

  return (
    <div className={styles.root}>
      <div className={styles.socials}>
        <p>Feel free to join us on:</p>
        <ul className={styles.socials_list}>
          <li>
            <Link to={'/'}>
              <i className="fab fa-facebook"></i>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <i className="fab fa-twitter"></i>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <i className="fab fa-instagram"></i>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <i className="fab fa-github"></i>
            </Link>
          </li>
          <li>
            <Link to={'/'}>
              <i className="fab fa-linkedin"></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.links}>        
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
  Component as Footer,
  // Container as Footer,
  // Component as FooterComponent,
};
