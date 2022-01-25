import React from 'react';
import { useHistory } from 'react-router';


const PostContainer = ({user, post, handleDelete}) => {

    let history = useHistory();

    function withComments(post) {
        history.push(`/post/${post.id}`)
    }

    function editPost(post){
        history.push(`/editpost/${post.id}`)
    }

    const renderButtons = () => {
        if (post.user.id === user.id){
            return <div className='buttons'>
                <button onClick={() => editPost(post)} >Edit</button>
                <button onClick= {() => handleDelete(post)}>Delete</button>
            </div>
            }
        }

    return (
        <div className="post">
            <ul >
                <div onClick={() => withComments(post)}>
                <h3 className='post-header'>{post.header}</h3>
                <p className='post-body'>{post.body}</p>
                <h5 id='comment-name'>- {post.user.name}</h5>
                </div>
                {renderButtons()}
            </ul>
            <hr/>
        </div>
    );
}

export default PostContainer;
