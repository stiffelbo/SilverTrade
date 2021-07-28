import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Rates.module.scss';

const Component = ({spot}) => {

  const rateChange = spot.change == -1 ? styles.down : spot.change == 0 ? styles.flat : styles.up

  return (
    <div className={styles.root}>
      <div className={styles.rate}>        
        <h4>Silver Spot:</h4>
      </div>
      <div className={clsx(styles.rate, rateChange)}>
        <i className="fas fa-dollar-sign"></i>
        <h4>{spot.spot}</h4>
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
