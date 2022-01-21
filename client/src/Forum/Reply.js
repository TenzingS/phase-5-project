import React from 'react';
import { useParams } from 'react-router';
import { useHistory } from 'react-router';
import { useState } from 'react';
import { useEffect } from 'react';

const Reply = ({reply, user}) => {
    // const [reply, setReply] = useState('')

    // let history = useHistory();
    // const params = useParams();

    // function handleReply(e){
    //     setReply(e.target.value)
    // }

    // function handleSubmit(e){
    //     e.preventdefault();
    //     fetch('/comments', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(reply)
    //     })
    // }

    // function cancelReply(){
    //     history.push(`/post${post.id}`)
    // }

    return (
        <div>
            Replies
        </div>
    );
}

export default Reply;
