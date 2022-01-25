import React, { Fragment } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import RegComment from './RegComment';
import EditComment from './EditComment'

const Comment = ({comment, user, post}) => {
    const [edit, setEdit] = useState(null)
    const params = useParams();

    function handleDelete(comment){
        fetch(`/posts/${params.id}/comments/${comment.id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(window.location.reload(false))
    }

    const renderButtons = () => {
        if (comment.name === user.name){
            return <div className='buttons'>
                <button onClick= {() => setEdit(comment.id)} >Edit</button>
                <button onClick= {() => handleDelete(comment)} >Delete</button>
            </div>
           }
        }
    
    return (
        <Fragment>
        {edit === comment.id ? (
        <EditComment comment={comment} user={user} setEdit={setEdit} />
        ) : (
        <RegComment comment={comment} />
        )}
        {edit === comment.id? '' : renderButtons()}
        <br/>
        </Fragment>
    );
}

export default Comment;
