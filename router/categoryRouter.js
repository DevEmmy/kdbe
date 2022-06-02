const router = require('express').Router()
const CategoryModel = require('../models/category.models')



router.get("/", (req, res)=>{
	CategoryModel.find()
	.then(resp => res.json(resp))
	.catch(err => res.json(err))
})

router.get("/:link", (req, res)=>{
	CategoryModel.find({link: req.params.link})
	.then(resp => res.json(resp))
	.catch(err => res.json(err))
})

router.post("/", (req, res)=>{
	const category= req.body;
	new CategoryModel(category).save()
	.then(resp => res.json(resp))
	.catch(err => res.json(err))
})

router.delete("/:id", (req, res)=>{
	const id = req.params.id
	CategoryModel.findByIdAndDelete(id)
	.then(resp=> res.json(resp))
	.catch(err => res.json(err))
})

router.put("/:id", (req, res)=>{
	const id = req.params.id;
	CategoryModel.findById(id)
	.then(cat=> {
	cat.displayImage = 	req.body.displayImage
	cat.link = req.body.link
	CategoryModel.findByIdAndUpdate(id, cat, {new : true})
	.then(resp=> res.json(resp))
	.catch(err => res.json(err))		
	})
	.catch(err => res.json(err))
})

module.exports = router;