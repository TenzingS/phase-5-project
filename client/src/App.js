import './App.css';
import { useEffect, useState } from 'react';
import { Route, BrowserRouter } from "react-router-dom";
import Login from "./Login";
import DiscussionBoard from './Forum/DiscussionBoard';
import NewPost from "./Forum/NewPost";
import EditPost from './Forum/EditPost';
import Stats from './Stats/Stats';
import Teams from './Stats/Teams'
import Players from './Stats/Players'
import NewComment from './Forum/NewComment';
import Comment from './Forum/Comment';
import PlayersList from './Stats/PlayersList';
import PostContainer from './Forum/PostContainer';

function App() {
    const [user, setUser] = useState(false);

    useEffect(() => {
      fetch("/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }, []);


  return (
    <div className="App">

      <BrowserRouter>
        <Route exact path = "/">
          <Login setUser={setUser} user={user}/>
        </Route>
        <Route exact path = "/home">
          <DiscussionBoard setUser={setUser} user={user}/>
        </Route>
        <Route exact path = "/createpost">
          <NewPost user={user}/>
        </Route>
        <Route exact path = '/editpost/:id'>
          <EditPost />
        </Route>
        <Route exact path = '/post/:id'>
          <PostContainer />
        </Route>
        <Route exact path = "/stats">
          <Stats user={user} setUser={setUser}/>
        </Route>
        <Route exact path = "/teams">
          <Teams user={user} setUser={setUser}/>
        </Route>
        <Route exact path = "/players">
          <Players user={user} setUser={setUser}/>
        </Route>
        <Route exact path = "/post/:id">
          <Comment user={user}/>
        </Route>
        <Route exact path = "/teampage">
          <PlayersList user={user}/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
