const express = require('express');
const router = require('express').Router();
const cors = require('cors')
const bodyParser = require('body-parser')
const blogRouter = require('./router/blogRouter')
const categoryRouter = require('./router/categoryRouter')
const listingRouter = require('./router/listingRouter');
const locationRouter = require('./router/locationRouter')
const messageRouter = require('./router/messageRouter')
const siteMediaRouter = require('./router/siteMediaRouter')
const subCategoryRouter = require('./router/subCategory')
const userRouter = require('./router/userRouter')
require('dotenv').config()
const { mongoose } = require('mongoose')

const app = express();
app.use(cors())


const uri =  "mongodb://localhost:27017/kde"
// process.env.DB_URI

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: false}));

const connection = mongoose.connection
connection.once('open', ()=>{console.log('Database running Successfully')})

app.use(bodyParser.json({limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended: false}));

// Routes
app.use('/blog',blogRouter)
app.use('/category', categoryRouter)
app.use('/listing', listingRouter)
app.use('/location', locationRouter)
app.use('/message', messageRouter)
app.use('/site-media', siteMediaRouter)
app.use('/sub-category', subCategoryRouter)
app.use('/auth', userRouter)


const port = process.env.PORT || 5555

app.listen(port, ()=>{console.log(`Port ${port} is running`)})
