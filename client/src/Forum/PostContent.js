import React from 'react';
// import { useState, useEffect } from 'react';
// import PostContainer from './PostContainer';

const PostContent = ({user, post, handleDelete}) => {

    // const [comments, setComments] = useState([])

    // useEffect(() => {
    //     let isMounted = true;
    //     fetch(`/comments`).then((r) => {
    //         if (r.ok) {
    //             r.json().then((data) => {
    //                 if(isMounted) setComments(data);
    //             });
    //           return () => {isMounted = false}};
    //         });
    //       }, []);
   
    return (
        <div> 
        <PostContainer 
            handleDelete={handleDelete} user={user} 
            post={post} />
        </div>
    );
}

export default PostContent;