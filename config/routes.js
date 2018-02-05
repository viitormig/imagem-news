
var rest = require('../server/controllers/rest');

module.exports = function(app){

	// find all blogs route
	app.get('/blogs', rest.findAll);

	// find one blog route
	app.get('/blogs/:id', rest.findOne);

	// Add blog route
	app.post('/blogs', rest.add);

	// Update blog route
	app.put('/blogs/:id', rest.update);

	// Delete blog route
	app.del('/blogs/:id', rest.remove);

	app.get('*', function(req, res){
		res.sendfile('/../public/views/index.html');
	});

};