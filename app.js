// Creating Chat Application
const express = require('express');
const bodyParser = require('body-parser');

// my own files
const logInPage = require('./routes/login');
const chatRoom = require('./routes/chatpage');

const app = express();

app.use(bodyParser.urlencoded({extended:false}));


// creating the page using routes files
app.use(logInPage);
app.use(chatRoom);


app.use((req,res,next) => {
    res.status(404).send('<h1> PAGE NOT FOUND</h1>');
});


// Creating server and port
app.listen(3000);