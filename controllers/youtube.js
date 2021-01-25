const axios = require('axios').default;
require('dotenv').config();

async function getYoutubeData(req, res){
  console.log("getting youtube data");
  await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      maxResults: 50,
      order: 'date',
      q: "covid-19 news",
      relevanceLanguage: 'en',
      key: process.env.YOUTUBE_KEY
    }
  }).then(({data}) => {
    res.status(200).json(data);
  }).catch(err => console.log("error: ", err))
}

module.exports = {
  getYoutubeData
}