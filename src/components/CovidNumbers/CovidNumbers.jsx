import React, { useState, useEffect } from 'react';
import apiServce from '../../utils/apiService';
import { List } from 'semantic-ui-react';

export default function CovidNumbers(){
  const [covid19Confirmed, setCovid19Confirmed] = useState({});
  const [covid19Recovered, setCovid19Recovered] = useState({});
  const [covid19Deaths, setCovid19Deaths] = useState({});

  async function getCovid19Data(){
    try{
      const data = await apiServce.getCovid19Data();
      setCovid19Confirmed(data.data.confirmed);
      setCovid19Recovered(data.data.recovered);
      setCovid19Deaths(data.data.deaths);
    }catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    getCovid19Data()
  }, [])

  return(
    <List>
      <List.Item>
        <List.Header>Total confirmed:</List.Header>{ covid19Confirmed.value }
      </List.Item>
      <List.Item>
        <List.Header>Total Recovered:</List.Header>
        { covid19Recovered.value }
      </List.Item>
      <List.Item>
        <List.Header>Total Deaths:</List.Header>
        { covid19Deaths.value }
      </List.Item>
      <List.Item>
        <List.Header>San Francisco</List.Header>
        What a lovely city
      </List.Item>
    </List>
  )
}
