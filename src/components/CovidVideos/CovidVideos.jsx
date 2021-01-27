import React, { useState, useEffect } from 'react';
import apiService from '../../utils/apiService';
import { Card, Icon, Image, Modal, Button, Embed, Header, Form, List } from 'semantic-ui-react';

export default function CovidVideo(){

  const [youtubeData, setYoutubeData] = useState([]);
  const [open, setOpen] = React.useState(false)

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
    const decodeHtml = ((html) => {
      let txt = document.createElement('textarea');
      txt.innerHTML = html;
      return txt.value;
    })(e.snippet.title)

    return(
      <>
      <Modal
      key={i}
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      trigger={      
      <Card centered className={`video-${i}`} key={i}>
        <Image src={e.snippet.thumbnails.medium.url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{e.snippet.channelTitle}</Card.Header>
          <Card.Meta>{e.snippet.publishedAt}</Card.Meta>
          <Card.Description>
            {decodeHtml}
          </Card.Description>
        </Card.Content>
      </Card>
      }
    >
          <Embed
          autoplay
    id={e.id.videoId}
    placeholder={e.snippet.thumbnails.high.url}
    source='youtube'
  />
  <Modal.Content>
    <Modal.Description>
      <Header>{e.snippet.title}</Header>
      <p>{e.snippet.description}</p>
      <Form>
        <Form.Field>
          <input placeholder="Input your thoughts" />
        </Form.Field>
      </Form>
      <List relaxed>
    <List.Item>
      <Image avatar src={`https://robohash.org/${i}?set=set3`} />
      <List.Content>
        <List.Header>smdh</List.Header>
        <List.Description>
          <p>time and date</p>
        </List.Description>
      </List.Content>
    </List.Item>
  </List>
    </Modal.Description>
  </Modal.Content>
    </Modal>
      </>
    )
  });

  return(
    <>
    <h1 style={{paddingTop: 15 +"px"}}>Covid Videos</h1>
    {mapVids}
    </>
  )
}