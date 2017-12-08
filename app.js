var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended : true } ) );

app.get('/keyboard', function(req, res){
  const menu = {
    "type" : 'text',
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

  console.log("user_key : "+_obj.user_key+"\ntype : "+_obj.type+"\ncontent : "+_obj.content);

  if(_obj.content == "안녕 매티"){

    let message = {
      "message" : {
      'text' : '안녕하세요! 저는 METi 입니다.'
    },
     "keyboard" : {
      'type' : 'text'
    }
  };
  res.set({
    'content-type' : 'application/json'
  }).send(JSON.stringify(message));
  }
  if(_obj.content == "안녕하세요"){

    let message = {
      "message" : {
      'text' : '안녕하세요!'
    },
     "keyboard" : {
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
      'text' : '안녕하세요! 저는 METi 입니다.'
    },
     "keyboard" : {
      'type' : 'text'
    }
  };
  res.set({
    'content-type' : 'application/json'
  }).send(JSON.stringify(message));
  }
  else if (_obj.content == "질문할래"){
    let message = {
    "message" : {
      'text' : '사진과 함께 질문사항을 메시지로 입력 해주세요!'
    },
    "keyboard" : {
      'type' : 'text'
    }
  };
  res.set({
    'content-type' : 'application/json'
  }).send(JSON.stringify(message));
  }

  else if (_obj.content == "질문"){
    let message = {
    "message" : {
      'text' : '사진과 함께 질문사항을 메시지로 입력 해주세요!'
    },
    "keyboard" : {
      'type' : 'text'
    }
  };
  res.set({
    'content-type' : 'application/json'
  }).send(JSON.stringify(message));
  }

  else if(_obj.type == "photo"){
    let message = {
    "message" : {
      'text' : '보낸 문제에서 모르는 부분을 입력 해주세요! 입력은 질문 사항은 @입력후 작성해주세요 ex) \"@왜 정답이 3번인지 모르겠어요\"'
    },
    "keyboard" : {
      'type' : 'text'
    }
  };
  res.set({
    'content-type' : 'application/json'
  }).send(JSON.stringify(message));
  }

  else if(_obj.content.charAt(0) == '@'){

    let message = {
      'message' : {
        'text' : '문제를 전달할게요! 잠시만 기다려주세요'
      },
      'keyboard' : {
        'type' : 'text'
      }
    };
    res.set({
      'content-type' : 'application/json'
    }).send(JSON.stringify(message));
  }

  else{

    let message ={

     "message" : {
      'text' : '아직은 제가 알아들을 수 있는 말이 아니에요 ㅠ.ㅠ'
    },

     "keyboard" : {
      'type' : 'text'
    }
  };
  res.set({
    'content-type' : 'application/json'
  }).send(JSON.stringify(message));
  }
});

app.listen(9000, function(){
  console.log("connected!");
});
