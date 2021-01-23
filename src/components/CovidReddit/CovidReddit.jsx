import React, { useState, useEffect } from 'react';
import apiService from '../../utils/apiService';
import { List } from 'semantic-ui-react';

export default function CovidReddit(){

  const [redditData, setRedditData] = useState([]);

  async function getRedditData(){
    try{
      const data = await apiService.getRedditData();
      setRedditData(data.data.data.children)
      console.log(data.data.data.children)
    }catch(err){
      console.log(err)
    }
  }
  
  useEffect(() => {
    getRedditData()
  }, [])

  const epochConverter = (time) => {
    const date = new Date(time * 1000);
    const hours = date.getHours();
    const min = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    return hours;
  }

  const mapRedditData = redditData.map((e,i) => {
    return (
      <List.Item key={i}>
      <List.Icon name='reddit' size='large' verticalAlign='middle' />
      <List.Content>
        <List.Header as='a' href="#">{ e.data.title }</List.Header>
        <List.Description as='a'>Posted { epochConverter(e.data.created) } hours ago</List.Description>
      </List.Content>
    </List.Item>
    )
  });

  return(
    <>
    <h1>Covid Reddit </h1>
    <List divided relaxed>
      { mapRedditData }
    </List>
    </>
  )
}
