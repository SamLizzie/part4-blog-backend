
const express = require('express')
const app = express()
const cors = require('cors')
const blogsRouter = require('./controllers/blogs')
const logger = require('./utils/logger')
const config = require('./utils/config')
const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

logger.info("Connecting to MongoDB")

mongoose.connect(config.MONGODB_URI).then(_ => {
    logger.info("Connect to Mongo")
}).catch(error => {
    logger.error("Error connecting to MongoDB: " + error)
})

app.use(cors())
app.use(express.json())
app.use('/api/blogs', blogsRouter)

module.exports = app