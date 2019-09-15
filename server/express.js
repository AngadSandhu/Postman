const express = require('express');
const app = express();


// Middleware for handling CORS
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");  // allows request from any domain
  res.setHeader("Access-Control-Allow-Header", "Origin ,X-Requested-With, Content-Type, Accept");  // allows all these specified headers in the request. Any other header not specified here shall not be allowed to access
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE,OPTIONS");
  next();
});

app.use('/posts',(req,res)=>{
  const posts  = [{
    id: 'a1f45',
    title: 'First Post',
    description: 'I come from the server'
  },{
    id:'89ade45gb',
    title: 'Second Post',
    description: 'I too come from the server'
  }];
  res.json({
    message: 'Succesfully fetched Posts',
    posts: posts
  });
  console.log(res.json({
    message: 'Succesfully fetched Posts',
    posts: posts
  }));
});

module.exports = app;
