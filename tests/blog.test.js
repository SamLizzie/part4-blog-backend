const { test, after, beforeEach} = require('node:test')
const assert = require('node:assert')
const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const Blog = require('../models/blog')

const initialBlogs = [
    {
        title: 'Primer blog',
        author: 'Edu',
        url: 'www.google.com',
        likes: 2
    },
    {
        title: 'Segundo blog',
        author: 'Maria',
        url: 'www.google.com',
        likes: 10
    }
  ]

const api = supertest(app)

beforeEach(async () => {
    await Blog.deleteMany({})
    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()
    blogObject = new Blog(initialBlogs[1])
    await blogObject.save()
})


test.only('get all of the blogs', async () => {
    const response = await api.get('/api/blogs')

    assert.strictEqual(response.body.length, initialBlogs.length)
   
   after(async () => {
    mongoose.connection.close()
   })
})