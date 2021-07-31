import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductsOptions.module.scss';
import clsx from 'clsx';

/* Redux */

import { connect } from 'react-redux';
import { getFilters, searchCountry, searchMint, searchName, searchPremiumFrom, searchPremiumTo, searchYear } from '../../../redux/filtersRedux.js';

class Comp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchCountry: null, 
      searchMint: null, 
      searchName: null, 
      searchPremiumFrom: null, 
      searchPremiumTo: null, 
      searchYear: null, 
    }
    
    this.handleCountry = this.handleCountry.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleMint = this.handleMint.bind(this);
    this.handlePremiumFrom = this.handlePremiumFrom.bind(this);
    this.handlePremiumTo = this.handlePremiumTo.bind(this);
  }


  handleCountry(e){    
    const val = e.target.value;
    this.props.searchCountry(val);
    this.setState(()=>({
      searchCountry: val,
    }));
  }
  handleName(e){    
    const val = e.target.value;
    this.props.searchName(val);
    this.setState(()=>({
      searchName: val,
    }));
  }
  handleYear(e){    
    const val = e.target.value;
    this.props.searchYear(val);
    this.setState(()=>({
      searchYear: val,
    }));
  }
  handleMint(e){    
    const val = e.target.value;
    this.props.searchMint(val);
    this.setState(()=>({
      searchMint: val,
    }));
  }
  handlePremiumFrom(e){    
    const val = e.target.value;
    this.props.searchPremiumFrom(val);
    this.setState(()=>({
      searchPremiumFrom: val,
    }));
  }
  handlePremiumTo(e){    
    const val = e.target.value;
    this.props.searchPremiumTo(val);
    this.setState(()=>({
      searchPremiumTo: val,
    }));
  }
  
  render() {

    const searchCountryClass = this.state.searchCountry ? styles.active : '' ;
    const searchMintClass = this.state.searchMint ? styles.active : '' ;
    const searchNameClass = this.state.searchName ? styles.active : '' ;
    const searchPremiumFromClass = this.state.searchPremiumFrom ? styles.active : '' ;
    const searchPremiumToClass = this.state.searchPremiumTo ? styles.active : '' ;
    const searchYearClass = this.state.searchYear ? styles.active : '' ;

    return (
      <div className={styles.root}>
        <div className={clsx(styles.filterBox, searchCountryClass)}>
          <label className={styles.filterBox}>
            <i className="fas fa-flag"></i>        
          </label>
          <input type="text" className={styles.textInput} placeholder={'country..'}
          onChange={this.handleCountry}          
          />
        </div>
        <div className={clsx(styles.filterBox, searchNameClass)}>
          <label className={styles.filterBox}>
            <i className="far fa-grin-beam"></i>            
          </label>
          <input type="text" className={styles.textInput} placeholder={'name..'}
          onChange={this.handleName}
          />
        </div>
        <div className={clsx(styles.filterBox, searchYearClass)}>
          <label className={styles.filterBox}>
            <i className="fas fa-calendar-alt"></i>       
          </label>
          <input type="text" className={styles.textInput} placeholder={'year..'}
          onChange={this.handleYear}
          />
        </div>
        <div className={clsx(styles.filterBox, searchMintClass)}>
          <label className={styles.filterBox}>
            <i className="fas fa-industry"></i>      
          </label>
          <input type="text" className={styles.textInput} placeholder={'mint..'}
          onChange={this.handleMint}
          />
        </div>
        <div className={clsx(styles.filterBox, searchPremiumFromClass)}>
          <label className={styles.filterBox}>
            <i className="fas fa-sort-amount-up"></i> Premium from:
          </label>
          <input type="number" className={styles.textInput} step="0.01" 
          onChange={this.handlePremiumFrom}
          />
        </div>
        <div className={clsx(styles.filterBox, searchPremiumToClass)}>
          <label className={styles.filterBox}>
            <i className="fas fa-sort-amount-down"></i> Premium To:
          </label>
          <input type="number" className={styles.textInput} step="0.01" 
          onChange={this.handlePremiumTo}
          />
        </div>
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
  searchYear: arg => dispatch(searchYear(arg)),
  searchPremiumFrom: arg => dispatch(searchPremiumFrom(arg)), 
  searchPremiumTo: arg => dispatch(searchPremiumTo(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

export {
  // Component as ProductsOptions,
  Container as ProductsOptions,
  // Component as ProductsOptionsComponent,
};
