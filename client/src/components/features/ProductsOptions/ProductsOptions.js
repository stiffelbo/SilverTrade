import React from 'react';
import PropTypes from 'prop-types';

import styles from './ProductsOptions.module.scss';
import clsx from 'clsx';

import { removeUnderscore } from '../../../utils/removeUnderscore';

/* Redux */

import { connect } from 'react-redux';
import { getFilters, searchCountry, searchMint, searchName, searchPremiumFrom, searchPremiumTo, searchYear, setCurrentPage } from '../../../redux/filtersRedux.js';
import { getMints, getCountries } from '../../../redux/productsRedux.js';

class Comp extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      searchCountry: '', 
      searchMint: '', 
      searchName: '',
      searchPremiumFrom: null, 
      searchPremiumTo: null, 
      searchYear: '',
    }
    
    this.handleCountry = this.handleCountry.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleYear = this.handleYear.bind(this);
    this.handleMint = this.handleMint.bind(this);
    this.handlePremiumFrom = this.handlePremiumFrom.bind(this);
    this.handlePremiumTo = this.handlePremiumTo.bind(this);
  }

  componentDidMount(){
    this.setState(()=>({
      searchCountry: this.props.filters.countryPhrase, 
      searchMint: this.props.filters.mintPhrase, 
      searchName: this.props.filters.namePhrase, 
      searchPremiumFrom: this.props.filters.PremiumFrom, 
      searchPremiumTo: this.props.filters.PremiumTo, 
      searchYear: this.props.filters.yearPhrase, 
    }));
  }


  handleCountry(e){    
    const val = e.target.value;
    this.props.searchCountry(val);
    this.props.setCurrentPage(1);
    this.setState(()=>({
      searchCountry: val,
    }));
  }
  handleName(e){    
    const val = e.target.value;
    this.props.searchName(val);
    this.props.setCurrentPage(1);
    this.setState(()=>({
      searchName: val,
    }));
  }
  handleYear(e){    
    const val = e.target.value;
    this.props.searchYear(val);
    this.props.setCurrentPage(1);
    this.setState(()=>({
      searchYear: val,
    }));
  }
  handleMint(e){    
    const val = e.target.value;
    this.props.searchMint(val);
    this.props.setCurrentPage(1);
    this.setState(()=>({
      searchMint: val,
    }));
  }
  handlePremiumFrom(e){    
    const val = e.target.value;
    this.props.searchPremiumFrom(val);
    this.props.setCurrentPage(1);
    this.setState(()=>({
      searchPremiumFrom: val,
    }));
  }
  handlePremiumTo(e){    
    const val = e.target.value;
    this.props.searchPremiumTo(val);
    this.props.setCurrentPage(1);
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
          <label>
            <i className="fas fa-flag"></i>        
          </label>
          {/*<input type="text" className={styles.textInput} placeholder={'country..'}
          onChange={this.handleCountry}          
          />*/}
          <select className={styles.select} onChange={this.handleCountry} value={this.state.searchCountry}>
            <option key="country_null" value="">country..</option>
            {this.props.countries.map(item => <option key={item} value={item} >{removeUnderscore(item)}</option>)}
          </select>          
        </div>
        <div className={clsx(styles.filterBox, searchMintClass)}>
          <label>
            <i className="fas fa-industry"></i>      
          </label>
          {/* <input type="text" className={styles.textInput} placeholder={'mint..'}
          onChange={this.handleMint}
          />*/}
          <select className={styles.select} onChange={this.handleMint} value={this.state.searchMint}>
            <option key="mint_null" value="">mint..</option>
            {this.props.mints.map(item => <option key={item} value={item} >{removeUnderscore(item)}</option>)}
          </select>          
        </div>
        <div className={clsx(styles.filterBox, searchNameClass)}>
          <label>
            <i className="far fa-grin-beam"></i>            
          </label>
          <input type="text" className={styles.textInput} placeholder={'name..'} value={this.state.searchName}
          onChange={this.handleName}
          />
        </div>
        <div className={clsx(styles.filterBox, searchYearClass)}>
          <label>
            <i className="fas fa-calendar-alt"></i>       
          </label>
          <input type="text" className={styles.textInput} placeholder={'year..'} value={this.state.searchYear}
          onChange={this.handleYear}
          />
        </div>        
        <div className={clsx(styles.filterBox, searchPremiumFromClass)}>
          <label>
            <i className="fas fa-sort-amount-up"></i>
          </label>
          <input type="number" className={styles.textInput} step="0.1" min="0" placeholder={'Premium from:'} value={this.state.PremiumFrom}
          onChange={this.handlePremiumFrom}
          />
        </div>
        <div className={clsx(styles.filterBox, searchPremiumToClass)}>
          <label>
            <i className="fas fa-sort-amount-down"></i>
          </label>
          <input type="number" className={styles.textInput} step="0.1" min="0" placeholder={'Premium to:'} value={this.state.PremiumTo}
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
  mints: getMints(state),
  countries: getCountries(state),
});

const mapDispatchToProps = dispatch => ({
  searchCountry: arg => dispatch(searchCountry(arg)),
  searchMint: arg => dispatch(searchMint(arg)), 
  searchName: arg => dispatch(searchName(arg)),
  searchYear: arg => dispatch(searchYear(arg)),
  searchPremiumFrom: arg => dispatch(searchPremiumFrom(arg)), 
  searchPremiumTo: arg => dispatch(searchPremiumTo(arg)),
  setCurrentPage: arg => dispatch(setCurrentPage(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

export {
  // Component as ProductsOptions,
  Container as ProductsOptions,
  // Component as ProductsOptionsComponent,
};
