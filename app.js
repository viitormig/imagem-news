
var express 	= require('express'),
	mongoose 	= require('mongoose'),
	fs 			= require('fs'),
	http 		= require('http'),
	config 		= require('./config/config'),
	root 		= __dirname,
	app 		= express(),
	server 		= null;

require('./config/db')(config);

var modelsPath = __dirname + '/server/models';
fs.readdirSync(modelsPath).forEach(function(file){
	if(file.indexOf('.js') >= 0){
		require(modelsPath + '/' + file);
	}
});

app.use(express.static(__dirname + '/public'))
	.get('*',function (req,res) {
        res.sendfile(__dirname + '/public/views/index.html');
    });

require('./config/express')(app, config);
require('./config/routes')(app);

var server = http.createServer(app);
server.listen(config.port, config.host);
console.log('App Started on port ' + config.host);