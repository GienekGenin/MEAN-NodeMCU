import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

let index = require('./routes/index');
let tasks = require('./routes/tasks');

let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);

let port = 3000;

//View engine folder
app.set('views', path.join(__dirname, 'views'));

// Specify your engine
app.set('view engine', 'ejs');

//render html files
app.engine('html', require('ejs').renderFile);

//Set static folder for Angular
app.use(express.static(path.join('../web', 'dist')));

//Socket connection
io.on('connection', (socket) => {
  console.log('New connection made');

  //Test Messages
  /*
  * Listen to event1 coming from the client
  * Take the data that was send to u
  * And print it in console
  */
  socket.on('event1', (data) => {
    console.log(data.msg);
  });

  //Emit a message when we load the browser window
  socket.emit('event2', {
    msg: 'Server to client, do u read me? Over.'
  });

  socket.on('event3', (data) => {
    console.log(data.msg);
    socket.emit('event4',{
      msg: 'Loud and clear'
    })
  });
});

// Catch all other routes and return the index file
app.get('/', function (req, res) {
  res.sendFile(path.join('../web', 'dist/index.html'));
});

//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Home page route
app.use('/index', index);

//Tasks page route
app.use('/api', tasks);

server.listen(port, function () {
  console.log(`Server listen on port ${port}`)
});
