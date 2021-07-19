import React from 'react';
import PropTypes from 'prop-types';
//components
import { CoinCard } from '../CoinCard/CoinCard';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Coins.module.scss';

const Component = ({ coins }) => (
  <section>
    {coins.map(coin => <CoinCard key={coin.id} {...coin}/>)}
  </section>
)

Component.propTypes = {
  coins: PropTypes.array,
};

export {
  Component as Coins,
  // Container as Coins,
  //Component as CoinsComponent,
};
