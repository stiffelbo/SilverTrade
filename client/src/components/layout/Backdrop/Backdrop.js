import React from 'react';
import PropTypes from 'prop-types';


import styles from './Backdrop.module.scss';

const Component = ({show, click}) => {

  return (
    show && <div className={styles.root} onClick={click}>      
    </div>
  );
}

Component.propTypes = {  
  show: PropTypes.bool,
  click: PropTypes.func,
};



export {
  Component as Backdrop,
};
