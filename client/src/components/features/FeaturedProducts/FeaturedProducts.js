import React, { Component } from 'react'
import PropTypes from 'prop-types';

import styles from './FeaturedProducts.module.scss';
import { removeUnderscore } from '../../../utils/removeUnderscore';
import { featuresInMode } from '../../../config';

/* Components */
import { ProductItem } from '../../features/ProductItem/ProductItem';

/* Redux */

import { connect } from 'react-redux';
import { getProducts } from '../../../redux/productsRedux.js';
import { getSpot } from '../../../redux/spotRedux.js';
import { getRwdMode } from '../../../redux/configRedux.js';

class FeaturedProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      from: 0,
      to: 0,
      items: 0,
      display: 0,     
    }
    this.handleLeft = this.handleLeft.bind(this);
    this.handleRight = this.handleRight.bind(this);
  }

  componentDidMount(){
    const {products, feature, prodID, rwdMode } = this.props;
    const items = products.filter( prod => prod[feature.prop] === feature.val && prod._id !== prodID).length;
    const display = featuresInMode[rwdMode];
    this.setState(()=>({
      items: items,
      to: display,
      display: display,
    }));

    const scrollLeft = ()=>{
      if((this.state.items > this.state.display) && (this.state.from > 0)){
        this.setState(()=>({
          from: this.state.from -1,
          to: this.state.to -1,
        }));
      }else{
        this.setState(()=>({
          from: this.state.items - this.state.display,
          to: this.state.items,
        }));
      } 
    };

    setInterval(scrollLeft, 8000);
  }

  componentDidUpdate(){
    const { rwdMode } = this.props;
    const display = featuresInMode[rwdMode];
    if(display !== this.state.display){
      this.setState(()=>({  
        display: display,
        to: this.state.from + display,
      }));
    }
    
  }

  handleLeft(){
    if((this.state.items > this.state.display) && (this.state.from > 0)){
      this.setState(()=>({
        from: this.state.from -1,
        to: this.state.to -1,
      }));
    }else{
      this.setState(()=>({
        from: this.state.items - this.state.display,
        to: this.state.items,
      }));
    } 
  }

  handleRight(){
    if((this.state.items > this.state.display) && (this.state.to < this.state.items)){
      this.setState(()=>({
        from: this.state.from +1,
        to: this.state.to +1,
      }));
    }else{
      this.setState(()=>({
        from: 0,
        to: this.state.display,
      }));
    }  
  }

  render(){
    const {products, feature, prodID, spot, header} = this.props;
    
    const filteredProducts = products.filter( prod => prod[feature.prop] === feature.val && prod._id !== prodID);

    if(filteredProducts.length){
      return (
        <div className={styles.root}>
          <h2>{header}</h2>
          <div className={styles.products}>
            {this.state.items > this.state.display && <div className={styles.button} >
              <i className="fas fa-chevron-left" onClick={this.handleLeft}/>
            </div>}
            {filteredProducts.slice(this.state.from,this.state.to).map( item => (<ProductItem 
              key={item._id} 
              id={item._id}
              name={removeUnderscore(item.name)}
              country={removeUnderscore(item.country)}
              year={item.year}
              faceValue={item.faceValue}
              alloy={item.alloy}
              purity={item.purity}
              premium={item.premium}
              images={item.images}
              spot={spot.spot}
              />))}
              {this.state.items > this.state.display &&<div className={styles.button} >
                <i className="fas fa-chevron-right" onClick={this.handleRight}/>
              </div>}
          </div> 
        </div>
      );
    }else{
      return null;
    }
  }
}

Component.propTypes = {  
  products: PropTypes.array,
  feature: PropTypes.object.isRequired,
  prodID: PropTypes.string,
  spot: PropTypes.object.isRequired,
  rwdMode: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  products: getProducts(state),
  spot: getSpot(state),
  rwdMode: getRwdMode(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps, null)(FeaturedProducts);

export { 
  Container as FeaturedProducts,
};
