import React from 'react';

const News = ({news}) => {
    return (
        <div>
            <h4>Latest NBA news:</h4>
            {news.map((post, pos) => (
                <li key={pos}>
                <a href={post.url} target="_blank" rel="noreferrer">
                    {post.title}
                </a>
                <hr/>
            </li>   
                )
            )}
        </div>
    );
}

export default News;