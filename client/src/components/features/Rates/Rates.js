import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import styles from './Rates.module.scss';

import { connect } from 'react-redux';
import { getSpot } from '../../../redux/spotRedux.js';

const Component = ({spot}) => {

  const rateChange = spot.change == -1 ? styles.down : spot.change == 0 ? styles.flat : styles.up

  return (
    <div className={styles.root}>
      <div className={styles.rate}>        
        <h4>Silver Spot:</h4>
      </div>
      <div className={clsx(styles.rate, rateChange)}>        
        <h4>$ / oz {spot.spot}</h4>
      </div>
    </div>
  );
}

Component.propTypes = {  
  className: PropTypes.string,
  click: PropTypes.func,
};

const mapStateToProps = state => ({
  spot: getSpot(state),
});

const Container = connect(mapStateToProps, null)(Component);

export {
  //Component as Navbar,
  Container as Rates,
  // Component as NavbarComponent,
};
