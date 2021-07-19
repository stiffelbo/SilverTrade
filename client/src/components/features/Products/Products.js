import React from 'react';
import PropTypes from 'prop-types';
//Components
import { Coins } from '../Coins/Coins';

import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCoins, getRequest, loadCoinsRequest } from '../../../redux/coinsRedux.js';

import styles from './Products.module.scss';

class Component extends React.Component {
  
  componentDidMount() {
    const { loadCoins } = this.props;
    loadCoins();
  }

  render() {

    const { request, coins } = this.props;

    if(request.pending) return <h1>Pending</h1>; 
    else if(request.error) return <h1>Error</h1>;
    else if(!request.success || !coins.length) return <h1>No Coins</h1>;
    else if(request.success){ 
      return (
        <>
          <h1>Coins: </h1>
          <Coins coins={coins}/>
        </>
      )    
    }
  }
}


Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  coins: PropTypes.array,
};

const mapStateToProps = state => ({
  coins: getCoins(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadCoins : () => dispatch(loadCoinsRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Coin,
  Container as Products,
  //Component as CoinComponent,
};
