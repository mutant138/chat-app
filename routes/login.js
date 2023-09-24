const { log } = require('console');
const express = require('express');

const routes = express.Router();

routes.get('/login',(req,res,next) => {
    res.send(`<h1>Enter your Name</h2><form onsubmit="localStorage.setItem('userName', document.querySelector('#username').value)" action="/login" method="POST"> <input type="text" name="userName" id="username"><button type="submit">Sign In </button></form>`);
})

routes.post('/login',(req,res,next) =>{
    const data = req.body;
    res.redirect('/chatRoom');
})



module.exports = routes;