const mongoose = require('mongoose')

const Schema = mongoose.Schema

const messageSchema = new Schema({
	sender: {type: Schema.Types.ObjectId, ref: "UserModel", required: true},
	messageContent: String
},
{ timestamp: true }
)

const MessageModel = mongoose.model("MessageModel", messageSchema)

module.exports = MessageModel
