const router = require("express").Router();
const User = require("../models/users.models")
const requireLogin = require('../middleware')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { compareSync } = require('bcrypt');
const jwt_secret = process.env.JWT_SECRET

router.get('/all-users', (req, res)=>{
    User.find()
    .then((resp)=>res.status(200).json(resp))
    .catch(err=>res.status(404).json({error: "An error occured"}))
})

router.patch('/edit-profile', requireLogin, (req, res)=>{
    const profile = req.body;
    User.findByIdAndUpdate(req.user._id, profile)
    .then((resp)=>{res.json(resp)})
    .catch(err=>res.json({message:"An error occured"}))
})

router.route('/signup').post((req, res)=>{
    const {email, password, fullName} = req.body;
    bcrypt.hash(password, 8)
    .then(hashedpassword => {
        const newUser = new User({email, password: hashedpassword, fullName})
        newUser.save()
        .then((resp)=>{
            res.json({user:resp})
        })
        .catch(err=>res.json({message:"An error occured"})) 
    })
   
})

router.route('/signin').post((req, res)=>{
    const {email, password} = req.body;
    User.findOne({email})
    .then(user=>{
        if(!user){
            res.json({error: "There's no user with this email"})
        }
        else{
            bcrypt.compare(password, user.password)
            .then(doMatch=>{
                if(doMatch){
                    // res.json({message: `${user.username} has successfully signed in`})
                    const token = jwt.sign({_id: user._id}, jwt_secret)
                    res.json({token: token})
                }
                else{
                    res.json({message: "Wrong Password"})
                }
            })
        }
    })
})

router.get('/profile', requireLogin, (req, res)=>{
    const email = req.user.email;
    User.findOne({email}).populate("savedListing")
    .then(user=>{
        res.status(200).json(user)
    })
    .catch(err=> res.json(err))
})

router.get('/:userId', (req, res)=>{
    const userId = req.params.userId
    User.findById(userId)
    .then(user => res.json(user))
    .catch(err=> res.json(err))
})

router.put('/', requireLogin, (req, res)=>{
    const userId = req.user._id
    User.findById(userId)
    .then(user=>{
        let listing = req.body.listing;
        user.savedListing.push(listing)
        User.findByIdAndUpdate(userId, user, {new: true}).populate("savedListing")
        .then(resp => res.json(resp))
        .catch(err => res.json(err))
    })
    .catch(err => res.json(err))
})

module.exports = router;