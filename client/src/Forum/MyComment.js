import React from 'react';

const Mycomment = ({comment, replies}) => {
    return (
        <div className="comment">
            <div>
                {comment.user.name}
            </div>
            <div>
                {comment.created_at}
            </div>
            <div>{comment.comment}</div>
            {replies.length > 0 && (
                <div>{replies.map((reply) => (
                    <Mycomment comment={reply} key={reply.id} replies={[]} />
                ))}
                </div>
            )}
            </div>
    );
}

export default Mycomment;
