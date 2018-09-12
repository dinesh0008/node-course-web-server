const express = require('express');

var app = express();

app.get('/',(req,res)=>{
  res.send({
    "name":"Dinesh",
    "likes":[
      "Bikes",
      "Cars"
    ]
  });
});

app.listen(3000);
