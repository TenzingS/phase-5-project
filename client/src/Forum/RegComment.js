import React from 'react';

const RegComment = ({comment}) => {
    return (
        <div className='comment-box'>
            <div>{comment.comment}</div> 
            <p id='comment-name'>- {comment.name}</p>
        </div>
    );
}

export default RegComment;
