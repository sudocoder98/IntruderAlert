var http = require('http');
var port = "3000";
var fs = require('fs');
var path = require('path');
var formidable = require('formidable');
var util = require('util');

var httpsServer = http.createServer(function(req, res) {
	console.log("request: ", req.url);
	if(req.method === "GET") {
		var fileName = '.' + req.url;
		if(fileName== './')
			fileName = './index.html';
		var extname = String(path.extname(fileName)).toLowerCase();
		var contentType = 'text/html';
		var mimeTypes = {
			'.html': 'text/html',
	        '.js': 'text/javascript',
	        '.css': 'text/css',
			'.json': 'application/json',
			'.png': 'image/png',
			'.jpg': 'image/jpg',
			'.ico': 'image/x-icon',
			'.gif': 'image/gif',
			'.wav': 'audio/wav',
			'.mp4': 'video/mp4',
			'.woff': 'application/font-woff',
			'.ttf': 'application/font-ttf',
			'.eot': 'application/vnd.ms-fontobject',
			'.otf': 'application/font-otf',
		    '.svg': 'application/image/svg+xml'
    	};
    	contentType = mimeTypes[extname];
    	sendFileContent(res, fileName, contentType);
	}
	else if(req.method.toUpperCase() === "POST")  {
		processFormData(req, res);
	}
});

httpsServer.listen(port, function(error) {
	console.log(error);
});

function sendFileContent(response, fileName, contentType) {
	fs.readFile(fileName, function(error, data) {
		if(error) {
			response.writeHead(404);
			response.write("Error 404: File Not Found");
		}
		else {
			response.writeHead(200, {'Content-Type': contentType});
			response.write(data);
		}
		response.end();
	});
}

function processFormData(request, response) {
	var form = new formidable.IncomingForm();
    form.parse(request, function(err, fields, files) {
      response.writeHead(200, {'content-type': 'text/plain'});
      response.write('received upload:\n\n');
      response.end(util.inspect({fields: fields, files: files}));
    });
	//response.end();
}