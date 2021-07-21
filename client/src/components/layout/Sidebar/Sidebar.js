import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { CartLogo } from '../../common/CartLogo/CartLogo';

import clsx from 'clsx';

import styles from './Sidebar.module.scss';

const Component = ({show, click}) => {

  const display = show ? styles.show : styles.hide;

  return (
    <div className={clsx(display, styles.root)}>
      <ul>
        <li>
          <Link to="/cart" className={styles.cart_link} onClick={click}>
            <CartLogo />
          </Link>
        </li>
        <li>
          <Link to="/" className={styles.cart_link} onClick={click}>
            <h2>Shop</h2>
          </Link>
        </li>
      </ul>
  
    </div>
  );
}

Component.propTypes = {  
  show: PropTypes.bool,
  click: PropTypes.func,
};



export {
  Component as Sidebar,
};
