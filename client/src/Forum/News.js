import React from 'react';
import Newscontainer from './NewsContainer';

const News = ({news}) => {
    return (
        <div>
            <h4>Latest NBA news:</h4>
            {news.map(post => (
                <li>
                    <a href={post.url} target="_blank">
                        {post.title}
                    </a>
                    <br/>
                        {post.description}
                    <hr/>
                </li>   
                )
            )}
        </div>
    );
}

export default News;