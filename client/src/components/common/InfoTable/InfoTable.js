import React from 'react';
import PropTypes from 'prop-types';

import styles from './InfoTable.module.scss';

const Component = ({data}) => {  

  return (
    <table className={styles.root}>
      <tbody>
        {data && data.map(item => <tr><td>{item.prop}</td><td>{item.val}</td></tr>)}  
      </tbody>
    </table>
  );
}

Component.propTypes = {  
  className: PropTypes.string,
  data: PropTypes.array,
};


export {
  Component as InfoTable,
};