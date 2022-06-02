const mongoose = require('mongoose')

const Schema = mongoose.Schema

const blogSchema = new Schema({
	title: String,
	image: String,
	content: String,
	desc: String
},
{
 	timestamp: true
}
)

const BlogModel = mongoose.model("BlogModel", blogSchema)
module.exports = BlogModel
