import React from 'react';
import PropTypes from 'prop-types';

import styles from './Rates.module.scss';

const Component = ({spot}) => {

  return (
    <div className={styles.root}>
      <div className={styles.rate}>        
        <h4>Silver Spot:</h4>
      </div>
      <div className={styles.rate}>
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
