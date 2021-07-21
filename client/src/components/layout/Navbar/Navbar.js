import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Components */

import { Rates } from '../../features/Rates/Rates';
import { Logo } from '../../common/Logo/Logo';
import { CartLogo } from '../../common/CartLogo/CartLogo';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Navbar.module.scss';

const Component = ({click}) => {

  return (
    <nav className={styles.root}>
      <Logo />  
      <Rates className={styles.rates}/> 
      <ul>
        <li>
          <Link to="/cart" className={styles.cart_link}>
            <CartLogo />
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.cart_link}>
            <h2>Shop</h2>
          </Link>
        </li>
      </ul>
      <div className={styles.hamburger} onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
}

Component.propTypes = {  
  className: PropTypes.string,
  click: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Navbar,
  // Container as Navbar,
  // Component as NavbarComponent,
};
