const express = require('express');

const route = express.Router();
const fs = require('fs');

route.get('/chatRoom', (req, res, next) => {
    fs.readFile('messages.txt', (err, data) => {
        if (err) {
            console.log(err);
            data = "Cannot find any chat";
        }
        res.send(`<h1>Enter your Chats</h2> ${data} <form onsubmit="document.querySelector('#username').value=localStorage.getItem('userName')" action="/chatRoom" method="POST"><input type="text" name="message" id="message" placeholder="message"> <input type="hidden" id="username" name="username"> <button type="submit">SEND</button> </form> `);
    })
})

route.post('/chatRoom', (req, res, next) => {
    const message = `${req.body.username} : ${req.body.message} ---- `
    console.log(message);
    fs.appendFile('messages.txt', message , (err) => {
        if(err){
            console.log(err);
        }
        res.redirect('/chatRoom');
    });
})
module.exports = route;