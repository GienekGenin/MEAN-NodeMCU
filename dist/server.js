'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var index = require('./routes/index');
var tasks = require('./routes/tasks');

var app = (0, _express2.default)();
var server = require('http').Server(app);
var io = require('socket.io')(server);

var port = 3000;
var staticPath = _path2.default.normalize(__dirname + '/../public');
console.log(staticPath);
//View engine folder
app.set('views', _path2.default.join(__dirname, 'views'));

// Specify your engine
app.set('view engine', 'ejs');

//render html files
app.engine('html', require('ejs').renderFile);

//Set static folder for Angular
app.use(_express2.default.static(_path2.default.join('../web', 'dist')));

//Socket connection
io.on('connection', function (socket) {
  console.log('New connection made');

  //Test Messages
  /*
  * Listen to event1 coming from the client
  * Take the data that was send to u
  * And print it in console
  */
  socket.on('event1', function (data) {
    console.log(data.msg);
  });

  //Emit a message when we load the browser window
  socket.emit('event2', {
    msg: 'Server to client, do u read me? Over.'
  });

  socket.on('event3', function (data) {
    console.log(data.msg);
    socket.emit('event4', {
      msg: 'Loud and clear'
    });
  });
});

// Catch all other routes and return the index file
app.get('/', function (req, res) {
  res.sendFile(_path2.default.join('../web', 'dist/index.html'));
});

//Body Parser MiddleWare
app.use(_bodyParser2.default.json());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

//Home page route
app.use('/index', index);

//Tasks page route
app.use('/api', tasks);

server.listen(port, function () {
  console.log('Server listen on port ' + port);
});