const router = require("express").Router()
const SiteMediaModel = require('../models/siteMedia.models')

router.get("/", (req, res)=>{
    SiteMediaModel.find()
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
})

router.post("/", (req,res)=>{
    const media = req.body
    new SiteMediaModel(media).save()
    .then(resp => res.json(resp))
    .catch(err => res.json(err))
})

module.exports = router