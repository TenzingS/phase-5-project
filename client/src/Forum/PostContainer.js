import React from 'react';
import { useHistory } from 'react-router';
import EditPost from './EditPost';
import Comment from './Comment';

const PostContainer = ({user, post, handleDelete, comments}) => {

    let history = useHistory();

    const withComments = () => {
        
        history.push('/showcomments')
    }

    function editPost(){
            <EditPost header={post.header} />
            history.push(`/editpost/${post.id}`)
    }

    const renderButtons = () => {
        if (post.user.id === user.id){
            return <div>
                <button onClick ={withComments} >Comment</button>
                <button onClick={editPost} >Edit post</button>
                <button onClick= {() => handleDelete(post)}>Delete Post</button>
            </div>
        } else {
            return <div><button onClick ={withComments} >Comment</button></div>
            }
        }

    return (
        <div className="post">
            <ul >
                <div>
                <h3>{post.header}</h3>
                <p>{post.body}</p>
                <br/>
                <ul>
                {comments.map((comment, index) => {
                    <Comment 
                        key={post.id || index}
                        comment={comment.comment} 
                        post={post} 
                        />
                        {console.log(comment.comment)}
                })}</ul>
                </div>
            </ul>
            {renderButtons()}
        </div>
    );
}

export default PostContainer;
