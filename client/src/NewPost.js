import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';


const NewPost = ({user }) => {
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
        const newpost = {header: headerData, body: bodyData};
        fetch('/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newpost)
        })
        history.push('/home')
    }

    
    return (
        <div>
            <h4>Create a new post {user.name}!</h4>
            <form className="note-editor" onSubmit={handleSubmit} >
            <input placeholder="Put header here..." onChange={handleHeader} value={headerData} />
            <textarea placeholder="Put body here..." onChange={handleBody} value={bodyData} />
            <div className="button-row">
                <input className="button" type="submit" value="Save" />
            </div>
        </form>
        </div>
    );
}

export default NewPost;
