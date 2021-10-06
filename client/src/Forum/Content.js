import React from 'react';
import NewPost from './NewPost';
import PostContent from './PostContent';
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
                <PostContent
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
