const router = require("express").Router()
const ListingModel = require('../models/listing.models')


router.get("/", (req, res)=>{
    ListingModel.find().populate("category")
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
    })

router.get("/:title", (req, res)=>{
        const {title} = req.params
        ListingModel.findOne({title})
        .then(resp => res.json(resp))
        .catch(err => res.json(err))
})
    
router.get("/category/:category", (req, res)=>{
        const category = req.params.category
        ListingModel.find({category})
        
        .then(resp => res.json(resp))
        .catch(err => res.json(err))
})



router.post("/", (req, res)=>{
    const list = req.body;
  new	ListingModel(list).save()
  
  .then(resp => res.json(resp))
  .catch(err => res.json(err))
})
  
  router.patch("/:id", (req, res)=>{
          const id = req.params.id
          ListingModel.findById(id)
          .then(list => {
              list.category = req.body.category;
              list.subCategory = req.body.subCategory
              ListingModel.findByIdAndUpdate(id, list, {new:true})
              .then(resp => res.json(resp))
              .catch(err => res.json(err))
          })
          .catch(err => res.json(err))
})
   
router.delete("/:id", (req, res)=>{
       ListingModel.findByIdAndDelete(req.params.id)
       .then(resp => res.json(resp))
       .catch(err => res.json(err))
})

module.exports= router