import React from 'react';

const PostList = ({ post, selectPost, setEdit }) => {
    return (
        <ul>
            <li onClick={() => {
                selectPost(post);
                setEdit(false)}} >
                <h2>{post.header}</h2>
                <p>{post.body}</p>
            </li>
        </ul>
    );
}

export default PostList;
