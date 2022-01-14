import React from 'react';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { useParams } from 'react-router'

const Comments = ({user}) => {

    let history = useHistory();
    const params = useParams(); 
    console.log(params);

    const [post, setPost] = useState([])

    useEffect(() => {
        fetch(`/posts/${params.id}`)
        .then(res => res.json())
        .then(data => setPost(data))
    }, [])

    function editPost(post){
        history.push(`/editpost/${post.id}`)
    }

    function handleDelete(post){
        fetch(`/posts/${post.id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((r) => { 
        if (r.ok) {
        console.log('Item was deleted!')
        history.push('/home')
    }})
    }

    const renderButtons = () => {
        console.log(post)
        if (post.id === user.id){
            return <div className='buttons'>
                <button onClick={() => editPost(post)} >Edit</button>
                <button onClick= {() => handleDelete(post)}>Delete</button>
            </div>
           }
        }

    return (
        <div className="content">
            <ul>
                <h3 className='post-header'>{post.header}</h3>
                <p className='post-body'>{post.body}</p>
                {renderButtons()}
                <br/>
                {/* {post.comments.map(comment => (comment.comment))} */}
            </ul>
        </div>

    );
}

export default Comments;
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

