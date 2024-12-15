const http = require('http');
const fs = require('fs');
const path = require('path');

//create server
const server = http.createServer((req, res) => {
    let filePath = '';

    switch(req.url){
        case '/':
            filePath = path.join(__dirname, 'index.html');
            break;
        case '/about':
            filePath = path.join(__dirname, 'about.html');
            break;
        case '/contact-me':
            filePath = path.join(__dirname, 'contact-me.html');
            break;
        default:
            filePath = path.join(__dirname, '404.html');
            break;
    }

    fs.readFile(filePath, (err, content) => {
        if(err){
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('server Error');
        }else{
            const ext = path.extname(filePath);
            let contentType = 'text/html';
            res.writeHead(200, {'Content-Type': contentType});
            res.end(content);
        }
    });


});

server.listen(8000, ()=>{
    console.log('server running at http://localhost:8000/');
})