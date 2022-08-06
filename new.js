const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://webknox-jokes.p.rapidapi.com/jokes/random',
  params: {minRating: '8', maxLength: '100'},
  headers: {
    'X-RapidAPI-Key': '96cc04ea5dmsh239d45d3298c330p15eaf8jsn71ad18ebbec6',
    'X-RapidAPI-Host': 'webknox-jokes.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});