import React from 'react';
//import PropTypes from 'prop-types';

/*  Components  */

import { Navbar } from '../Navbar/Navbar';

import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => (
  <div className={styles.root}>
    <Navbar />
    {children}

  </div>
);

export default MainLayout;
