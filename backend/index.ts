
const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');
const cors = require('cors');
const { Server } = require('socket.io');
const {messageUtils} = require('./utils/message')
const axios = require('axios');


const port = 3002;
const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: ['http://localhost:4200', 'http://192.168.1.113:4200'],
    methods: ['GET', 'POST'],
    allowedHeaders: [],
    credentials: true,
  },
  allowEIO3: true,
});

io.on('connection', (socket) => {

  //join
  socket.on('join', (user) => {
    socket.emit('message', {
      sender: 'bot',
      text: `Hello, ${user}! Thank you for shopping with us. Please, select a category for the item(s) you are looking for:`,
      type: 'categories-list',
      choices: ['jewelry', 'men\'s clothing', 'women\'s clothing',  'electronics']
    });
  });
  
  //listen simple message
  socket.on('message', (message) => {
    io.emit('message', messageUtils.generateMessage({
      sender: 'human',
      text: message,
      type: 'simple-message'
    }));
    io.emit('message', messageUtils.generateMessage({
      sender: 'bot',
      text: 'response',
      type: 'simple-message'
    }));
  });

  //listen picked category
  socket.on("selected-category", (category) => {
    console.log(category);
      axios.get(`http://localhost:3001/items/${category}`).then(res=>{
        io.emit('message', messageUtils.generateMessage({
          sender: 'human',
          text: `I want to search ${category} items`,
          type: 'simple-message'
        }));
        io.emit('message', messageUtils.generateMessage({
          sender: 'bot',
          choices: res.data,
          type: 'items-list'
        }));
      })
      
    });
  //display items
});

server.listen(port, () => {
  console.log('listening on *:3002');
});
