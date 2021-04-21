const request = require('request');
const path = require('path')
const express = require('express')

const app = express()
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views')

app.set('view engine', 'hbs')
app.set('views', viewsPath)
app.use(express.static(publicDirectoryPath))

let options = {
    url: 'https://geek-jokes.sameerkumar.website/api?format=json',
    method: 'GET'
}

let data;

request(options, (err, response, body) => {
    if(!err && response.statusCode == 200)
        data=body;
});


app.get('', (req, res) => {
    res.render('index', JSON.parse(data));
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})