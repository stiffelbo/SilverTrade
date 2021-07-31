import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductsOptions.module.scss';

/* Components */


/* Redux */

import { connect } from 'react-redux';
import { getFilters, searchCountry, searchMint, searchName, searchPremiumFrom, searchPremiumTo, searchYear } from '../../../redux/filtersRedux.js';



class Comp extends React.Component {

  constructor(props) {
    super(props);
    
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
  }
  handleName(e){    
    const val = e.target.value;
    this.props.searchName(val);
  }
  handleYear(e){    
    const val = e.target.value;
    this.props.searchYear(val);
  }
  handleMint(e){    
    const val = e.target.value;
    this.props.searchMint(val);
  }
  handlePremiumFrom(e){    
    const val = e.target.value;
    this.props.searchPremiumFrom(val);
  }
  handlePremiumTo(e){    
    const val = e.target.value;
    this.props.searchPremiumTo(val);
  }
  
  render() {
    return (
      <div className={styles.root}>
        <div className={styles.filterBox}>
          <label className={styles.filterBox}>
            <i className="fas fa-flag"></i>        
          </label>
          <input type="text" className={styles.textInput} placeholder={'country..'}
          onChange={this.handleCountry}          
          />
        </div>
        <div className={styles.filterBox}>
          <label className={styles.filterBox}>
            <i className="far fa-grin-beam"></i>            
          </label>
          <input type="text" className={styles.textInput} placeholder={'name..'}
          onChange={this.handleName}
          />
        </div>
        <div className={styles.filterBox}>
          <label className={styles.filterBox}>
            <i className="fas fa-calendar-alt"></i>       
          </label>
          <input type="text" className={styles.textInput} placeholder={'year..'}
          onChange={this.handleYear}
          />
        </div>
        <div className={styles.filterBox}>
          <label className={styles.filterBox}>
            <i className="fas fa-industry"></i>      
          </label>
          <input type="text" className={styles.textInput} placeholder={'mint..'}
          onChange={this.handleMint}
          />
        </div>
        <div className={styles.filterBox}>
          <label className={styles.filterBox}>
            <i className="fas fa-sort-amount-up"></i> Premium from:
          </label>
          <input type="number" className={styles.textInput} step="0.01" 
          onChange={this.handlePremiumFrom}
          />
        </div>
        <div className={styles.filterBox}>
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
