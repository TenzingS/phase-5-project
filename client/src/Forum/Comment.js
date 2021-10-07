import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router';
import Mycomment from './MyComment';
import NewComment from './NewComment';
import Reply from './Reply';

const Comment = ({user}) => {
    const [comments, setComments] = useState([])
    const rootComments = comments.filter(
        (c) => c.parent_id === null)

    const getReplies = (commentId) => {
        comments.filter((c) => c.parent_id === commentId).sort((a,b) => 
            new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
    }

    useEffect(() => {
        fetch(`/comments`)
        .then(res => res.json())
        .then(data => setComments(data))
        },[])

    let history = useHistory();

    const addComment = (text, parent_id) => {
        
    }


    // function handleDelete(comment){
    //     fetch(`/comments/${comment.id}`, 
    // {
    //   method: 'DELETE',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // }).then((r) => { 
    //     if (r.ok) {
    //     console.log('Item was deleted!')
    // }})
    // }

    // function replyComment(){
    //     <Reply comment={comment} post={post} />
    // }

    return (
        <div className="comments">
            <h3>Comments</h3>
            <div className="comment-form-title">Write Comment</div>
            <NewComment submitLabel='Write' handleSubmit={addComment} />
            <div>
                {rootComments.map((rootComment) => (
                    <Mycomment 
                        key={rootComment.id} 
                        comment={rootComment} 
                        replies={getReplies(rootComment.id)} />
                ))}
                </div>
            <hr/>
            {/* <button onClick={addComment}>Add a comment</button>
            <ul>
            <button onClick= {replyComment}>Reply</button>
            <button onClick= {() => handleDelete()}>Delete Comment</button>
            <br/>

            </ul>
             */}
        </div>
    );
}

export default Comment;
