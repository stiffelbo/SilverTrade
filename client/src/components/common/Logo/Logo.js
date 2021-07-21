import React from 'react';
import PropTypes from 'prop-types';

import styles from './Logo.module.scss';

const Component = (props) => {

  return (
    <div className={styles.root}>
      <i className="fas fa-coins"></i>
      <h2 className={styles.title}>Silver Trader</h2>
    </div> 
  );
}

Component.propTypes = {  
  className: PropTypes.string,
};

export {
  Component as Logo,
};
