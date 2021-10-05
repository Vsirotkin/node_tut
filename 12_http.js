const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('welcome to my first home page!')
    }
    if (req.url === '/about') {
        res.end('here is out short history!')
    }
    res.end(`
    <h1>Oops</h1>
    <p>Sorry, no page you are looking for</p>
    <a href="/">back home</a>
    `)
})

server.listen(5000);
