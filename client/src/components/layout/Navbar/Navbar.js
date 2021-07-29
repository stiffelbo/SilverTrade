import React from 'react';
import PropTypes from 'prop-types';
import styles from './Navbar.module.scss';

/* React Components */

import { Link } from 'react-router-dom';

/* Components */

import { Rates } from '../../features/Rates/Rates';
import { Logo } from '../../common/Logo/Logo';
import { CartLogo } from '../../common/CartLogo/CartLogo';

/* Redux */

import { connect } from 'react-redux';
import { getSpot, loadSpotRequest } from '../../../redux/spotRedux.js';
import { checkCart } from '../../../redux/cartRedux.js';

/* Config */
import { spotUpdateTimeOut } from '../../../config';

class Comp extends React.Component { 

  componentDidMount() {
    const { loadSpot, checkCart } = this.props;
    loadSpot();    
    checkCart();
    setInterval(loadSpot, spotUpdateTimeOut);
  }
  
  render() {

    const { spot, click } = this.props;
    return (
      <nav className={styles.root}>
        <Logo />  
        <Rates className={styles.rates} spot={spot}/> 
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
}

Comp.propTypes = {  
  className: PropTypes.string,
  click: PropTypes.func,
};

const mapStateToProps = state => ({
  spot: getSpot(state),
});

const mapDispatchToProps = dispatch => ({
  loadSpot: () => dispatch(loadSpotRequest()),
  checkCart: () => dispatch(checkCart()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

export {
  //Component as Navbar,
  Container as Navbar,
  // Component as NavbarComponent,
};
