
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Blog = new Schema({
	dateCreate: String,
	title: String,
	author: String,
	categoty: String,
	text: String
},{
	versionKey: false,
	toJSON: {
		virtuals: true,
		transform: function(doc, ret, options){
			ret.id = ret._id.toHexString();
			delete ret._id;
		}
	},
	toObject: {
		virtuals: true
	}
});

mongoose.model('Blog', Blog);