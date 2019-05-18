const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {User} = require('./DataBase/models.js')
const port  = process.env.PORT || 9876

const app = express();


app.listen(port , ()=>{
    console.log(`Welcome to faza'a server port ==> ${port}`)
})