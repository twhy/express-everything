const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('views', path.join(__dirname, 'views'));      // 设置 views 目录路径
app.set('view engine', 'pug');                        // 使用 pug 作为模板引擎

app.use(express.static('public'));
app.use(bodyParser.json());                           // application/json
app.use(bodyParser.urlencoded({ extended: false }));  // application/x-www-form-urlencoded

app.get('/', function(req, res) {
  res.render('index');
});

app.use('/cats', require('./cats'));

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});