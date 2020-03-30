const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const log = console.log

app.get('/', (req, res) => {
  // res.send('<h1>Hello, World!</h1>')
  res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
  log('== a user connected\n')
  socket.on('chat message', msg => {
    log(msg)
    io.emit('chat message', msg)
  })  
})

http.listen(3000, _ => console.log('SERVER_ON'))
