import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styles from './Flipper.module.scss';

export default class Flipper extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      display : true,
    };

  }

  flip = () => {
    this.setState(state => ({display : !state.display }));
  }

  render() {
    return (
      <div className={styles.root}>
        {this.state.display && <img src={this.props.images[0]} alt="Coin Image" onClick={this.flip} className={styles.root}/>}  
        {!this.state.display && <img src={this.props.images[1]} alt="Coin Image" onClick={this.flip} className={styles.root}/>}  
      </div>
    )
  }
}

Flipper.propTypes = {  
  images: PropTypes.array,
};



