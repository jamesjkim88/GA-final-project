const axios = require('axios').default;

async function getYoutubeData(req, res){
  console.log("getting youtube data");
  const defaultQ = "coronavirus covid-19 news";
  await axios.get('https://www.googleapis.com/youtube/v3/search', {
    params: {
      part: 'snippet',
      maxResults: 50,
      order: 'date',
      q: `${this.defaultQ}`,
      relevanceLanguage: 'en',
      key: "AIzaSyAZI_uW6ynmECG-HbCYU2xq7h6pIx1e_UM"
    }
  }).then(data => {
    console.log("youtube data: ", data);
    res.status(200).json(data);
  }).catch(err => console.log("error: ", err))
}

module.exports = {
  getYoutubeData
}