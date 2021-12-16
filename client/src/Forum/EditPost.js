import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';

const EditPost = ({post}) => {

    console.log(post)

    let history = useHistory();
    const params = useParams();

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
        
        console.log(params)
        fetch(`/posts/${params.id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({header: editHeader, body: editBody})
        })
        .then(r => {
             if (r.ok){
                history.push('/home')}
    })}

    function cancelPost(){
        history.push('/home')
    }


    return (
        <div>
            <form onSubmit={handleEdits} >
                <label>Edit post:</label>
                <h3>{post}</h3>
                <textarea 
                    placeholder={"Edit header here..." }
                    onChange={handleEditHeader} 
                    value={editHeader} />
                    <br/>
                <h3>{post}</h3>
                <textarea 
                    placeholder="Edit body here..." 
                    onChange={handleEditBody} 
                    value={editBody} />
                <div>
                    <button className="button" type="submit">Submit edit</button>
                    <button onClick={cancelPost} >Cancel</button>
                </div>
            </form>
        </div>
    );
}

export default EditPost;
