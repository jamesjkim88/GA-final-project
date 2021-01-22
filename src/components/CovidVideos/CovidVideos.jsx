import React, { useState, useEffect } from 'react';
import apiService from '../../utils/apiService'

export default function CovidReddit(){

  const [youtubeData, setYoutubeData] = useState('');

  async function getYoutubeData(){
    try{
      const data = await apiService.getYoutubeData();
      setYoutubeData(data)
      console.log(data);
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    getYoutubeData()
  }, [])

  return(
    <h1>Covid Video { youtubeData }</h1>
  )
}
