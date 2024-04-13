const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://currencyconverter.p.rapidapi.com/availablecurrencies',
  headers: {
    'X-RapidAPI-Key': 'c4f3717be4mshb9c2fdd57fb77dep1ef5f4jsn53f84f54568d',
    'X-RapidAPI-Host': 'currencyconverter.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}