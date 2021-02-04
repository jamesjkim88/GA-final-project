import React, { useState, useEffect } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Navbar from '../../components/Navbar/Navbar';
import CovidNumbers from '../../components/CovidNumbers/CovidNumbers';
import CovidVideos from '../../components/CovidVideos/CovidVideos';
import CovidReddit from '../../components/CovidReddit/CovidReddit';
import CovidArticles from '../../components/CovidArticles/CovidArticles';
import * as archiveService from '../../utils/archiveService';

export default function Homepage({ user, handleLogout, userPosts, handleSignUpOrLogin }){

  async function addToArchive(postId){
    try {
      const data = await archiveService.addToArchive(postId);
      console.log(data, ' this is from addLike');
      console.log(userPosts, "user.posts");
    } catch(err){
      console.log(err)
    }
  }
  async function removeFromArchive(likeId){
    try {
      const data = await archiveService.removeFromArchive(likeId);
    } catch(err){
      console.log(err)
    }
  }
  return(
    <>
      <Navbar user={user} handleSignUpOrLogin={ handleSignUpOrLogin } handleLogout={handleLogout}/>
      {/* { user ? <h1>Home page for {user.username}</h1> : <br/> } */}
      <h1>Covid News World Wide</h1>
      <br/>
      <Grid columns={3} divided>
      <Grid.Row stretched>
        <Grid.Column>
          <Segment><CovidNumbers/></Segment>
        </Grid.Column>
        <Grid.Column className="youtube-col">
          <Segment className="videos youtube-vids"><CovidVideos/></Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment className="threads reddit"><CovidReddit user={user} addToArchive={addToArchive} removeFromArchive={removeFromArchive}/></Segment>
          <Segment className="threads articles"><CovidArticles user={user} addToArchive={addToArchive} removeFromArchive={removeFromArchive}/></Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    </>
  )
}