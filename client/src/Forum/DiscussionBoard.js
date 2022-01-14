import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Search from "./Search";
import Content from './Content';
import News from './News';
import NewPost from './NewPost';

const DiscussionBoard = ({setUser, user})=> {

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [news, setNews] = useState([])


    let history = useHistory();

    useEffect(() => {
        fetch('/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        },[])


    function searchInput(input){
        setSearch(input)
    }

    function filterSearch(){
        if(search.length > 0){
          return posts.filter(post => post.header.toLowerCase().includes(search.toLowerCase()))
        } else{
          return posts
        }
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
    }})
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


    function statsPage() {
        history.push('/stats')
    }

    useEffect(() => {
        fetch('/news')
        .then(res => res.json())
        .then(data => 
             setNews(data.articles))
        },[])

    function createNew(){
        <div >
            <NewPost />
            {history.push('/createpost')}
        </div>
    }

    return (
        <div className='body'>
            <div className='view-wrapper'>
                <h4 className='viewing-user'>User: {user.name}</h4>
                <button className='logout' onClick = {logOut} >Log Out</button>
            </div>
            <br />
            <h1 className='nba-today'>NBA Today</h1>
            <div className='top-line'>
                <button onClick = {statsPage} >Search Player Stats</button>
                <Search searchInput={searchInput}/>
                <button className='create-new' onClick = {createNew} >Create a new post</button>
            </div>
            <br />
            <div className='main-wrapper'>
                <Content
                posts={filterSearch()}
                handleDelete={handleDelete}
                user={user}/>
                <News news={news} />
            </div>
        </div>
    );
}

export default DiscussionBoard;