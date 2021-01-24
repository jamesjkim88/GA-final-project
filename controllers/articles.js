const axios = require('axios').default;
require('dotenv').config();

async function getArticleData(req, res){
  console.log("getting covid19 data!");
  axios.get('https://newsapi.org/v2/everything?q=covid-19&apiKey='+ process.env.ARTICLES_KEY)
    .then(function({ data }){
      res.status(200).json(data);
  }).catch(err => console.log(err));
}

module.exports = {
  getArticleData
}