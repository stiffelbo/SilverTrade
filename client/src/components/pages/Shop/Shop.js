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
import { getRwdMode } from '../../../redux/configRedux.js';
import { getCurrentPage, setCurrentPage } from '../../../redux/filtersRedux.js';

import { cartsInMode } from '../../../config';

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
    const { request, loadProducts, orderRequest, orderClear, currentPage } = this.props;
    if(!request.success){
      loadProducts();
    }    
    if(orderRequest.success){
      orderClear();
    }
    this.setState(()=>({
      currentPage: currentPage,
    }));
  }

  componentDidUpdate(){
    if(this.state.currentPage !== this.props.currentPage){
      this.setState(()=>({
        currentPage: this.props.currentPage,
      }));
    }
  }

  paginate(currentPage){
    this.setState(()=>({
      currentPage,
    }));
    this.props.setCurrentPage(currentPage);
  }

  render() {    
    const { products, filteredProducts, request, rwdMode } = this.props;
    //pagination
    const itemsPerPage = cartsInMode[rwdMode];
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
  rwdMode: getRwdMode(state),
  currentPage: getCurrentPage(state), 
});

const mapDispatchToProps = dispatch => ({
  loadProducts: () => dispatch(loadProductsRequest()),
  orderClear: () => dispatch(orderClear()),
  setCurrentPage: (arg) => dispatch(setCurrentPage(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

export {  
  Container as Shop, 
}