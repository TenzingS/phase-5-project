import React from 'react';
import NewPost from './NewPost';
import PostContainer from './PostContainer';
import { useHistory } from 'react-router';

const Content = ({posts, handleDelete, user}) => {

    let history = useHistory();

    function createNew(){
        <div>
            <NewPost />
            {history.push('/createpost')}
        </div>
    }

    return (
        <div>
            <button onClick = {createNew} >Create a new post</button>
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
