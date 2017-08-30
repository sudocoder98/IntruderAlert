var http = require('http');
var port = "3000";
var fs = require('fs');

var httpsServer = http.createServer(function(req, res) {
	if(req.method === "GET") {
		if(req.url === "/" || req.url === "/login") {
			sendFileContent(res, "index.html", "text/html");
		}
		else {
			sendFileContent(res, "fileNotFound.html", "text/html");
		}
	}
});

httpsServer.listen(port, function(error) {
	console.log(error);
});

function sendFileContent(response, fileName, contentType) {
	fs.readFile(fileName, function(error, data) {
		if(error) {
			response.writeHead(404);
			response.write("File Not Found!");
		}
		else {
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}