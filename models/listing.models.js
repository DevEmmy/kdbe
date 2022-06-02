const mongoose = require('mongoose')
const Schema = mongoose.Schema


const listingSchema = new Schema({
	title: String,
	desc: String,
	displayImage: {type: String, default: "https://th.bing.com/th/id/OIP.cTjh8u5SKo4lBbM9DnXIDgHaE7?pid=ImgDet&rs=1"},
	images: {type: Array},
	videos: [{type: String}],
	location: {type: Schema.Types.ObjectId, ref:"LocationModel"},
	category: { type: Schema.Types.ObjectId, ref: "CategoryModel"},
	subcategory: {type: Schema.Types.ObjectId, ref: "SubCategoryModel"},
	features : Array,
	isAvailable: {type: Boolean, default: true},
	price: Number
},
{
 	timestamp: true
}
)

const ListingModel = mongoose.model("ListingModel", listingSchema)
module.exports = ListingModel
