import React from 'react';

const Comment = ({user, comment, post, post_id}) => {

    function showComments(){
        if (comment.post_id == post_id){
           return <p>{comment.comment}</p>
        } else {
            return <p>No comments yet!</p>
        }
    }

    return (
        <div>
            <ul>
            <h3>{post.header}</h3>
            <p>{post.body}</p>
            <hr/>
            <button onClick={showComments}>Show Comments</button>
            {user.name}
            </ul>
            
        </div>
    );
}

export default Comment;
