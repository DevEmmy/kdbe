const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
    fullName: String,
    password: String,
    email: String,
    savedListing: Array,
    isAdmin: {type: Boolean, default: false}
}, 
    {timestamps: true}
)

const UserModel = mongoose.model("UserModel", userSchema)

module.exports = UserModel 
