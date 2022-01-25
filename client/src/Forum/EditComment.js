import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const EditComment = ({comment, user, setEdit}) => {
    const params = useParams();
    const [editComment, setEditComment] = useState(comment.comment)

    function handleEditComment(e){
        setEditComment(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault();
        const editCommentData = {name: user.name, comment: editComment, user_id: user.id}
        fetch(`/posts/${params.id}/comments/${comment.id}`, 
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(editCommentData)
    })
    .then(r => r.json())
    .then(window.location.reload(false))
    .catch((err) => console.log('error'))
    }

    const cancelEdit = () => {
        setEdit(null)
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea className='inputarea' onChange={handleEditComment} value={editComment} />
            <div>
                <input type="submit" value="Submit" />
                <button onClick={cancelEdit}>Cancel</button>
            </div>
        </form>
    );
}

export default EditComment;
