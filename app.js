var request = require('request');
var parse = require('parse-json-response');
var http = require('http');


/****************Hit xively request and get response*************************/


var server = http.createServer(function(req, res) {
  res.writeHead(200);
	request.get({ url: 'https://api.xively.com/v2/feeds/671578678', headers: { 'X-ApiKey': 'XFtksHNC7ojdCdmumL3r8xslOXoNaz8EKs3K4mzoKfqwYHKu' }}, function (e, r, body) {
		console.log(body)	
	//	res.end(body);
		var responseJSON = JSON.parse(body);
	//	console.log(responseJSON.location);
		console.log(responseJSON.location.lat);
		console.log(responseJSON.location.lon);
		res.end ("Lat = "+responseJSON.location.lat + " and Longitude = " +responseJSON.location.lon);
	});
});

server.listen(8080); 

/****************Parse Xively Response*************************/
/**var server = http.createServer(function(req, res) {
  res.writeHead(200);
request.get({ url: 'https://api.xively.com/v2/feeds/671578678', headers: { 'X-ApiKey': 'XFtksHNC7ojdCdmumL3r8xslOXoNaz8EKs3K4mzoKfqwYHKu' }}, parse(function(er, data, res) {
	console("************");
	console(data);
	console(res);
  if (er)
    console.error('it failed', res.headers, er)
  else
    console.error('it worked', res.headers, data)
}));
});

server.listen(8080); */