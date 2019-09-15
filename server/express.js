const express = require('express');
const app = express();

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
