/*
  Service functions to connect to API's
*/
import axios from 'axios'

function getCovid19Data(){
  return axios.get('/api/covid19')
    .then(data => {
      if(data.statusText === "OK") return data;
    }).catch(err => console.log(err))
}

function getCovid19CountryData(){
  return axios.get('/api/covid19/usa')
    .then(data => {
      if(data.statusText === "OK") return data;
    }).catch(err => console.log(err))
}

function getCovid19DropDownData(country){
  return axios.get('/api/covid19/country/' + country)
    .then(data => {
      if(data.statusText === "OK") return data;
    }).catch(err => console.log("drop down err: ", err))
}

function getCountries(){
  return axios.get('/api/covid19/countries')
    .then(data => {
      if(data.statusText === "OK") return data;
    }).catch(err => console.log(err))
}

function getRedditData(){
  return axios.get('/api/reddit')
    .then(data => {
      if(data.statusText === "OK") return data;
    }).catch(err => console.log(err))
}

function getYoutubeData(){
  return axios.get('/api/youtube')
    .then(data =>{
      if(data.statusText === "OK") return data;
    }).catch(err => console.log(err))
}

function getNewsArticles(){
  return axios.get('/api/articles')
    .then(data => {
      if(data.statusText === "OK") return data;
    }).catch(err => console.log(err))
}

export default {
  getCovid19Data,
  getRedditData,
  getYoutubeData,
  getNewsArticles,
  getCovid19CountryData,
  getCountries,
  getCovid19DropDownData
}