// модуль http 
const http = require('http')
const port = 3000


// request: хранит информацию о запросе
// response: управляет отправкой ответа

const requestHandler = (request, response) => {
  console.log(request.url)
  console.log("Тип запроса", request.method)
  response.end('Hello Node.js Server!')
}

// http.createServer() - у http вызываем метод createServer
const server = http.createServer(requestHandler)

// чтобы сервер мог прослушивать и обрабатывать входящие подключения, у объекта сервера вызываем метод listen()
server.listen(port, (err) => {
    if(err) {
        return console.log('error', err)
    }

    console.log(`server listening in port ${port}`)
})