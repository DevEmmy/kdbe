const mongoose = require('mongoose')

const Schema = mongoose.Schema


const categorySchema = new Schema(
    {
        title: String, 
        displayImage: {type: String, default: 'https://th.bing.com/th/id/OIP.cTjh8u5SKo4lBbM9DnXIDgHaE7?pid=ImgDet&rs=1'},
        link: String,
    }, 
    {
         timestamp: true
    }
    )
    
const CategoryModel = mongoose.model("CategoryModel", categorySchema)

module.exports = CategoryModel

    