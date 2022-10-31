const mongoose = require('mongoose')
const { Schema } = mongoose
const { ObjectId } = Schema.Types

const BookModel = new Schema({
  title: {
    type: String,
    required: [true, 'Book title is required'],
    trim: true,
  },
  author: { type: ObjectId, ref: 'Admin' },
  chapters: [
    { type: ObjectId, ref: 'Chapter' }
  ],
  cover: {
    data: Buffer,
    contentType: String
  },
  slugName: {
    type: String,
    required: [true, 'Slug name is required'],
    trim: true,
    unique: [true, 'Slug name must be unique']
  },
  desc: {
    type: String,
    required: [true, 'Book description is required'],
    unique: [true, 'Book description must be unique'],
    trim: true,
  }
})

module.exports = mongoose.model('Book', BookModel)