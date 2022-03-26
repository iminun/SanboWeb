const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const bodyParser= require('body-parser');
const port = 8080;
//const db = require('./lib/db.js');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

app.listen( port, function(){


    console.log ('listening on 8080')

});

app.get('/', function(요청, 응답){
    응답.render('index.ejs'
    )
})
app.get('/page/create', function(요청, 응답){
    응답.render('create.ejs'
    )
})
app.post('/page/create_process', function(request, response){
    var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`
        INSERT INTO data (id, title, contents, reg_data) 
          VALUES(sanbo, ?, ?, NOW())`,
        [post.title, post.description], 
        function(error, result){
          if(error){
            throw error;
          }
          response.writeHead(302, {Location: `/page/${result.insertId}`}); //result 결과에 insertId가 무엇을나타내는지
          response.end();
        }
      )
  });
})

app.get('/page/:id', function(요청, 응답){
  var searchtitle = 요청.title;  //이 title을 
  db.query(`SELECT * FROM 테이블명 WHERE title =${searchtitle}`, function(에러, 결과){ 
    if(error){console.log(에러);}
    응답.render('detailpage.ejs', {data: 결과}
    )
  })
})