const router = require('express').Router()
const SubCategoryModel = require('../models/subCategory.models')


router.get("/", (req, res)=>{
	SubCategoryModel.find().populate("category")
	.then(resp => res.json(resp))
	.catch(err => res.json(err))
})

router.post("/", (req, res)=>{
	const sub = req.body;
	new SubCategoryModel(sub).save()
	.then(resp => res.json(resp))
	.catch(err => res.json(err))
	})

router.delete("/:id", (req, res)=>{
	const id= req.params.id
	SubCategoryModel.findByIdAndDelete(id).populate("category")
	.then(resp => res.json(resp))
	.catch(err => res.json(err))
})

module.exports = router;