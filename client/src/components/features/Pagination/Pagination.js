import React from 'react';
import PropTypes from 'prop-types';

import styles from './Pagination.module.scss';
import clsx from 'clsx';

/* Redux */

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({itemsPerPage, totalItems, paginate, currentPage}) => {

    const numberOfPages = Math.floor(totalItems / itemsPerPage);
    const pageNumbers = [];
    for(let i=1; i<Math.ceil(totalItems / itemsPerPage); i++){
      pageNumbers.push(i);
    }
    return (
      <nav className={styles.root}>
          <ul className={styles.pagination}>
            <li key={`page-before`} className={styles.item} onClick={()=>{currentPage > 1 && paginate(currentPage - 1)}}>
              <i className="fas fa-chevron-left"></i>
            </li>
            {pageNumbers.map(item => {        
              if(item == currentPage){
                return (
                <li key={`page-${item}`} className={clsx(styles.item, styles.active)} onClick={()=>{paginate(item)}}>
                  {item}
                </li>);
              }else{
                return (
                  <li key={`page-${item}`} className={styles.item} onClick={()=>{paginate(item)}}>
                    {item}
                  </li>);
              }
            })}
            <li key={`page-after`} className={styles.item} onClick={()=>{currentPage < numberOfPages && paginate(currentPage + 1)}}>
              <i className="fas fa-chevron-right"></i>
            </li>
          </ul>
      </nav>
    );
}

Component.propTypes = {  
  className: PropTypes.string,
  itemsPerPage: PropTypes.number, 
  totalItems: PropTypes.number,  
  currentPage: PropTypes.number,
  paginate: PropTypes.func,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Pagination,
  // Container as Pagination,
  // Component as PaginationComponent,
};
