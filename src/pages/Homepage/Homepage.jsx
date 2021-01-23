import React, { useState, useEffect } from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import Navbar from '../../components/Navbar/Navbar';
import CovidNumbers from '../../components/CovidNumbers/CovidNumbers';
import CovidVideos from '../../components/CovidVideos/CovidVideos';
import CovidReddit from '../../components/CovidReddit/CovidReddit';
import CovidArticles from '../../components/CovidArticles/CovidArticles';

export default function Homepage({ user }){


  
  return(
    <>
      <Navbar user={user}/>
      { user ? <h1>Home page for {user.username} har</h1> : <br/> }
      
      
      
      
      <Grid columns={3} divided>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment><CovidNumbers/></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment><CovidVideos/></Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment className="threads reddit"><CovidReddit /></Segment>
        <Segment className="threads articles"><CovidArticles /></Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
    </>
  )
}