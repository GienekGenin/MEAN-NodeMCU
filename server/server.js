const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const index = require('./routes/index');
const tasks = require('./routes/tasks');

const app = express();
let globalData = {
  "Volts":4.5,
  "Temp":0,
  "L1":0,
  "L2":0
};
//View engine folder
app.set('views', path.join(__dirname, 'views'));

// Specify your engine
app.set('view engine', 'ejs');

//render html files
app.engine('html', require('ejs').renderFile);

//Set static folder for Angular
let staticPath = path.normalize(__dirname + '/../dist');
app.use(express.static(staticPath));

// Catch all other routes and return the index file
app.get('/', function (req, res) {
  res.sendFile(staticPath + '/index.html');
});

//Body Parser MiddleWare
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Home page route
app.use('/index', index);

//Tasks page route
app.use('/api', tasks);

// Handling data incoming from nodeMCU
app.post('/data', function (req,res) {
  globalData = req.body.data;
  res.send('Its a request' + req.body);
});

// Showing that data, and sending it back
app.get('/data', function (req,res) {
  console.log(globalData);
  res.json(globalData);
});

app.set('port', process.env.PORT || 8080);

let server = app.listen(process.env.PORT || 8080, function () {
  let port = server.address().port;
  console.log("App now running on port", port);
});

const io = require('socket.io')(server);
//Socket connection
io.on('connection', (socket) => {
  console.log('New connection made');

  //Test Messages
  /*
  * Listen to event1 coming from the client
  * Take the data that was send to u
  * And print it in console
  */
  socket.on('Client_asking', (data) => {
    console.log(data.msg);
  });

  //Emit a message when we load the browser window
  socket.emit('Server_asking', {
    msg: 'Server to client, do u read me? Over.'
  });

  socket.on('Client_response', (data) => {
    console.log(data.msg);
    socket.emit('Server_response', {
      msg: 'Loud and clear'
    })
  });
  setInterval(function () {
    return socket.emit('Sensor', {
      msg: {"Volts":globalData.Volts,"L1":globalData.L1,"L2":globalData.L2}
    });
  },2000);
  setInterval(function () {
    return socket.emit('Weather', {
      msg: {"Temp":globalData.Temp}
    });
  },2000);
});
