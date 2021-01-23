const axios = require('axios').default;

async function getArticleData(req, res){
  console.log("getting covid19 data!");
    axios.get('https://newsapi.org/v2/everything?q=covid-19&apiKey=31cc5b11cf1e4994b44e573df10d6e41')
      .then(function({ data }){
        console.log('articles data: ', data);
        res.status(200).json(data);
      }).catch(err => console.log(err));
}

module.exports = {
  getArticleData
}