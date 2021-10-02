import React from 'react';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Search from "./Search";
import Content from './Content';
import News from './News';

const DiscussionBoard = ({setUser, user})=> {

    const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')
    const [content, setContent] = useState(null)
    const [comments, setComments] = useState([])
    const [news, setNews] = useState([])


    let history = useHistory();

    useEffect(() => {
        fetch('/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
        },[])
    
    useEffect(() => {
        fetch('/comments')
        .then(res => res.json())
        .then(data => setComments(data))
        },[])

    function selectPost(post){
        const selectContent = post 
        setContent(selectContent)
        console.log('Post is Clicked!')
      }

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

    //   function handleEdit(edits){
    //       setPosts(edits)
    //   }

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
            console.log(data))
            // setNews(data.data))
        },[])

    return (
        <div>
            <h4>Welcome {user.name}!</h4>
            <button onClick = {statsPage} >Go to NBA Stats</button>
            <button onClick = {logOut} >Log Out</button>
            <h1>NBA Today</h1>
            <div>
                <Search searchInput={searchInput}/>
                <Content 
                posts={filterSearch()}
                setPosts={setPosts}
                selectPost={selectPost} 
                content={content}
                handleDelete={handleDelete}
                // handleEdit={handleEdit}
                comments={comments} />
                <News news={news} />

            </div>
        </div>
    );
}

export default DiscussionBoard;