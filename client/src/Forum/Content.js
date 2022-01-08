import React from 'react';
import NewPost from './NewPost';
import PostContainer from './PostContainer';

const Content = ({posts, handleDelete, user}) => {

    return (
        <div className='content'>
            {posts.map(post => (
                <PostContainer
                    key = {post.id}
                    post = {post} 
                    handleDelete={handleDelete}
                    user={user}
                    />
        ))}
        </div>
    );
}

export default Content;
