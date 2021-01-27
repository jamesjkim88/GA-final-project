import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
import LoginPage from '../LoginPage/LoginPage';
import Homepage from '../Homepage/Homepage';
import Profilepage from '../ProfilePage/Profilepage';
import axios from 'axios';

function App() {

  const [user, setUser] = useState(userService.getUser());

  function handleSignUpOrLogin(){
    setUser(userService.getUser());
  }

  console.log(user.posts);

  function handleUserPost(data){
    setUser(data)
  }

  function handleLogout(){
    userService.logout();
    setUser({user:null})
  }

  // handleUserPost={handleUserPost}

  return (
    <div className="App">
      <Switch>
        {/* <Route exact path="/">
            <Homepage user={user} handleLogout={handleLogout}/>
        </Route> */}
        <Route exact path="/login">
            <LoginPage handleSignUpOrLogin={ handleSignUpOrLogin }/>
        </Route>
        <Route exact path="/signup">
          <SignupPage handleSignUpOrLogin={ handleSignUpOrLogin }/>
        </Route>
        {/* <Route exact path="/:id">
          <Profilepage user={user}/>
        </Route> */}
        {userService.getUser() ? 
            <>
                <Route exact path="/">
                    <Homepage user={user} handleLogout={handleLogout} />
                </Route>
                <Route path="/:id">
                  <Profilepage user={user} handleLogout={handleLogout}/>
                </Route>
            </>
            :
            <Redirect to='/login'/>
          }
      </Switch>
    </div>
  );
}

export default App;