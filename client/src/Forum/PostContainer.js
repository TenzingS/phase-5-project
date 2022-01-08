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
<<<<<<< HEAD
                <div>
                <h3 >{post.header}</h3>
=======
                <div className='post1' onClick={withComments}>
                <h3>{post.header}</h3>
>>>>>>> nba-today
                <p>{post.body}</p>
                <br/>
                </div>
                {renderButtons()}
            </ul>
<<<<<<< HEAD
            <button onClick={gotoComments} >Comment</button>
            <button onClick={editPost} >Edit post</button>
            <button onClick= {() => handleDelete(post)}>Delete Post</button>
=======
            <hr/>
>>>>>>> nba-today
        </div>
    );
}

export default PostContainer;
