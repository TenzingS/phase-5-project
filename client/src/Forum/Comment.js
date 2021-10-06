import React from 'react';
import { useHistory } from 'react-router';
import NewComment from './NewComment';

const Comment = ({comment, header, body, key}) => {

    let history = useHistory();


    function addComment(){
            <NewComment />
            history.push('/newcomment')
    }

    function handleDelete(comment){
        fetch(`/comments/${comment.id}`, 
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

    return (
        <div>
            <ul>
            <h3>{header}</h3>
            <p>{body}</p>
            <hr/>
            <p>{comment}</p>  
            <br/>
            </ul>
            <button onClick={addComment}>Add a comment</button>
            <button onClick= {() => handleDelete(comment)}>Delete Comment</button>
            
        </div>
    );
}

export default Comment;
