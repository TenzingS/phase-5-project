import React from 'react';
// import EditPost from './EditPost';
// import { useHistory } from 'react-router';
import { useState } from 'react';

const PostContainer = ({post, selectPost, handleDelete, handleEdit}) => {

    const [editHeader, setEditHeader] = useState('')
    const [editBody, setEditBody] = useState('')

    function handleEditHeader(e){
        setEditHeader(e.target.value)
      }
    
      function handleEditBody(e){
        setEditBody(e.target.value)
      }


    function handleEdits(e){
        e.preventDefault();
        fetch(`/posts/${post.id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({
                header: editHeader,
                body: editBody
            })
        })
        .then(r => r.json())
        .then(edits => handleEdit(edits))
    }


    return (
        <div>
            <ul onClick={() => selectPost(post)} >
                <h3>{post.header}</h3>
                <p>{post.body}</p>
            </ul>

            <form className="note-editor" onSubmit={handleEdits} >
                <input placeholder="Put header here..." onChange={handleEditHeader} value={editHeader} />
                <textarea placeholder="Put body here..." onChange={handleEditBody} value={editBody} />
                <div className="button-row">
                    <input className="button" type="submit" value="Submit edit" />
                </div>
            </form>


            <button>Edit post</button>
            <button onClick= {() => handleDelete(post)}>Delete</button>
        </div>
    );
}

export default PostContainer;
