const mongoose = require('mongoose')
const Schema = mongoose.Schema


const locationSchema = new Schema({
	country: String,
	state: String,
	desc: String,
},
	{
	timestamp: true
	}
)

const LocationModel = mongoose.model("LocationModel", locationSchema)
module.exports = LocationModel