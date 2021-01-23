import React, { useState, useEffect } from 'react';
import apiService from '../../utils/apiService';

export default function CovidVideo(){

  const [youtubeData, setYoutubeData] = useState([]);

  async function getYoutubeData(){
    try{
      const data = await apiService.getYoutubeData()
      setYoutubeData(data.data.items)
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    getYoutubeData()
  }, [])

  const mapVids = youtubeData.map((e,i) => {
    return(
      <h1 key={i}>{e.kind}</h1>
    )
  });

  return(
    <h1>Covid Video {mapVids}</h1>
  )
}
