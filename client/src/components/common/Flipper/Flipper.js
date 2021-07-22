import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styles from './Flipper.module.scss';

import clsx from 'clsx';

export default class Flipper extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      display : false,
      class : styles.hide,
    };

  }

  flip = () => {
    this.setState(state => ({display : !state.display }));
    this.setState(state => {
      if(state.display){
        return {class : styles.show};
      }else{
        return {class : styles.hide};
      }
    });
  }

  render() {
    const { images }  = this.props;
    return (
      <div className={styles.root} onClick={this.flip}>
       <div className={styles.av}>
         <img src={images[0]} alt="Coin obverse" />
       </div>
       <div className={clsx(this.state.class, styles.rev)}>
         <img src={images[1]} alt="Coin reverse" />
       </div>
      </div>
    )
  }
}

Flipper.propTypes = {  
  images: PropTypes.array,
};



