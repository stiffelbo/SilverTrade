import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

import styles from './Stacker.module.scss';

const Component = ({items}) => {
  const offset = 80/items.length;
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <h1>Add to Your stack our sale items:</h1>
      </div>
      <div className={styles.stack}>
        {items.map((item, index) => {
          const style = index === 0 ? {"left" : "0"} : {"left" : `${(index * offset).toFixed(1)}%`};
          return (
            <Link to={`/product/${item._id}`}>
              
                <img className={styles.card} src={`../coin_img/${item.images.av}`} style={style} title={item.id} />
          
            </Link>
          );
        })}    
      </div>
    </div>
  );
}

Component.propTypes = {  
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Stacker,
  // Container as Stacker,
  // Component as StackerComponent,
};
