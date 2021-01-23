import React, { useState, useEffect } from 'react';
import apiService from '../../utils/apiService';
import { List } from 'semantic-ui-react';

export default function CovidArticles(){
  const [articles, setArticles] = useState([]);

  async function getNewsArticles(){
    try{
      const data = await apiService.getNewsArticles();
      setArticles(data.data.articles);
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    getNewsArticles()
  }, [])
  
  const mapArticles = articles.map((e, i) => {
      return (
        <List.Item key={i}>
        <List.Content>
          <List.Header as='a' href="#">{ e.title }</List.Header>
          <List.Description as='a'>By { e.author } and Published by {e.publishedAt}</List.Description>
        </List.Content>
      </List.Item>
      )
    })


  return(
    <>
    <h1>Covid Articles</h1>
    <List divided relaxed>
    { mapArticles }
  </List>
  </>
  )
}
