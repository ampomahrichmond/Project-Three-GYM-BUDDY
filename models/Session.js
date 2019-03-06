var mongoose = require("mongoose");
// const MONGODB_URI = 'mongodb://heroku_pjsfcxhz:drv9didd17l1nfe5u67hp81e8o@ds157895.mlab.com:57895/heroku_pjsfcxhz';


var Schema = mongoose.Schema;

var SessionSchema = new Schema({
  	url_video: {
  		type: String,
  		required: false,
	},
	date: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		required: true,
		default: "Today's Session"
	},
	score: {
		type: String,
		required: true,
		default: "N/A"
	}
});

var Session = mongoose.model("Session", SessionSchema);

module.exports = Session;
// module.exports = MONGODB_URI;
