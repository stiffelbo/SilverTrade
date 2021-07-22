import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/* Components */

import { Rates } from '../../features/Rates/Rates';
import { Logo } from '../../common/Logo/Logo';
import { CartLogo } from '../../common/CartLogo/CartLogo';

import { connect } from 'react-redux';
import { getSpot, loadSpotRequest } from '../../../redux/spotRedux.js';

import styles from './Navbar.module.scss';

class Comp extends React.Component {

  componentDidMount() {
    const { loadSpot } = this.props;
    loadSpot();
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
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

export {
  //Component as Navbar,
  Container as Navbar,
  // Component as NavbarComponent,
};
