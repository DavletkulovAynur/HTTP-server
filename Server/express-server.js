const express = require('express')
const app = express()
const port = 4000

// middleware
app.use((request, response, next) => {
  request.chance = Math.random()
  next()
})

app.get('/', (request, response) => {
  response.json({
    chance: request.chance
  })
  // response.send('hello Express')
})

// Маршрутизация - отвечает на конкретный клиентский запрос
app.get('/public', function(request, response) {
  response.set('Access-Control-Allow-Origin', '*')
  response.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
  response.set('Access-Control-Allow-Headers', 'Content-Type')
  response.send(JSON.stringify({
    message: 'This is public'
  }));
})

app.listen(port, (err) => {
  if(err) {
    return console.log('something bad happened', err)
  }

  console.log(`server listening on port ${port}`)
})