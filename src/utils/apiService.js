/*
  Service functions to connect to API's
*/
import axios from 'axios'

// function getRedditAPI(){
//   axios.get('https://www.reddit.com/r/Coronavirus.json')
//     .then(res => res.json())
//     .then(err => console.log(err));
// };

async function getCovid19Data(){
  const data = await axios.get('/api/covid19');
  console.log(data);
}

async function getRedditData(){
  const data = await axios.get('/api/reddit');
  console.log("reddit data: ", data);
}

async function getYoutubeData(){
  const data = await axios.get('/api/youtube');
  console.log("youtube data: ", data);
}

export default {
  getCovid19Data,
  getRedditData,
  getYoutubeData
}