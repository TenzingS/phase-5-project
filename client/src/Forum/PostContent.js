import React from 'react';
import { useState, useEffect } from 'react';
import PostContainer from './PostContainer';

const PostContent = ({user, post, handleDelete}) => {

    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch(`/comments`)
        .then(res => res.json())
        .then(data => setComments(data))
        },[])
   
    return (
        <div> 
        <PostContainer 
            handleDelete={handleDelete} user={user} 
            post={post} comments={comments} />
        </div>
    );
}

export default PostContent;