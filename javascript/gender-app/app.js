const axios = require('axios');
const username = "mahalaxmi";
axios.get(`https://api.genderize.io?name=${username}`)
    .then(function(response){
        const { name, gender } = response.data;
        console.log(`${name} is ${gender}`);
    })
    .catch(function(err){
        console.log(err.message);
    });