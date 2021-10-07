import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router';

const Newcomment = ({handleSubmit, submitLabel}) => {
    const [text, setText] = useState("")

    const isTextareaDisabled = text.length === 0;
    
    const onSubmit = e => {
        e.preventDefault()
        handleSubmit(text)
        setText('')
    }


    // function handleNewComment(e){
    //     setNewComment(e.target.value) 
    // }

    // let history = useHistory();

    // function handleSubmit(e){
    //     e.preventDefault();
    //     fetch('/comments', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(newComment)
    //     })
    //     history.push('/home')
    // }

    // function cancelComment(){
    //     history.push(`/post/${post.id}`)
    // }

    return (
        <div>
            <label>Add a new comment:</label>
            <form onSubmit={onSubmit} >
                <textarea 
                    placeholder="Put comment here..." 
                    value={text}
                    onChange={(e) => setText(e.target.value)} />
                <div>
                    <button disabled={isTextareaDisabled} >{submitLabel}</button>
                </div>
            </form>
        </div>
    );
}

export default Newcomment;
