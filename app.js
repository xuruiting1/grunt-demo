#!/usr/bin/node

const http=require('http');
const log=console.log,
      url  = require('url'),
      qs   = require('querystring');

http.createServer((req,res)=>{
  log(`${req.method} ${req.url} HTTP/${req.httpVersion}`);
  log(req.headers);
  log();
  
  var addr = url.parse(req.url);
  var rect = qs.parse(addr.query);

  var r = {
      'area': Number(rect.width) * Number(rect.height),
      'perimeter': 2 * (Number(rect.width) + Number(rect.height))
     
  }

  res.end(JSON.stringify(r));
 }).listen(8080);

