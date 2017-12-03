// require mongoose
var mongoose = require('mongoose')
	, Schema = mongoose.Schema;

// new Schema
var ScrapedNewsSchema = Schema({
	title: {
		type: String,
		required: true,
		unique: true 
	},
	imgURL: {
		type: String,
		required: true
	},
	synopsis: {
		type: String,
		required: true
	},
	articleURL: {
		type: String,
		required: true
	},
	comments: [{
		text: {
			type: String 
		}
	}]
});


var ScrapedNews = mongoose.model('ScrapedNews', ScrapedNewsSchema);

module.exports = ScrapedNews;