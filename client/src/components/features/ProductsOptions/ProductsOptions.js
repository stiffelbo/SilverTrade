import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductsOptions.module.scss';

/* Components */


/* Redux */

import { connect } from 'react-redux';
import { getFilters, searchCountry, searchMint, searchName, searchPremium, searchYear } from '../../../redux/filtersRedux.js';



class Comp extends React.Component {
  
  render() {
    return (
      <div className={styles.root}>

      </div>
    )
  }
}

Comp.propTypes = {  
  className: PropTypes.string,
  getFilters: PropTypes.object, 
  searchCountry: PropTypes.func, 
  earchMint: PropTypes.func, 
  searchName: PropTypes.func, 
  searchPremium: PropTypes.func, 
  searchYear: PropTypes.func,
};

const mapStateToProps = state => ({
  filters: getFilters(state),
});

const mapDispatchToProps = dispatch => ({
  searchCountry: arg => dispatch(searchCountry(arg)),
  searchMint: arg => dispatch(searchMint(arg)), 
  searchName: arg => dispatch(searchName(arg)),
  searchPremium: arg => dispatch(searchPremium(arg)), 
  searchYear: arg => dispatch(searchYear(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

export {
  // Component as ProductsOptions,
  Container as ProductsOptions,
  // Component as ProductsOptionsComponent,
};
