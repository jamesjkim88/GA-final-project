import React, { useState, useEffect } from 'react';
import apiService from '../../utils/apiService'

export default function CovidReddit(){

  const [redditData, setRedditData] = useState('');

  async function getRedditData(){
    try{
      const data = await apiService.getRedditData();
      setRedditData(data)
      console.log(data);
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    getRedditData()
  }, [])

  return(
    <h1>Covid Reddit</h1>
  )
}
