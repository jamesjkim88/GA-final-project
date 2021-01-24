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
         <Card>
    <Image src={e.snippet.thumbnails.default.url} wrapped ui={false} />
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
    <h1>{mapVids}</h1>

    {/* <Card>
    <Image src='/images/avatar/large/daniel.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Daniel</Card.Header>
      <Card.Meta>Joined in 2016</Card.Meta>
      <Card.Description>
        Daniel is a comedian living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        10 Friends
      </a>
    </Card.Content>
  </Card> */}
    </>
  )
}
