const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Error al cargar la pagina');
            return;
        }

        res.writeHead(200, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(content);
    });
});

const port = process.env.PORT || 8080;

server.listen(port, '0.0.0.0', () => {
    console.log('Servidor funcionando en puerto ' + port);
});
