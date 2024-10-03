const logger = require('../utils/logger')
const config = require('../utils/config')
const mongoose = require('mongoose')

mongoose.connect(config.MONGODB_URI).then(_ => {
    logger.info("Connect to Mongo")
}).catch(error => {
    logger.error("Error connecting to MongoDB: " + error)
})

const blogSchema = mongoose.Schema({
    title: String,
    author: String,
    url: String,
    likes: Number
})

blogSchema.set('toJSON', {transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString(),
    delete returnedObject._id
    delete returnedObject.__v
}})

const Blog = mongoose.model("Blog", blogSchema)

module.exports = Blog;