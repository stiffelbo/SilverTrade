import React from 'react';
import PropTypes from 'prop-types';

import styles from './Rates.module.scss';

const Component = (props) => {

  return (
    <div className={styles.root}>
      <div className={styles.rate}>
        <i class="fas fa-euro-sign"></i>
        <h4>25.78</h4>
      </div>
      <div className={styles.rate}>
        <i class="fas fa-dollar-sign"></i>
        <h4>26.98</h4>
      </div>
    </div>
  );
}

Component.propTypes = {  
  className: PropTypes.string,
};

export {
  Component as Rates,
};
