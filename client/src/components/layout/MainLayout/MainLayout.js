import React from 'react';
import { useState } from 'react';
//import PropTypes from 'prop-types';

/*  Components  */

import { Navbar } from '../Navbar/Navbar';
import { Backdrop } from '../Backdrop/Backdrop';
import { Sidebar } from '../Sidebar/Sidebar';
import { Footer } from '../Footer/Footer';

import styles from './MainLayout.module.scss';

const MainLayout = ({ children }) => {
  const [sideToggle, setSideTogle] = useState(false);

  return (
    <div className={styles.root}>
      <Navbar click={()=> setSideTogle(true)}/>
      <Sidebar show={sideToggle} click={()=> setSideTogle(false)}/>
      <Backdrop show={sideToggle} click={()=> setSideTogle(false)}/>      
      {children}
      <Footer />
    </div>
  );
}



export default MainLayout;
