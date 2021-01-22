const axios = require('axios').default;

// export default async function getCovid19Data(){
//   const covid19Data = await axios.get('https://covid19.mathdro.id/api');
//   console.log(covid19Data);
// }

async function getRedditData(req, res){
  console.log("getting reddit data!");
    axios.get('https://www.reddit.com/r/coronavirus.json')
      .then(function({ data }){
        console.log('reddit data: ', data);
        res.status(200).json(data);
      }).catch(err => console.log(err));
}

module.exports = {
  getRedditData
}