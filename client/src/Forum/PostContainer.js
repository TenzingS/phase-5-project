import React from 'react';
import { useHistory } from 'react-router';
import EditPost from './EditPost';
import Comment from './Comment';

const PostContainer = ({post, handleDelete, comments}) => {

    let history = useHistory();

    function withComments(){
        comments.map(comment => {
            <Comment comment={comment} header={post.header} body={post.body} key={post.id}/>
        })
        history.push('/showcomments')
    }

    function editPost(){
            <EditPost />
            history.push(`/editpost/${post.id}`)
    }


    return (
        <div>
            <ul >
                <div onClick={withComments} >
                <h3>{post.header}</h3>
                <p>{post.body}</p>
                </div>
            </ul>
            <button onClick={editPost} >Edit post</button>
            <button onClick= {() => handleDelete(post)}>Delete Post</button>
        </div>
    );
}

export default PostContainer;
