import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';


const NewPost = ({user, setUser}) => {
    const [headerData, setHeaderData] = useState('')
    const [bodyData, setBodyData] = useState('')

    function handleHeader(e){
        setHeaderData(e.target.value)
      }
    
      function handleBody(e){
        setBodyData(e.target.value)
      }

      let history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        fetch('/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({header: headerData, body: bodyData, user_id: user.id})
        })
        history.push('/post')
    }

    function cancelPost(){
        history.push('/home')
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
        <div>
            <div className='view-wrapper'>
                <button className='viewing-user' onClick={toPortfolio}>{user.name}</button>
                <button className='logout' onClick = {logOut} >Log Out</button>
            </div>
            <br />
            <h1 className='nba-today'>NBA Today</h1>
            <button className='discussion' onClick = {goDiscussion} >Go to Discussion Board</button>
            <br />
            <div className='content' id='edit-post'>
            <h4>Create a new post {user.name}!</h4>
            <form className='newpostform' onSubmit={handleSubmit} >
            <textarea className='inputarea' placeholder="Put header here..." onChange={handleHeader} value={headerData} />
            <br/>
            <textarea className='inputarea' placeholder="Put body here..." onChange={handleBody} value={bodyData} />
            <div>
                <input type="submit" value="Post"/>
                <button onClick={cancelPost} >Cancel</button>
            </div>
        </form>
        </div>
        </div>
    );
}

export default NewPost;
