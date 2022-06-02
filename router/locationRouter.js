const router = require("express").Router()
const LocationModel = require("../models/location.models")

router.get("/", (req, res)=>{
    LocationModel.find()
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
    })
    
router.post("/", (req, res)=>{
    const location = post.body.location
    new LocationModel(location).save()
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
})

module.exports = router