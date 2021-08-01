import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styles from './Slider.module.scss';
import clsx from 'clsx';

export class Slider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 0,     
    }
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  }

  componentDidMount(){
    const {slides} = this.props;
    const changeCurrent = () => {
      if(this.state.current !== slides.length -1){
        this.setState(()=>({
          current: this.state.current +1,
        }));
      }else{
        this.setState(()=>({
          current: 0,
        }));
      }
      

    }
   

    setInterval(changeCurrent, 5000);
  }

  handleLeft(){
    const {slides} = this.props;
    if(this.state.current === 0){
      this.setState(()=>({
        current: slides.length -1,
      }));
    }else{
      this.setState(()=>({
        current: this.state.current -1,
      }));
    }
  }

  handleRight(){
    const {slides} = this.props;
    if(this.state.current === slides.length -1){
      this.setState(()=>({
        current: 0,
      }));
    }else{
      this.setState(()=>({
        current: this.state.current +1,
      }));
    }
  }

  render() {
    const {slides} = this.props;
    return (
      <div className={styles.root}>
        <button className={styles.left} onClick={this.handleLeft}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className={styles.right} onClick={this.handleRight}>
          <i className="fas fa-chevron-right">
          </i>
        </button>

        {slides.map((item, index)=> {
          return (
            <div key={`slide-${index}`} className={index === this.state.current ? clsx(styles.slide, styles.active) : styles.slide}>
              {index === this.state.current && <img src={item.image} alt={item.alt} /> }
              {index === this.state.current && item.title && <h1 className={styles.title}>{item.title}</h1> }
              {index === this.state.current && item.subtitle && <h3 className={styles.subtitle}>{item.subtitle}</h3> }
            </div>
          );  
        })}
      </div>
    )
  }
}

Slider.propTypes = {  
  className: PropTypes.string,
  slides: PropTypes.array,
};

