import React from 'react';
import PropTypes from 'prop-types';

import styles from './CoinCard.module.scss';

const Component = ({name, country}) => (
  <div className={styles.root}>
    <h2>{`${name} ${country}`}</h2>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  country: PropTypes.string,
  name: PropTypes.string,
};

export {
  Component as CoinCard,
  // Container as CoinCard,
  Component as CoinCardComponent,
};
