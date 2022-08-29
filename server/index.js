import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRoutes from './routes/posts.js'


const app = express()

//Express Middleware

app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))
app.use(cors())

app.use('/posts', postRoutes)   //every routes inside postRoutes are going to start with/posts

//Connect to DB
const CONNECTION_URL = 'mongodb+srv://itsjustabhii:itsjustabhii@cluster0.yiykn.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewURLParser: true, useUnifiedTopology:true})
    .then(() => app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`)))
    .catch((error) => console.log(error.message))

// mongoose.set('useFindAndModify', false)


