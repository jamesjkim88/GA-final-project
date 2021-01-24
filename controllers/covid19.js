const axios = require('axios').default;

async function getCovid19Data(req, res){
  axios.get('https://covid19.mathdro.id/api')
    .then(function({ data }){
      res.status(200).json(data);
    }).catch(err => console.log(err));
}

async function getCovid19CountryData(req, res){
  axios.get('https://covid19.mathdro.id/api/countries/usa')
    .then(function({ data }){
      res.status(200).json(data);
    }).catch(err => console.log(err));
}

async function getCovid19DropDownData(req, res){
  console.log("req.params: ", req.params);
  axios.get('https://covid19.mathdro.id/api/countries/' + req.params.country)
    .then(function({ data }){
      res.status(200).json(data);
    }).catch(err => console.log(err));
}

async function getCountries(req, res){
  axios.get('https://covid19.mathdro.id/api/countries')
    .then(function({ data }){
      res.status(200).json(data);
    }).catch(err => console.log(err));
}

module.exports = {
  getCovid19Data,
  getCovid19CountryData,
  getCountries,
  getCovid19DropDownData
}