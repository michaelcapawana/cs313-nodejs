const http = require('http');

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer(onRequest);


function onRequest(req, res) {
    if (req.url == "/home") {
	res.writeHead(200, {"Content-Type": "text/html"});
	res.write("<h1>Welcome to the Home Page</h1>");
	res.end();
    } else if(req.url == "/getData") {
	res.writeHead(200, {"Content-Type": "application/json"});
	var data = {"name":"Br. Burton","class":"cs313"}
	res.write(JSON.stringify(data));
	res.end();
    } else {
	res.writeHead(404, {"Content-Type": "text/html"});
	res.write("<h1>Page Not Found</h1>");
	res.end();
    }
}

server.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
		    });
