import React from 'react';
import NewPost from './NewPost';
import PostContent from './PostContent';
import { useHistory } from 'react-router';

const Content = ({posts, setPosts, content, selectPost, handleDelete, handleEdit}) => {

    let history = useHistory();

    function createNew(){
        <div>
            <NewPost
            posts={posts} setPosts={setPosts} content={content} 
         />
            {history.push('/createpost')}
        </div>
    }

    return (
        <div>
            <button onClick = {createNew} >Create a new post</button>
            <PostContent 
                posts={posts} 
                selectPost={selectPost} handleDelete={handleDelete} handleEdit={handleEdit} />
        </div>
    );
}

export default Content;
