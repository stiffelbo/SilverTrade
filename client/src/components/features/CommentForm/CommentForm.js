import React from 'react';
import PropTypes from 'prop-types';

import styles from './CommentForm.module.scss';

/* Components */


/* Redux */

import { connect } from 'react-redux';
import { getItemToComment } from '../../../redux/commentsRedux.js';



class Comp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId : '',
      itemDescription: '',      
    };
  }

  componentDidMount(){
    const itemToComment = this.props;
    this.setState( () => ({
      itemId : itemToComment.itemToComment.comments.itemId,
      itemDescription: itemToComment.itemToComment.comments.itemDescription,    
    })); 
  }

  componentDidUpdate(){
    const itemToComment = this.props;
   
    if(itemToComment.itemToComment.comments.itemId !== this.state.itemId){
      this.setState(()=>({
        itemId : itemToComment.itemToComment.comments.itemId,
        itemDescription: itemToComment.itemToComment.comments.itemDescription,
      }));
    }
  }

  render(){
    const itemToComment = this.props;
    if(itemToComment.itemToComment.comments && itemToComment.itemToComment.comments.itemId){
      return (
        <div className={styles.root}>
          <p>Comment on:  {itemToComment.itemToComment.comments.itemDescription}</p>
          <label className={styles.label}>Name:</label>
          <input type="text" name="name" className={styles.name} required/>
          <label className={styles.label}>Last Name:</label>
          <input type="text" name="lastName" className={styles.name} required/>
          <label className={styles.label}>Email:</label>
          <input type="email" name="email" className={styles.name} required/>
          <label className={styles.label}>Comment: </label>        
          <textarea name="comment" className={styles.comment} rows="6" required/>
          <button className={styles.submit}>Submit Comment</button>
        </div>
      )
    }else{
      return (
        <div className={styles.root}>

        </div>
      );
    }
    
  }
}

Comp.propTypes = {  
  className: PropTypes.string,
};

const mapStateToProps = state => ({
  itemToComment: getItemToComment(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps, null)(Comp);

export {
  // Comp as CommentForm,
  Container as CommentForm,
  // Component as CommentFormComponent,
};
