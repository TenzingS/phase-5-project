import React from 'react';
import { useHistory } from 'react-router';
import EditPost from './EditPost';
import Comments from './Comments';

const PostContainer = ({user, post, handleDelete}) => {

    let history = useHistory();

    const withComments = () => {
        
        history.push('/showcomments')
    }

    function editPost(post){
        <EditPost post={post}/> 
        && history.push(`/editpost/${post.id}`)
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
                <div className='post1' onClick={withComments}>
                <h3>{post.header}</h3>
                <p>{post.body}</p>
                <br/>
                </div>
                {renderButtons()}
            </ul>
            <hr/>
        </div>
    );
}

export default PostContainer;
