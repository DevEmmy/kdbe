const router = require('express').Router()
const BlogModel = require("../models/blog.models")

router.get("/", (req, res)=>{
    BlogModel.find()
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
 })

router.get("/:title", (req, res)=>{
    const title = req.params.title
    BlogModel.findOne({title})
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
})

router.post("/", (req, res)=>{
    const blog = req.body
 new	BlogModel(blog).save()
 .then(resp => res.json(resp))
 .catch(err => res.json(err))
 })
 
 router.patch("/:id",  (req, res)=>{
     BlogModel.findById(req.params.id)
     .then(blog =>{
              blog.content = req.body.content
              BlogModel.findByIdAndUpdate(req.params.id, blog, {new: true})
              .then(resp => res.json(resp))
              .catch(err => res.json(err))
              })
    .catch(err => res.json(err))
} )
     

router.delete("/:id", (req, res)=>{
    BlogModel.findByIdAndDelete(req.params.id)
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
})

module.exports = router