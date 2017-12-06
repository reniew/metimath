var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended : true } ) );

app.get('/keyboard', function(req, res){
  const menu = {
    "type" : 'buttons',
    "buttons" : ["시작하기", "결제하기"]
  };

  res.set({
    'content-type' : 'application/json'
  }).send(JSON.stringify(menu));
});

app.post('/message', function(req,res){

  const _obj = {
    user_key : req.body.user_key,
    type : req.body.type,
    content : req.body.content
  };

  console.log(_obj.content);

  if(_obj.content == "시작하기"){

    let message = {
      "message" : {
      'text' : 'Hi i\'m meti, your mathematics private tutor/n'
    }

     keyboard : {
      'type' : 'text'
    }
  };
  res.set({
    'content-type' : 'application/json'
  }).send(JSON.stringify(message));
  }
  else if (_obj.content == "안녕"){
    let message = {
      "message" : {
      'text' : '응 안녕'
    }
     "keyboard" : {
      'type' = 'text'
    }
  };
  res.set({
    'content-type' : 'application/json'
  }).send(JSON.stringify(message));
  }
  else if (_obj.content == "test"){
    let message = {
    "meassage" : {
      'text' : 'yeah'
    }
  };
  res.set({
    'content-type' : 'application/json'
  }).send(JSON.stringify(message));
  }
  else{

    let message ={

     "message" : {
      'text' : '뭐래'
    }

     "keyboard" = {
      'type' : 'text'
    }
  };
  res.set({
    'content-type' : 'application/json'
  }).send(JSON.stringify(message));
  }
});
