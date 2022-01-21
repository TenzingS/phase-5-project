import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import EditComment from './EditComment'

const Comment = ({comment, user, post}) => {

    const params = useParams();

    function editedComment(comment){
        return <EditComment comment={comment} />
    }

    function handleDelete(comment){
        fetch(`/posts/${params.id}/comments/${comment.id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((r) => { 
        if (r.ok) {
        console.log('Item was deleted!')
    }})
    }

    const renderButtons = () => {
        if (comment.name === user.name){
            return <div className='buttons'>
                <button onClick= {() => editedComment(comment)} >Edit</button>
                <button onClick= {() => handleDelete(comment)} >Delete</button>
            </div>
           }
        }
    
    return (
        <div className='comment-div'>
            <div>{comment.comment}</div>
            {renderButtons()}
            <p id='comment-name'>- {comment.name}</p>
        </div>
    );
}

export default Comment;
