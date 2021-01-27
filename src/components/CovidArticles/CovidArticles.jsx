import React, { useState, useEffect } from 'react';
import apiService from '../../utils/apiService';
import { List } from 'semantic-ui-react';

export default function CovidArticles({ user }){
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
          <List.Header as='a' href={e.url}>{ e.title }</List.Header>
          <List.Description as='a'>By { e.author }<br/>Published {e.publishedAt}</List.Description>
          {
        user ? <List.Icon name='star' size='large' color="yellow" verticalAlign='middle'/> : null
        }
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
