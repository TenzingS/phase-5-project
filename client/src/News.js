import React from 'react';

const News = ({news}) => {
    return (
        <div>
            {news.map(post => post.title)}
        </div>
    );
}

export default News;
