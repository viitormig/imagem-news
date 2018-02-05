
var mongoose = require('mongoose'),
	Blog = mongoose.model('Blog');

exports.findAll = function(req, res){
	Blog.find({}, function(err, blogs){
		if(err){
			throw new Error(err);
		}
		res.send(blogs);
	});
};

exports.findOne = function(req, res){
	Blog.findById(req.params.id, function(err, blog){
		if(err){
			throw new Error(err);
		}
		res.send(blog);
	});
};

exports.add = function(req, res){
	var document = new Blog(req.body);
	document.save(function(err,blog){
		if(err){
			throw new Error(err);
		}
		res.send(blog);
	});
};

exports.update = function(req, res){
	Blog.findByIdAndUpdate(req.params.id, {
		$set: req.body
	}, function(err, blog){
		if(err){
			throw new Error(err);
		}
		res.send(blog);
	});
};

exports.remove = function(req, res){
	Blog.findByIdAndRemove(req.params.id, function(err, blog){
		if(err) {
	      	throw new Error(err);
	    }
	    res.send(blog);
	});
};