var mongoose = require("mongoose");
// const MONGODB_URI = 'mongodb://heroku_pjsfcxhz:drv9didd17l1nfe5u67hp81e8o@ds157895.mlab.com:57895/heroku_pjsfcxhz';

var Schema = mongoose.Schema;

var BenchmarkSchema = new Schema({
	squat: {
  		type: String,
  		default: "N/A"
		},
	bench: {
		type: String,
		default: "N/A"
	},
	shoulder_press: {
		type: String,
		default: "N/A"
	},
	deadlift: {
		type: String,
		default: "N/A"
	},
	sprinting: {
		type: String,
		default: "N/A"
	},
	power_lifting: {
		type: String,
		default: "N/A"
	},
	mile_run: {
		type: String,
		default: "N/A"
	},
	ThreeK_run: {
		type: String,
		default: "N/A"
	},
	FiveK_run: {
		type: String,
		default: "N/A"
	},
	TenK_run: {
		type: String,
		default: "N/A"
	},
	 MMA:{
		type: String,
		default: "N/A"
	}
});
var Benchmark = mongoose.model("Benchmark", BenchmarkSchema);

module.exports = Benchmark;
// module.exports = MONGODB_URI;
