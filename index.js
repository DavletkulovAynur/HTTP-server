// модуль http 
const http = require('http')
const port = 3000


// request: хранит информацию о запросе
// response: управляет отправкой ответа

const requestHandler = (request, response) => {

    if(request.url == "/about"){
        response.write("<h2>About</h2>");
    }
    console.log(request.url)
    console.log("Тип запроса", request.method)
    console.log('User-agent', request.headers['user-agent'])
    console.log(request.headers)
    
    // response.setHeader("UserId", 12);
    // response.setHeader("Content-Type", "text/html; charset=utf-8;");
    // response.write("<h2>hello world</h2>");
    response.end();
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