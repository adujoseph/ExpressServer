const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    // res.send('<h1>Hello World Saved</h1>')
    res.render('index');
});

app.listen(3000);
console.log('Server is running on port 3000...');