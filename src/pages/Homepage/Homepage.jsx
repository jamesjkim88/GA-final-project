import React, {useState, useEffect} from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CovidNumbers from '../../components/CovidNumbers/CovidNumbers';
import CovidVideos from '../../components/CovidVideos/CovidVideos';
import CovidReddit from '../../components/CovidReddit/CovidReddit';
import CovidArticles from '../../components/CovidArticles/CovidArticles';

export default function Homepage({ user }){


  
  return(
    <>
      <Navbar user={user}/>
      { user ? <h1>Home page for {user.username} har</h1> : <h1>no user</h1> }
      <CovidNumbers/>
      <CovidVideos />
      <CovidReddit />
      <CovidArticles />
    </>
  )
}