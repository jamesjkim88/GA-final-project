import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import './App.css';
import SignupPage from '../SignupPage/SignupPage';
import userService from '../../utils/userService';
import LoginPage from '../LoginPage/LoginPage';
import Homepage from '../Homepage/Homepage';
import axios from 'axios';


function App() {

function getData(){
  const data = axios.get('/')
    .then(data => {
      console.log(data);
    })
    .catch(err => console.log(err))
}

const [user, setUser] = useState(userService.getUser());
const [redditData, setRedditData] = useState('');

function handleSignUpOrLogin(){
  setUser(userService.getUser());
}


  
console.log(user);

  return (
    <div className="App">
      <Switch>
          <Route exact path="/">
              <Homepage user={user}/>
          </Route>
          <Route exact path="/login">
             <LoginPage handleSignUpOrLogin={ handleSignUpOrLogin }/>
          </Route>
          <Route exact path="/signup">
            <SignupPage handleSignUpOrLogin={ handleSignUpOrLogin }/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;