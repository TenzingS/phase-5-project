import React from 'react';
import { useState, useEffect } from "react";
// import NewComment from './NewComment';

const Comments = ({user}) => {
    const [backendComments, setBackendComments] = []

    useEffect(() => {
        fetch('/comments')
        .then(res => res.json())
        .then(data => setBackendComments(data))
    }, [])

    console.log(backendComments)

    return (
        <div>
            
        </div>
    );
}
// const Comment = ({post, comment}) => {

//     let history = useHistory();

// console.log(post)
// console.log(comment)

//     function addComment(){
//             <NewComment />
//     }

//     function handleDelete(comment){
//         fetch(`/comments/${comment.id}`, 
//     {
//       method: 'DELETE',
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }).then((r) => { 
//         if (r.ok) {
//         console.log('Item was deleted!')
//     }})
//     }

//     function backtoHome(){
//         history.push('/home')
//     }

//     const renderComments = (comment) => {
//         if (comment.post.id === post.id ){
//             return <p> {comment.comment} </p>
//         }
//     }

//     return (
//         <div>
//             <button onClick={backtoHome} >Back to Home</button>
//             <ul>
//             <h3>{post.header}</h3>
//             <p>{post.body}</p>
//             <hr/>
//             <p>{renderComments()}</p>  
//             <br/>
//             </ul>
//             <button onClick={addComment}>Add a comment</button>
//             <button onClick= {() => handleDelete(comment)}>Delete Comment</button>
            
//         </div>
//     );
// }

export default Comments;
