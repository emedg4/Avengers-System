require('dotenv').config();
require('./utils/event-handler');
const events     = require('./events/events');
const express    = require('express');
const characters = require( './routes/characters.router');
const app        = express();
const bodyParser = require('body-parser');
const socketIo   = require('socket.io');
const http       = require('http').createServer(app);
const io = socketIo(http);

const nsps = io.on('connection', (socket) => {
  console.log("Client connected to Socket Service on default namespace");
  socket.on('disconnect', () => {
    console.log('client disconnected...')
  });
});

EventHandler.subscribe(events.characterDeletedEvent, (data) => {
  nsps.emit('characterDeleted', data)
});

EventHandler.subscribe(events.characterModifiedEvent, (data) => {
  nsps.emit('characterModified', data)
});

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/characters', characters);


http.listen(process.env.PORT, () => {
    console.log(`Api listening at port ${process.env.PORT}`)
});
