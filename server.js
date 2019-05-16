const express = require('express');
const bcrypt = require('bcrypt');
const port  = process.env.PORT || 9876

const app = express();


app.listen(port , ()=>{
    console.log(`welcom to faza'a server port ==> ${port}`)
})