import React, { useState, useEffect } from 'react';
import apiService from '../../utils/apiService';
import { Card, Icon, Image } from 'semantic-ui-react';

export default function CovidVideo(){

  const [youtubeData, setYoutubeData] = useState([]);

  async function getYoutubeData(){
    try{
      const data = await apiService.getYoutubeData()
      setYoutubeData(data.data.items)
      console.log(data.data.items);
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    getYoutubeData()
  }, [])

  const mapVids = youtubeData.map((e,i) => {
    console.log(e.snippet.thumbnails.default)
    return(
         <Card centered>
    <Image src={e.snippet.thumbnails.medium.url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{e.snippet.channelTitle}</Card.Header>
      <Card.Meta>{e.snippet.publishedAt}</Card.Meta>
      <Card.Description>
        {e.snippet.description}
      </Card.Description>
    </Card.Content>
  </Card> 
    )
  });

  return(
    <>
    {mapVids}
    </>
  )
}
