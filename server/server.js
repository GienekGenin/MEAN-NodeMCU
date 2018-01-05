import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
let index = require('./routes/index');
let tasks = require('./routes/tasks');

let port = 3000;

let app = express();

//View engine folder
app.set('views', path.join(__dirname, 'views'));

// Specify your engine
app.set('view engine', 'ejs');

//render html files
app.engine('html', require('ejs').renderFile);

//Set static folder for Angular
app.use(express.static(path.join('../web', 'dist')));

// Catch all other routes and return the index file
app.get('/', function (req,res) {
  res.sendFile(path.join('../web', 'dist/index.html'));
});

//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Home page route
app.use('/index', index);

//Tasks page route
app.use('/api', tasks);

let server = app.listen(port, function () {
  console.log(`Server listen on port ${port}`)
});
