
var express = require('express');

module.exports = function(app, config){
	app.configure(function(){
		app.use(express.compress());
		app.set('port', config.port);
		app.use(express.logger('dev'));
		app.use(express.bodyParser());
		app.use(express.methodOverride());

		app.use('/api', app.router);
		app.use('/', express.static(__dirname + '/../public'))
			.get('*',function (req,res) {
		        res.sendfile(__dirname + '/../public/views/index.html');
		    });
	})
};