import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useParams } from 'react-router';

const EditPost = ({user, setUser}) => {

    let history = useHistory();
    const params = useParams();

    const [oldHeader, setOldHeader] = useState('')
    const [oldBody, setOldBody] = useState('')
    const [editHeader, setEditHeader] = useState('')
    const [editBody, setEditBody] = useState('')

    useEffect(() => {
        fetch(`/posts/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setOldHeader(data.header)
            setOldBody(data.body)
        })
    }, [] )

    function handleEditHeader(e){
        setEditHeader(e.target.value)
      }
    
      function handleEditBody(e){
        setEditBody(e.target.value)
      }


    function handleEdits(e){
        e.preventDefault();
        if (!editHeader){
        fetch(`/posts/${params.id}`,
        {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({body: editBody, user_id: user.id, name: user.name})
        })
        .then((r) => r.json())
        .then(updatedData => {
                setOldBody(updatedData.body)
        })}
        if (!editBody){
            fetch(`/posts/${params.id}`,
        {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({header: editHeader, user_id: user.id, name: user.name})
        })
        .then((r) => r.json())
        .then(updatedData => {
                setOldHeader(updatedData.header)
        })
        }
        else {
            fetch(`/posts/${params.id}`,
        {
            method: 'PATCH',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({header: editHeader, body: editBody, user_id: user.id, name: user.name})
        })
        .then((r) => r.json())
        .then(updatedData => {
            if (updatedData.header || updatedData.body) {
                setOldHeader(updatedData.header)
                setOldBody(updatedData.body)
            }
        })
        }
        history.push(`/post/${params.id}`)
    }

    function cancelPost(){
        history.push(`/post/${params.id}`)
    }
 
    function toPortfolio() {
        history.push('/me')
    }

    function logOut() {
        fetch('/logout', {
            method: 'DELETE' })
        .then(r => {
            if (r.ok) {
            setUser(null);
            }
        });
        history.push('/')
        }

    function goDiscussion(){
        history.push('/home')
    }

    return (
        <div className='body'>
            <div className='view-wrapper'>
                <button className='viewing-user' onClick={toPortfolio}>{user.name}</button>
                <button className='logout' onClick = {logOut} >Log Out</button>
            </div>
            <br />
            <h1 className='nba-today'>NBA Today</h1>
            <button onClick = {goDiscussion} >Go to Discussion Board</button>
            <br/>
            <div className='content'>
                <form className='edit-post' onSubmit={handleEdits} >
                    <h2>Edit your post:</h2>
                    <h3>{oldHeader}</h3>
                    <textarea 
                        className='inputarea'
                        placeholder="Edit header here..." 
                        onChange={handleEditHeader} 
                        value={editHeader} />
                        <br/>
                    <h3>{oldBody}</h3>
                    <textarea 
                        className='inputarea'
                        placeholder="Edit body here..." 
                        onChange={handleEditBody} 
                        value={editBody} />
                    <div>
                        <button className="button" type="submit">Submit edit</button>
                        <button onClick={cancelPost} >Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditPost;
