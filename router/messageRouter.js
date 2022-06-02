const router = require('express').Router()
const MessageModel = require("../models/message.models")


router.get("/",  (req, res)=>{
    MessageModel.find()
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
})
    
 router.post("/", (req, res)=>{
 	const message = req.body
 	new MessageModel(message).save()
 	.then(resp => res.json(resp))
 	.catch(err => res.json(err))
})
 	

module.exports = router