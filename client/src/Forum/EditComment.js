import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';

const EditComment = ({comment}) => {
    const params = useParams();
    const [editComment, setEditComment] = useState('')

    function handleEditComment(e){
        setEditComment(e.target.value)
    }

    function handleSubmit(comment){
        fetch(`/posts/${params.id}/comments/${comment.id}`, 
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({comment: editComment})
    })
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea placeholder={comment.comment} onChange={handleEditComment} value={editComment} />
            <div>
                <input type="submit" value="Submit" />
                <button>Cancel</button>
            </div>
        </form>
    );
}

export default EditComment;
