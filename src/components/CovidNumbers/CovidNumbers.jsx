import React, { useState, useEffect } from 'react';
import apiService from '../../utils/apiService';
import { List, Dropdown } from 'semantic-ui-react';

export default function CovidNumbers(){
  const [covid19Confirmed, setCovid19Confirmed] = useState({});
  const [covid19Recovered, setCovid19Recovered] = useState({});
  const [covid19Deaths, setCovid19Deaths] = useState({});

  // const [rowCovid19Data, setRowCovid19Data] = useState({
  //   confirmed: '',
  //   deaths: '',
  //   recovered: '',
  // });

  const [covid19CountryConfirmed, setCovid19CountryConfirmed] = useState({});
  const [covid19CountryRecovered, setCovid19CountryRecovered] = useState({});
  const [covid19CountryDeaths, setCovid19CountryDeaths] = useState({});

  // const [hotSpotData, setHotSpotData] = useState({
  //   confirmed: '',
  //   deaths: '',
  //   recovered: '',
  // });

  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedCountryData, setSelectedCountryData] = useState(null);

  // const [state, setState] = useState({
  //   confirmed: {},
  //   recovered: {},
  //   deaths: {},
  //   countryConfirmed: {},
  //   countryRecovered: {},
  //   countryDeaths: {},
  //   countries: [],
  //   selectedCountry: ''
  // })
  

  async function getCovid19Data(){
    try{
      const data = await apiService.getCovid19Data();
      setCovid19Confirmed(data.data.confirmed);
      setCovid19Recovered(data.data.recovered);
      setCovid19Deaths(data.data.deaths);
    }catch(err){
      console.log(err)
    }
  }

  async function getCovid19CountryData(){
    try{
      const data = await apiService.getCovid19CountryData();
      setCovid19CountryConfirmed(data.data.confirmed);
      setCovid19CountryRecovered(data.data.recovered);
      setCovid19CountryDeaths(data.data.deaths);
    }catch(err){
      console.log(err)
    }
  }

  async function getCountries(){
    try{
      const data = await apiService.getCountries();
      setCountries(data.data.countries);
    }catch(err){
      console.log(err);
    }
  }
  
  const countryOptions = countries.map(e => {
    return {
      text: e.name,
      key: e.name,
      value: e.name,
      name: e.name.toLowerCase()
    }
  })

  const handleCountryName = (evt) => {
    console.dir(evt.target.textContent);
    setSelectedCountry(evt.target.textContent);
  };

  async function getSelectedCountry(){
    try{
      const data = await apiService.getCovid19DropDownData(selectedCountry)
      setSelectedCountryData(data.data);
    }catch(err){
      console.log(err)
    }
  }

  useEffect(() => {
    getCovid19Data()
    getCovid19CountryData()
    getCountries()
    getSelectedCountry()
  }, [selectedCountry])

  return(
    <>
    <h1>Around the world</h1>
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
      <Dropdown
        placeholder='Select Country'
        fluid
        search
        selection
        options={countryOptions}
        onChange={handleCountryName}
      />
    { selectedCountryData ? <h1>{selectedCountry}</h1> : null}
    { selectedCountryData ? 
    <List>
      <List.Item>
        <List.Header>Confirmed:</List.Header>
          {selectedCountryData.confirmed.value}
      </List.Item>
      <List.Item>
        <List.Header>Recovered:</List.Header>
          {selectedCountryData.recovered.value}
      </List.Item>
      <List.Item>
        <List.Header>Deaths:</List.Header>
          {selectedCountryData.deaths.value}
      </List.Item>
    </List>
    : 
    <h1>Country not selected</h1>
    }
    </>
  )
}
