// 비밀번호는 별도의 파일로 분리해서 버전관리에 포함시키지 않아야 합니다. 
var mysql = require('mysql');

var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Sanboproject01',
    database : 'project01'
  });
  
  db.connect();


  module.exports = db;
