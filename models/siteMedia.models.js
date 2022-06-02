const mongoose = require('mongoose')
const Schema = mongoose.Schema


const siteMediaSchema = new Schema({
	image: {type: String, required: true, default: "https://th.bing.com/th/id/OIP.cTjh8u5SKo4lBbM9DnXIDgHaE7?pid=ImgDet&rs=1"},
	video : {type: String}
})

const SiteMediaModel = mongoose.model("SiteMediaModel", siteMediaSchema)
module.exports = SiteMediaModel;
 