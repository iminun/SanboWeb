const express = require('express');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
const bodyParser= require('body-parser');
<<<<<<< HEAD
const port = 3000;
=======

const port = 8080;

//const db = require('./lib/db.js');

>>>>>>> ae2a1b1c22a4ad82c071e0def7bfe01565910fe7

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended : true}));

app.listen( port, function(){
<<<<<<< HEAD
    console.log ('listening on 3000')
=======
    console.log ('listening on 8080')
>>>>>>> ae2a1b1c22a4ad82c071e0def7bfe01565910fe7
});

app.get('/', function(요청, 응답){
    응답.render('index.ejs'
    )
})
app.get('/page/create', function(요청, 응답){
    응답.render('create.ejs'
    )
})
/*app.post('/page/create_process', function(request, response){
    var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`
        INSERT INTO topic (title, description, created, author_id) 
          VALUES(?, ?, NOW(), ?)`,
        [post.title, post.description, post.author], 
        function(error, result){
          if(error){
            throw error;
          }
          response.writeHead(302, {Location: `/page/${result.insertId}`});
          response.end();
        }
      )
  });
})
    
    
    var post = request.body;
    var title = post.title;
    var description = post.description;
    fs.writeFile(`data/${title}`, description, 'utf8', function(err){
      response.redirect(`/page/${title}`);
    });
  });


  var body = '';
  request.on('data', function(data){
      body = body + data;
  });
  request.on('end', function(){
      var post = qs.parse(body);
      db.query(`
        INSERT INTO topic (title, description, created, author_id) 
          VALUES(?, ?, NOW(), ?)`,
        [post.title, post.description, post.author], 
        function(error, result){
          if(error){
            throw error;
          }
          response.writeHead(302, {Location: `/page/${result.insertId}`});
          response.end();
        }
      )
  });*/
