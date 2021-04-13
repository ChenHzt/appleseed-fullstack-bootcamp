const request = require('request');

console.log(`===========================request============================`)


let options = {
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    method: 'GET'
}

request(options, (err, response, body) => {
    if(!err && response.statusCode == 200)
        console.log(body)
});

//_________________________________________________________________________

const axios = require('axios')

console.log(`===========================axios============================`)


const getData = async () => {
  try {
    return await axios.get('https://geek-jokes.sameerkumar.website/api?format=json')
  } catch (error) {
    console.error(error)
  }
}
const print = async () =>{
    const temp = await getData()
    console.log(temp.data);
}

print();

// ________________________________________________________________________

const fetch = require('node-fetch');

console.log(`===========================node-fetc============================`)

fetch('https://geek-jokes.sameerkumar.website/api?format=json')
    .then(res => res.text())
    .then(body => console.log(body));