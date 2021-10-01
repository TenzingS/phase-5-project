import React from 'react';
import PostContainer from './PostContainer';

const PostContent = ({posts, selectPost, handleDelete, handleEdit}) => {
   

    console.log(posts)
    return (
        <div> 
        {posts.map(post => (
            <PostContainer 
                key = {post.id}
                post = {post}
                selectPost={selectPost} 
                handleDelete={handleDelete}
                handleEdit={handleEdit}
                />
        ))}
        </div>
    );
}

export default PostContent;