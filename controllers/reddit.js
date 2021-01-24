const axios = require('axios').default;

async function getRedditData(req, res){
  axios.get('https://www.reddit.com/r/coronavirus.json')
    .then(function({ data }){
      res.status(200).json(data);
  }).catch(err => console.log(err));
}

module.exports = {
  getRedditData
}