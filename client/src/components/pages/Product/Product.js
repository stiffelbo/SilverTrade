import React from 'react';
import PropTypes from 'prop-types';

import { removeUnderscore } from '../../../utils/removeUnderscore';

import { Alert, Progress } from 'reactstrap';

import Flipper from '../../common/Flipper/Flipper';
import { AddToCardForm } from '../../features/AddToCardForm/AddToCardForm';
import { InfoTable } from '../../common/InfoTable/InfoTable';

import { connect } from 'react-redux';
import { getProduct, getRequest, loadProductRequest } from '../../../redux/productRedux.js';

import styles from './Product.module.scss';

class Comp extends React.Component {

  componentDidMount() {
    const { loadProduct } = this.props;
    loadProduct(this.props.match.params.id);
  } 

  render() {

    const { product, request } = this.props;
    if(request.pending) return <Progress animated color="primary" value={50} />; 
    else if(request.error) return <Alert color="warning">{request.error}</Alert>;
    else if(!request.success || !product._id) return <Alert color="info">No Producs</Alert>;
    else if(request.success) {
      const data = [
        {
          prop: "Name",
          val: removeUnderscore(product.name),
        },
        {
          prop: "Country",
          val: removeUnderscore(product.country),
        },
        {
          prop: "Year",
          val: product.year,
        },
        {
          prop: "Face Value",
          val: product.faceValue,
        },
        {
          prop: "Metal",
          val: product.alloy,
        },
        {
          prop: "Purity",
          val: product.purity,
        },
        {
          prop: "Mint",
          val: product.mint,
        },
        {
          prop: "ID",
          val: product._id,
        },
        {
          prop: "Premium",
          val: `${product.premium.usd} $`,
        },
      ];
      return (
        <div className={styles.root}>
            <div className={styles.left}>
              <Flipper images={product.images} />                   
            </div> 
            <div className={styles.center}>          
             <InfoTable data={data}/>
            </div> 
            <div className={styles.right}>          
             <AddToCardForm price={product.premium.usd} stock={product.stock} prodID={product._id}/>
            </div>
        </div>
      );
    }

  }
  
}

Comp.propTypes = {  
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  product: getProduct(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadProduct: (id) => dispatch(loadProductRequest(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

export {
  // Component as Product,
  Container as Product,
  // Component as ProductComponent,
};
