const axios = require('axios').default;

async function getYoutubeData(req, res){
  console.log("getting youtube data");
  await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      maxResults: 5,
      order: 'date',
      q: "covid-19 news",
      relevanceLanguage: 'en',
      key: ""
    }
  }).then(({data}) => {
    console.log("youtube data: ", data.items);
    res.status(200).json(data);
  }).catch(err => console.log("error: ", err))
}

module.exports = {
  getYoutubeData
}