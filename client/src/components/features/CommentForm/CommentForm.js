import React from 'react';
import PropTypes from 'prop-types';

import styles from './CommentForm.module.scss';

/* Components */


/* Redux */

import { connect } from 'react-redux';
import { getItemToComment, setItemID, commentItemRequest } from '../../../redux/commentsRedux.js';



class Comp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemId : '',
      itemDescription: '',
      name: '',
      lastName: '',
      email: '',
      comment: '',      
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

  //jedna metoda na update state.

  handleClose(){
    const { setItemID } = this.props;
    setItemID({id: '', itemDescription: ''});
  }

  handleSubmitComment(){
    const { commentItemRequest, setItemID } = this.props;
    const {name, lastName, email, comment, itemId} = this.state;
    if(name && lastName && email && comment && itemId){
      commentItemRequest({
        name, lastName, email, comment, coinId : itemId 
      });
    }
    setItemID({id: '', itemDescription: ''});
  }

  render(){
    const itemToComment = this.props;
    if(this.state.itemId && this.state.itemDescription){
      return (
        <div className={styles.root}>
          <div className={styles.row}>
            <p>Comment on:  {itemToComment.itemToComment.comments.itemDescription}</p>
            <button className={styles.close} onClick={()=>{this.handleClose()}}>
              <i className="far fa-times-circle"></i>              
            </button>
          </div>
          <label className={styles.label}>Name:</label>
          <input type="text" name="name" className={styles.name} 
          onChange={ (e)=>{
            const name = e.target.value;
            this.setState( ()=> ({name}));
          }} required/>
          <label className={styles.label}>Last Name:</label>
          <input type="text" name="lastName" className={styles.name} 
          onChange={ (e)=>{
            const lastName = e.target.value;
            this.setState( ()=> ({lastName}));
          }}
          required/>
          <label className={styles.label}>Email:</label>
          <input type="email" name="email" className={styles.name} 
          onChange={ (e)=>{
            const email = e.target.value;
            this.setState( ()=> ({email}));
          }}
          required/>
          <label className={styles.label}>Comment: </label>        
          <textarea name="comment" className={styles.comment} rows="6" 
          onChange={ (e)=>{
            const comment = e.target.value;
            this.setState( ()=> ({comment}));
          }}
          required/>
          <button className={styles.submit} onClick={()=>{this.handleSubmitComment()}}>Submit Comment</button>
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

const mapDispatchToProps = dispatch => ({
  setItemID : (id) => dispatch(setItemID(id)),
  commentItemRequest : (data) => dispatch(commentItemRequest(data)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Comp);

export {
  // Comp as CommentForm,
  Container as CommentForm,
  // Component as CommentFormComponent,
};
