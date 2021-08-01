import React from 'react';
import PropTypes from 'prop-types';

import { removeUnderscore } from '../../../utils/removeUnderscore';

import { ProductItem } from '../../features/ProductItem/ProductItem';
import { Pagination } from '../../features/Pagination/Pagination';
import { ProductsOptions } from '../../features/ProductsOptions/ProductsOptions';

import { Alert, Progress } from 'reactstrap';

import { connect } from 'react-redux';
import { getProducts, getFilteredProducts, getRequest, loadProductsRequest } from '../../../redux/productsRedux.js';
import { getRequest as orderRequest, orderClear } from '../../../redux/orderRedux.js';

import styles from './Shop.module.scss';

class Comp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      display : false,
      class : styles.hide,
      //pagination
      currentPage : 1,
    };
    this.paginate = this.paginate.bind(this);
  }

  componentDidMount() {
    const { loadProducts, orderRequest, orderClear } = this.props;
    loadProducts();
    if(orderRequest.success){
      orderClear();
    }
  }

  paginate(currentPage){
    this.setState(()=>({
      currentPage,
    }));
  }

  render() {    
    const { products, filteredProducts, request } = this.props;
    //pagination
    const itemsPerPage = 4;
    const indexTo = this.state.currentPage * itemsPerPage;
    const indexFrom = indexTo - itemsPerPage;

    if(request.pending) return <Progress animated color="primary" value={50} />; 
    else if(request.error) return <Alert color="warning">{request.error}</Alert>;
    else if(!request.success || !products.length) return <Alert color="info">No Products</Alert>;
    else if(request.success && filteredProducts.length) {
      return (
      <div className={styles.root}>
        <ProductsOptions />
        <Pagination totalItems={filteredProducts.length} itemsPerPage={itemsPerPage} paginate={this.paginate} currentPage={this.state.currentPage}/>  
        <div className={styles.products}>               
          {filteredProducts.slice(indexFrom, indexTo).map(item => <ProductItem 
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
          />)}
        </div>        
      </div>
      );
    }else{
      return (
        <div className={styles.root}>
          <ProductsOptions />
          <h3>Sorry no products found.</h3>      
          <h3>Please adjust filters</h3>      
        </div>);
    } 
      
  }
}

Comp.propTypes = {  
  className: PropTypes.string,
  products: PropTypes.array,
  request: PropTypes.object,
  orderRequest: PropTypes.object,
  loadProducts: PropTypes.func,  
  orderClear: PropTypes.func,
};

const mapStateToProps = state => ({
  products: getProducts(state),
  filteredProducts: getFilteredProducts(state),
  request: getRequest(state),
  orderRequest: orderRequest(state),
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
  orderClear: () => dispatch(orderClear()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

export {  
  Container as Shop, 
}