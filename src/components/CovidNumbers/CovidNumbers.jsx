import React, { useState, useEffect } from 'react';
import apiServce from '../../utils/apiService';
import { List, Dropdown } from 'semantic-ui-react';

export default function CovidNumbers(){
  const [covid19Confirmed, setCovid19Confirmed] = useState({});
  const [covid19Recovered, setCovid19Recovered] = useState({});
  const [covid19Deaths, setCovid19Deaths] = useState({});
  const [covid19CountryConfirmed, setCovid19CountryConfirmed] = useState({});
  const [covid19CountryRecovered, setCovid19CountryRecovered] = useState({});
  const [covid19CountryDeaths, setCovid19CountryDeaths] = useState({});
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  

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

  async function getCovid19CountryData(){
    try{
      const data = await apiServce.getCovid19CountryData();
      console.log(data);
      setCovid19CountryConfirmed(data.data.confirmed);
      setCovid19CountryRecovered(data.data.recovered);
      setCovid19CountryDeaths(data.data.deaths);
    }catch(err){
      console.log(err)
    }
  }

  async function getCountries(){
    try{
      const data = await apiServce.getCountries();
      console.log(data);
      setCountries(data.data.countries);
    }catch(err){
      console.log(err);
    }
  }

  const listCountries = countries.map(e => {
    return <Dropdown.Item key={e.name} text={e.name}/>
  })

  useEffect(() => {
    getCovid19Data()
    getCovid19CountryData()
    getCountries()
  }, [])

  return(
    <>
    <h1>around the world</h1>
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
    </List>
    <h1>Hot Spot</h1>
    <List>
    <List.Item>
        <List.Header>USA confirmed:</List.Header>
          {covid19CountryConfirmed.value}
      </List.Item>
      <List.Item>
        <List.Header>USA recovered:</List.Header>
          {covid19CountryRecovered.value}
      </List.Item>
      <List.Item>
        <List.Header>USA deaths:</List.Header>
          {covid19CountryDeaths.value}
      </List.Item>
    </List>
    <Dropdown fluid search selection placeholder='Select country'>
      <Dropdown.Menu>
        {listCountries}
      </Dropdown.Menu>
    </Dropdown>
    </>
  )
}
