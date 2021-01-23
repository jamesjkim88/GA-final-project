const axios = require('axios').default;

async function getCovid19Data(req, res){
  console.log("getting covid19 data!");
    axios.get('https://covid19.mathdro.id/api')
      .then(function({ data }){
        console.log('covid19Data: ', data);
        res.status(200).json(data);
      }).catch(err => console.log(err));
}

async function getCovid19CountryData(req, res){
  console.log("getting covid19 country data!");
    axios.get('https://covid19.mathdro.id/api/countries/usa')
      .then(function({ data }){
        console.log('covid19DataCountry: ', data);
        res.status(200).json(data);
      }).catch(err => console.log(err));
}

async function getCountries(req, res){
  console.log("getting covid19 countries!");
    axios.get('https://covid19.mathdro.id/api/countries')
      .then(function({ data }){
        console.log('countries: ', data);
        res.status(200).json(data);
      }).catch(err => console.log(err));
}

module.exports = {
  getCovid19Data,
  getCovid19CountryData,
  getCountries
}