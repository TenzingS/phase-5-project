import React, { Fragment } from 'react';
import { useState, useEffect } from "react";
import { useHistory } from 'react-router';
import { useParams } from 'react-router'
import Comment from './Comment';
import NewComment from './NewComment';

const Comments = ({setUser, user}) => {

    let history = useHistory();
    const params = useParams(); 

    const [post, setPost] = useState([]);

    useEffect(() => {
        fetch(`/posts/${params.id}`)
        .then(res => res.json())
        .then(data => {
            setPost(data)
        })
    }, [])

    function editPost(post){
        history.push(`/editpost/${post.id}`)
    }

    function handleDelete(post){
        fetch(`/posts/${post.id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((r) => { 
        if (r.ok) {
        console.log('Item was deleted!')
        history.push('/home')
    }})
    }

    const renderButtons = () => {
        if(post.user){
            if (post.user.id == user.id){
                return <div className='buttons'>
                    <button onClick={() => editPost(post)} >Edit</button>
                    <button onClick= {() => handleDelete(post)}>Delete</button>
                </div>
            }
        }}

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

    function goDiscussion(){
            history.push('/home')
        }

    let itemsToRender;
    if (post.comments) {
        itemsToRender = post.comments.map((comment) => (
                <Comment 
                    key = {comment.id}
                    comment = {comment}
                    user={user}
                    post={post} />
        ))
    }

    return (
        <div className='body'>
        <div className='view-wrapper'>
                <h4 className='viewing-user'>User: {user.name}</h4>
                <button className='logout' onClick = {logOut} >Log Out</button>
        </div>
        <br />
        <h1 className='nba-today'>NBA Today</h1>
        <button onClick = {goDiscussion} >Go to Discussion Board</button>
        <div className="content">
            <ul>
                <h3 className='post-header'>{post.header}</h3>
                <p className='post-body'>{post.body}</p>
                {renderButtons()}
                <br/>
                {itemsToRender}
                <NewComment user={user}/>
            </ul>
        </div>
        </div>

    );
}

export default Comments;