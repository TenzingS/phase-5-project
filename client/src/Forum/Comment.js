import React from 'react';
import { useHistory } from 'react-router';
import NewComment from './NewComment';

const Comment = (props) => {

    let history = useHistory();

console.log(props.header)
console.log(props.comment)

    function addComment(){
            <NewComment />
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

    function backtoHome(){
        history.push('/home')
    }

    // const renderComments = () => {
    //     if (comment.post.id === post.id )
    // }

    return (
        <div>
            <button onClick={backtoHome} >Back to Home</button>
            {/* <ul>
            <h3>{header}</h3>
            <p>{body}</p>
            <hr/>
            <p>{renderComments()}</p>  
            <br/>
            </ul> */}
            <button onClick={addComment}>Add a comment</button>
            {/* <button onClick= {() => handleDelete(comment)}>Delete Comment</button> */}
            
        </div>
    );
}

export default Comment;
