const mongoose = require('mongoose')

const Schema = mongoose.Schema

const subCategorySchema= new Schema({
	title: String,
	category:  {type: Schema.Types.ObjectId, ref: "CategoryModel"}
},
{
 	timestamp: true
}
)

const SubCategoryModel = mongoose.model("SubCategoryModel", subCategorySchema)
module.exports = SubCategoryModel
