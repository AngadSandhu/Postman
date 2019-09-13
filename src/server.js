const http = require('http');
const app = require('./../server/express');

const port  =  process.env.PORT || 3000;
app.set('port',port);

const server = http.createServer((req,res)=>{
  res.end();
  console.log('Node Server Running !');
});

server.listen(port);
