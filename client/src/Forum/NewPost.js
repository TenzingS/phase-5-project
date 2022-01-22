import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';


const NewPost = ({user}) => {
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
        // const newpost = {header: headerData, body: bodyData};
        fetch('/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({header: headerData, body: bodyData, user_id: user.id})
        })
        history.push('/home')
    }

    function cancelPost(){
        history.push('/home')
    }
    
    return (
        <div className='edit-post'>
            <h4>Create a new post {user.name}!</h4>
            <form onSubmit={handleSubmit} >
            <input className='inputarea' placeholder="Put header here..." onChange={handleHeader} value={headerData} />
            <br/>
            <textarea className='inputarea' placeholder="Put body here..." onChange={handleBody} value={bodyData} />
            <div>
                <input type="submit" value="Post"/>
                <button onClick={cancelPost} >Cancel</button>
            </div>
        </form>
        </div>
    );
}

export default NewPost;
