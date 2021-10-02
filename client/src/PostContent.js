import React from 'react';
import PostContainer from './PostContainer';

const PostContent = ({posts, selectPost, handleDelete, handleEdit, comments}) => {
   
    return (
        <div> 
        {posts.map(post => (
            <PostContainer 
                key = {post.id}
                post = {post}
                selectPost={selectPost} 
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                comments={comments}
                />
        ))}
        </div>
    );
}

export default PostContent;