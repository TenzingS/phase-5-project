import React from 'react';
import PostContainer from './PostContainer';

const PostContent = ({user, post, handleDelete}) => {

   
    return (
        <PostContainer 
            handleDelete={handleDelete} user={user} 
            post={post} />
    );
}

export default PostContent;