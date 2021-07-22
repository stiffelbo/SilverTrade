import React from 'react';
import PropTypes from 'prop-types';

import { ProductItem } from '../../features/ProductItem/ProductItem';
import { Alert, Progress } from 'reactstrap';


import { connect } from 'react-redux';
import { getProducts, getRequest, loadProductsRequest } from '../../../redux/productsRedux.js';

import styles from './Home.module.scss';


class Comp extends React.Component {

  componentDidMount() {
    const { loadProducts } = this.props;
    loadProducts();
  }

  render() {

    const { products, request } = this.props;
    console.log(products);
    if(request.pending) return <Progress animated color="primary" value={50} />; 
    else if(request.error) return <Alert color="warning">{request.error}</Alert>;
    else if(!request.success || !products.length) return <Alert color="info">No Producs</Alert>;
    else if(request.success) {
      return <div className={styles.root}><div className={styles.products}> {products.map(item => <ProductItem 
        key={item._id} 
        id={item._id}
        name={item.name}
        country={item.country}
        year={item.year}
        faceValue={item.faceValue}
        alloy={item.alloy}
        purity={item.purity}
        premium={item.premium}
        images={item.images}
        />)}</div></div>;

    } 
      
  }
}

Comp.propTypes = {  
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  products: getProducts(state),
  request: getRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

export {
  
  Container as Home,
 
};
