import React from 'react';

const Newscontainer = (post, key) => {
    return (
        <div>
            <ul>
                <h2>{post.title}</h2>
                <p>{post.description}</p>
            </ul>
        </div>
    );
}

export default Newscontainer;
