import React from 'react';
import EditPost from './EditPost';
import { useHistory } from 'react-router';
import Comment from './Comment';

const PostContainer = ({post, selectPost, handleDelete, handleEdit, comments}) => {

    let history = useHistory();

    function withComments(){
        <div>
            {comments.map(comment => {
                    <Comment 
                        key={comment.id}
                        comment={comment}
                        post_id={post.id}
                        post={post} />
            })
            }
            {history.push('/withcomments')}
        </div>
    }

    function editPost(){
        <div>
            <EditPost post={post} handleEdit={handleEdit} />
            {history.push(`/editpost/${post.id}`)}
        </div>
    }


    return (
        <div>
            <ul onClick={() => selectPost(post)} >
                <div onClick={withComments} >
                <h3>{post.header}</h3>
                <p>{post.body}</p>
                </div>
            </ul>
            <button onClick={editPost} >Edit post</button>
            <button onClick= {() => handleDelete(post)}>Delete</button>
        </div>
    );
}

export default PostContainer;
