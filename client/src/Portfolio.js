import React from 'react';
import { useHistory } from 'react-router-dom';

const Portfolio = ({user, setUser}) => {

    let history = useHistory();

    function withComments(post) {
        history.push(`/post/${post.id}`)
    }

    function toPost(comment) {
        history.push(`/post/${comment.post_id}`)
    }

    const listPosts = user.posts.map((post) => 
        <ul key={post.id}>
            <h4 onClick= {() => withComments(post)} className='post-header'>{post.header}</h4>
            {console.log(user)}
        </ul>
    )

    const listComments = user.comments.map((comment) => 
        <ul key={comment.id}>
            <a className='post-body' onClick={() => toPost(comment)} >{comment.comment} </a>
            <br/><br/>
        </ul>
    )

    function goDiscussion(){
        history.push('/home')
    }

    function statsPage() {
        history.push('/stats')
    }

    function logOut() {
        fetch('/logout', {
            method: 'DELETE' })
        .then(r => {
            if (r.ok) {
            setUser(null);
            }
        });
        history.push('/')
        }

    return (
        <div>
            <div>
            <button onClick = {goDiscussion} >Go to Discussion Board</button>
            <button onClick = {statsPage} >Search Player Stats</button>
            <button className='logout' onClick = {logOut} >Log Out</button>
            </div>
            <br/>
        <div className='content'>
            <br/>
            <h2>User Info</h2>
            <ul>
            <div className='post'>
            Name: {user.name}
            <br/><br/>
            Email: {user.email}
            <br/><hr/>
            Posts: {listPosts}
            <br/><hr/>
            Comments: <br/><br/>{listComments}
        </div>
        </ul>
        </div>
        </div>
    );
}

export default Portfolio;
