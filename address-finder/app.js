const axios = require('axios');
const address = "Kempegowda international airport, bangalore rural, karnataka";
axios.get(`https://geocode.maps.co/search?q=${address}&api_key=69c4c0788e3a2888331457fge61a4b7`)
    .then(function(response) {
        const { lat, lon } = response.data[0];
        console.log(lat, lon);
    })
    .catch(function(err) {
        console.log(err.message);
    });