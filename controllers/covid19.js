const axios = require('axios').default;

// export default async function getCovid19Data(){
//   const covid19Data = await axios.get('https://covid19.mathdro.id/api');
//   console.log(covid19Data);
// }

async function getCovid19Data(req, res){
  console.log("getting covid19 data!");
    axios.get('https://covid19.mathdro.id/api')
      .then(function({ data }){
        console.log('covid19Data: ', data);
        res.status(200).json(data);
      }).catch(err => console.log(err));
}

module.exports = {
  getCovid19Data
}