import React from 'react';
import { useHistory } from 'react-router';
import EditPost from './EditPost';
import Comment from './Comment';

const PostContainer = ({handleDelete, post}) => {

    let history = useHistory();

    function editPost(){
            <EditPost />
            history.push(`/editpost/${post.id}`)
    }

    function gotoComments(){
        history.push(`/post/${post.id}`)
    }

    return (
        <div>
            <ul >
                <div>
                <h3 >{post.header}</h3>
                <p>{post.body}</p>
                </div>
            </ul>
            <button onClick={gotoComments} >Comment</button>
            <button onClick={editPost} >Edit post</button>
            <button onClick= {() => handleDelete(post)}>Delete Post</button>
        </div>
    );
}

export default PostContainer;
