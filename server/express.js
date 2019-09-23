const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


const Post = require("./mongoose/models/Post-Model");
mongoose.connect('mongodb://localhost/myapp');
mongoose.connect("mongodb+srv://admin:admin@basware-practise-83yji.mongodb.net/postman?retryWrites=true&w=majority")
    .then(()=>{
      console.log('Conencted To Database');
    })
    .catch(()=>{
      alert('Connection To DB Failed');
    });

const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Middleware for handling CORS
// app.use((req,res,next)=>{
//   res.setHeader("Access-Control-Allow-Origin","*");  // allows request from any domain
//   res.setHeader("Access-Control-Allow-Headers", "Origin ,X-Requested-With, Content-Type, Accept");  // allows all these specified headers in the request. Any other header not specified here shall not be allowed to access
//   res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, OPTIONS");
//   next();
// });




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

app.post('/posts', (req,res,next)=>{
    const newPost = Post({
      title: req.body.title,
      description: req.body.description
    });

    newPost.save();
    console.log('Post Saved in Mongo');

    alert('Post Saved', newPost);
    res.status(200).json({
      message: 'Added Successfully'
    });
});

module.exports = app;
