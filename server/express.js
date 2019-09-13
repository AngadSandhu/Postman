const express = require('express');
const app = express();

app.use((req,res)=>{
  console.log('First Middleware');
  next();
});

app.use((req,res)=>{
  res.send('Response Comming from Server : Hi there !!');
});

module.exports = app;
